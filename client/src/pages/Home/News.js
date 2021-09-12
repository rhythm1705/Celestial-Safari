import React, { useEffect, useState } from "react";
import { Box } from "grommet";
import { external as axios } from "../../utils/externalAxios";
import NewsCard from "../../components/NewsCard";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function News() {
	const [NewsList, setNewsList] = useState([]);

	useEffect(() => {
		fetchNewsList();
	}, []);

	const fetchNewsList = async () => {
		await axios
			.get("https://api.spaceflightnewsapi.net/v3/articles")
			.then(res => {
				console.log("News", res);
				const News = res.data;
				setNewsList(News);
			});
	};
	return (
		<>
			<Box gap="small" margin="small" align="center">
				{NewsList.length === 0 ? (
					<ClimbingBoxLoader color="#007575" />
				) : (
					<>
						{NewsList.map(news => (
							<NewsCard
								title={news.title}
								image={news.imageUrl}
								site={news.newsSite}
								date={news.publishedAt}
								url={news.url}
								key={news.id}
							></NewsCard>
						))}
					</>
				)}
			</Box>
		</>
	);
}

export default News;
