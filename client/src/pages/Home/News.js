import React, { useEffect, useState } from "react";
import { Box, Grid, Text, Image } from "grommet";
import { external as axios } from "../../utils/externalAxios";
import Spinner from "../../reusables/Spinner";

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
			height="small"
			hoverIndicator
			round
			onClick={() => {
				window.open(props.url);
			}}
			wrap
		>
			<Grid
				columns={["3/4", "1/4"]}
				rows={[]}
				gap="small"
				areas={[["text", "image"]]}
				fill
			>
				<Box gridArea="text" direction="column" margin="xsmall">
					<Text size="small">{props.site}</Text>
					<Text size="xsmall">{props.title}</Text>
					<Text size="xsmall">{props.date}</Text>
				</Box>
				<Box
					gridArea="image"
					margin="medium"
					round
					overflow="hidden"
				>
					<Image src={props.image} fit="cover" />
				</Box>
			</Grid>
		</Box>
	);
}

function News() {
	const [NewsList, setNewsList] = useState([]);

	useEffect(() => {
		fetchNewsList();
		console.log("NEWS!!!");
	}, []);

	const fetchNewsList = async () => {
		await axios
			.get("https://spaceflightnewsapi.net/api/v1/articles")
			.then(res => {
				console.log("News", res.data);
				const News = res.data.docs;
				setNewsList(News);
			});
	};
	return (
		<Box>
			{NewsList.length === 0 ? (
				<Spinner></Spinner>
			) : (
				<Box gap="small" margin="small">
					{NewsList.map(news => (
						<NewsCard
							title={news.title}
							image={news.featured_image}
							site={news.news_site_long}
							date={news.published_date}
							url={news.url}
							key={news._id}
						></NewsCard>
					))}
				</Box>
			)}
		</Box>
	);
}

export default News;
