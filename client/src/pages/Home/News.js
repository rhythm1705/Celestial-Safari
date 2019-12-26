import React, { useEffect, useState } from "react";
import { Box } from "grommet";
import { external as axios } from "../../utils/externalAxios";
import Spinner from "../../reusables/Spinner";
import NewsCard from "../../reusables/NewsCard";

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
		<>
			{NewsList.length === 0 ? (
				<Spinner></Spinner>
			) : (
				<Box gap="small" margin="small" align="center">
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
		</>
	);
}

export default News;
