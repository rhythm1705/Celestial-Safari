import React from "react";
import { Box, Text, Image } from "grommet";

function NewsCard(props) {
	const date = new Date(Date.parse(props.date)).toLocaleString("en-US", {
		timeStyle: "short",
		dateStyle: "short"
	});
	return (
		<Box
			border="all"
			// height={{ max: "small" }}
			fill="horizontal"
			margin="xsmall"
			hoverIndicator
			round
			onClick={() => {
				window.open(props.url);
			}}
			direction="row"
			align="center"
			justify="between"
			pad="medium"
			flex={false}
		>
			<Box direction="column" margin="xsmall">
				<Text size="large">{props.site}</Text>
				<Text size="medium" weight="bold">
					{props.title}
				</Text>
				<Text size="medium">{date}</Text>
			</Box>
			<Box
				height={{ min: "xsmall", max: "xsmall" }}
				width={{ min: "xsmall", max: "xsmall" }}
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
