import React, { useState, useEffect } from "react";
import { Box, Button, Text } from "grommet";
import { Add, Checkmark } from "grommet-icons";
import { useSelector } from "react-redux";
import axios from "axios";

function Collection(props) {
	let initialBol = false;
	if (props.type === "launch" && props.data.launches.includes(props.itemId)) {
		initialBol = true;
	}
	const [inCollection, setInCollection] = useState(initialBol);
	const addLaunchToCollection = e => {
		if (!inCollection) {
			axios
				.patch("/api/collections/add/" + e[0], {
					launch: e[1]
				})
				.then(res => {
					console.log("Add to launch collection", res);
					setInCollection(true);
				})
				.catch(err => {
					console.log("err", err);
				});
		} else {
			axios
				.patch("/api/collections/remove/" + e[0], {
					launch: e[1]
				})
				.then(res => {
					console.log("Remove from launch collection", res);
					setInCollection(false);
				})
				.catch(err => {
					console.log("err", err);
				});
		}
	};
	return (
		<Button
			hoverIndicator
			onClick={() => {
				props.type === "launch" &&
					addLaunchToCollection([props.id, props.itemId]);
				if (props.onChange) {
					props.onChange();
				}
			}}
		>
			<Box pad="small" direction="row" align="center" gap="small">
				{inCollection ? <Checkmark /> : <Add />}
				<Text>{props.name}</Text>
			</Box>
		</Button>
	);
}

function AddToCollection(props) {
	const [userCollections, setUserCollections] = useState(null);
	const auth = useSelector(state => state.auth);

	useEffect(() => {
		const getUserCollections = () => {
			axios
				.get("/api/collections/owner/" + auth.user.id)
				.then(res => {
					setUserCollections(res.data);
				})
				.catch(err => {
					console.log("err", err);
				});
		};
		if (auth.isAuthenticated && !userCollections) {
			getUserCollections();
		}
	}, [auth.isAuthenticated, userCollections, auth.user.id]);

	return (
		<Box pad="small" gap="small">
			<Button
				alignSelf="stretch"
				label="New Collection"
				fill="horizontal"
				onClick={() => {
					props.showNewCollection();
					props.hideDropContent();
				}}
				primary
			/>
			{userCollections &&
				userCollections.map(collection => {
					return (
						<Collection
							name={collection.name}
							type={props.type}
							key={collection._id}
							id={collection._id}
							itemId={props.itemId}
							data={collection}
							onChange={props.onChange}
						></Collection>
					);
				})}
		</Box>
	);
}

export default AddToCollection;
