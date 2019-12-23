import React, { useState } from "react";
import { Box, Button, Text } from "grommet";
import { Calendar, Location } from "grommet-icons";
import InfoPage from "./InfoPage";

function Card(props) {
	const [infoPage, setInfoPage] = useState(false);

	const viewInfoPage = () => {
		return () => {
			setInfoPage(!infoPage);
		};
	};

	const img = "url(" + props.backgroundImg + ")";
	const background = {
		image: img
	};
	return (
		<Box
			border
			animation="slideUp"
			pad="small"
			margin="small"
			align="center"
			round
			gap="small"
			background={background}
		>
			<Text size="xlarge" textAlign="center">
				{props.title}
			</Text>
			{typeof props.location !== "undefined" && (
				<Text size="large" textAlign="center">
					<Location></Location>
					{props.location}
				</Text>
			)}
			<Text size="large" textAlign="center">
				<Calendar></Calendar>
				{props.date}
			</Text>
			<Box direction="row" gap="medium">
				<Button
					alignSelf="stretch"
					label="Add to collection"
					fill="horizontal"
					onClick={() => {
						alert("added");
					}}
					primary
				/>
				<Button
					alignSelf="stretch"
					label="Info"
					fill="horizontal"
					onClick={() => {
						// alert("info");
						setInfoPage(true);
					}}
					primary
				/>
			</Box>
			{infoPage && (
				<InfoPage
					itemId={props.itemId}
					showInfoPage={infoPage}
					viewInfoPage={viewInfoPage()}
				></InfoPage>
			)}
		</Box>
	);
}

export default Card;
