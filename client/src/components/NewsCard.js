import React from "react";
import { Box, Text, Image } from "grommet";

function NewsCard(props) {
	return (
		<Box
			animation={{
				type: "pulse",
				delay: 0,
				duration: 3000,
				size: "xsmall"
			}}
			border="all"
			elevation="medium"
			height={{ min: "small", max: "small" }}
			fill="horizontal"
			margin="small"
			hoverIndicator
			round
			onClick={() => {
				window.open(props.url);
			}}
			direction="row"
			align="center"
			justify="between"
		>
			<Box direction="column" margin="xsmall">
				<Text size="medium">{props.site}</Text>
				<Text size="small">{props.title}</Text>
				<Text size="small">{props.date}</Text>
			</Box>
			<Box
				height={{ max: "xsmall" }}
				width={{ max: "xsmall" }}
				margin="small"
				round
				overflow="hidden"
			>
				<Image src={props.image} fit="cover" />
			</Box>
		</Box>
	);
}

export default NewsCard;
