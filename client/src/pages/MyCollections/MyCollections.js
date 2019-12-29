import React, { useState, useEffect } from "react";
import { Box, Button, InfiniteScroll, Grid, Select, Tabs, Tab } from "grommet";
import Card from "../../components/Card";
import NewCollection from "../../components/NewCollection";
import { useSelector } from "react-redux";
import axios from "axios";
import { external as externalAxios } from "../../utils/externalAxios";

function MyCollections() {
	const [selectedCollection, setSelectedCollection] = useState({
		name: "Select a Collection"
	});
	const [collections, setCollections] = useState();
	const [newCollection, setNewCollection] = useState(false);
	const [launches, setLaunches] = useState([]);
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
		}
		console.log("Running collections useeffect");
	}, [collections, auth.user.id]);

	useEffect(() => {
		const getLaunches = async () => {
			console.log(
				"selectedCollection.launches",
				selectedCollection.launches
			);
			const launchesData = selectedCollection.launches.map(
				async launch => {
					const response = await externalAxios.get(
						"https://launchlibrary.net/1.4/launch/" + launch
					);
					let launchData = response.data.launches[0];
					console.log("launchData", launchData);
					return (
						<Card
							key={launchData.id}
							itemId={launchData.id}
							title={launchData.name}
							location={launchData.location.name}
							date={launchData.net}
							backgroundImg={launchData.rocket.imageURL}
						/>
					);
				}
			);

			setLaunches(await Promise.all(launchesData));
		};
		if (selectedCollection.launches) {
			getLaunches();
			console.log("Running getLaunches");
		}
		console.log("Running launch useeffect");
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
			.then(res => {
				console.log("deleted collection", res);
			})
			.catch(err => {
				console.log("err", err);
			});
		setCollections(undefined);
		setSelectedCollection({
			name: "Select a Collection"
		});
	};

	console.log("launches", launches);
	return (
		<>
			<Box direction="row" pad="small" gap="medium">
				{collections && (
					<Select
						children={option => {
							return option.name;
						}}
						placeholder="Select"
						options={collections}
						value={selectedCollection.name}
						valueKey="name"
						onChange={({ option }) => setSelectedCollection(option)}
					/>
				)}
				<Button
					alignSelf="stretch"
					label="New"
					onClick={toggleNewCollection()}
					primary
				/>
				<Button
					alignSelf="stretch"
					label="Delete"
					disabled={selectedCollection.name === "Select a Collection"}
					onClick={() => deleteCollection()}
					color="status-critical"
					primary
				/>
			</Box>

			<NewCollection
				invisible={toggleNewCollection()}
				open={newCollection}
			></NewCollection>
			{selectedCollection.name !== "Select a Collection" && (
				<Box flex>
					<Tabs>
						{selectedCollection.launches.length > 0 &&
							launches.length !== 0 && (
								<Tab title="Launches">
									<Box fill overflow="auto" pad="small">
										<Grid columns="medium" gap="small">
											<InfiniteScroll
												items={launches}
												step={20}
											>
												{launch => (
													<React.Fragment
														key={
															launch.props.itemId
														}
													>
														{launch}
													</React.Fragment>
												)}
											</InfiniteScroll>
										</Grid>
									</Box>
								</Tab>
							)}
					</Tabs>
				</Box>
			)}
		</>
	);
}

export default MyCollections;
