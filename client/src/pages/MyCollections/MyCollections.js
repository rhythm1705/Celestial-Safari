import React, { useState, useEffect } from "react";
import { Box, Button, Select } from "grommet";
import { useSelector } from "react-redux";
import axios from "axios";

function MyCollections() {
	const [selectedCollection, setSelectedCollection] = useState({
		name: "Select Collection"
	});
	const [collections, setCollections] = useState();
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
		if (auth.isAuthenticated && !collections) {
			getUserCollections();
		}
	}, [auth.isAuthenticated, collections, auth.user.id]);
	return (
		<>
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
		</>
	);
}

export default MyCollections;
