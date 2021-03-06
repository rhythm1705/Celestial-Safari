import React, { useState, useEffect } from "react";
import {
	Box,
	Button,
	InfiniteScroll,
	Grid,
	Select,
	Tabs,
	Tab,
	Header,
	Image,
	Text
} from "grommet";
import ListEmpty from "../../assets/ListEmpty.svg";
import SelectImage from "../../assets/Select.svg";
import LaunchCard from "../../components/LaunchCard";
import NewCollection from "../../components/NewCollection";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useSelector } from "react-redux";
import axios from "axios";
import { external as externalAxios } from "../../utils/externalAxios";
import { AddCircle, Trash } from "grommet-icons";

function MyCollections() {
	const [selectedCollection, setSelectedCollection] = useState({
		name: "Select a Collection"
	});
	const [collections, setCollections] = useState();
	const [newCollection, setNewCollection] = useState(false);
	const [launches, setLaunches] = useState(null);
	const auth = useSelector(state => state.auth);

	useEffect(() => {
		const getUserCollections = () => {
			axios
				.get("/api/collections/owner/" + auth.user.id)
				.then(res => {
					setCollections(res.data);
				})
				.catch(err => {
					console.log("err", err);
				});
		};
		if (!collections) {
			getUserCollections();
		} else if (selectedCollection.name !== "Select a Collection") {
			setSelectedCollection(
				collections.filter(
					collection => collection._id === selectedCollection._id
				)[0]
			);
		}
	}, [collections, auth.user.id, selectedCollection]);

	useEffect(() => {
		const onChange = () => {
			return () => {
				setCollections(undefined);
			};
		};
		const getLaunches = async () => {
			const launchesData = selectedCollection.launches.map(
				async launch => {
					const response = await externalAxios.get(
						"https://launchlibrary.net/1.4/launch/" + launch
					);
					let launchData = response.data.launches[0];
					return (
						<LaunchCard
							key={launchData.id}
							itemId={launchData.id}
							title={launchData.name}
							location={launchData.location.name}
							date={launchData.net}
							img={launchData.rocket.imageURL}
							onChange={onChange()}
						/>
					);
				}
			);
			setLaunches(await Promise.all(launchesData));
		};
		if (selectedCollection.launches) {
			getLaunches();
		}
	}, [selectedCollection]);

	const toggleNewCollection = () => {
		return () => {
			setNewCollection(!newCollection);
			setCollections(undefined);
		};
	};

	const deleteCollection = async () => {
		await axios
			.delete("/api/collections/" + selectedCollection._id)
			.then(res => {})
			.catch(err => {
				console.log("err", err);
			});
		setCollections(undefined);
		setSelectedCollection({
			name: "Select a Collection"
		});
	};

	return (
		<Box flex>
			{collections && (
				<Box
					direction="row-responsive"
					pad="small"
					gap="medium"
					flex={false}
				>
					<Select
						children={option => {
							return (
								<Header pad="medium">
									<Text size="medium">{option.name}</Text>
								</Header>
							);
						}}
						placeholder="Select"
						options={collections}
						value={selectedCollection.name}
						valueKey="name"
						onChange={({ option }) => setSelectedCollection(option)}
					/>
					<Box
						direction="row"
						gap="small"
						justify="center"
						flex={false}
					>
						<Button
							label="New"
							icon={<AddCircle />}
							onClick={toggleNewCollection()}
							primary
						/>
						<Button
							label="Delete"
							icon={<Trash />}
							disabled={
								selectedCollection.name ===
								"Select a Collection"
							}
							onClick={() => deleteCollection()}
							color="status-critical"
							primary
						/>
					</Box>
				</Box>
			)}

			<NewCollection
				invisible={toggleNewCollection()}
				open={newCollection}
			></NewCollection>
			{selectedCollection.name !== "Select a Collection" ? (
				<Box flex fill>
					{selectedCollection.launches.length === 0 && (
						<Box fill justify="center" align="center">
							<Box width="medium" height="medium">
								<Image
									src={ListEmpty}
									fit="contain"
									fill
								></Image>
							</Box>
							<Text size="large" weight="bold" color="control">
								Add some items to this collection.
							</Text>
						</Box>
					)}
					{!launches && (
						<Box align="center" justify="center" fill>
							<ClimbingBoxLoader color="#007575" />
						</Box>
					)}
					{selectedCollection.launches.length > 0 && launches && (
						<Tabs>
							<Tab title="Launches">
								<Box fill overflow="auto" pad="small">
									<Grid columns="medium" gap="small">
										<InfiniteScroll
											items={launches}
											step={20}
										>
											{launch => (
												<React.Fragment
													key={launch.props.itemId}
												>
													{launch}
												</React.Fragment>
											)}
										</InfiniteScroll>
									</Grid>
								</Box>
							</Tab>
						</Tabs>
					)}
				</Box>
			) : (
				<Box fill justify="center" align="center">
					<Box width="medium" height="medium">
						<Image src={SelectImage} fit="contain" fill></Image>
					</Box>
					<Text size="large" weight="bold" color="control">
						Choose a collection to view.
					</Text>
				</Box>
			)}
		</Box>
	);
}

export default MyCollections;
