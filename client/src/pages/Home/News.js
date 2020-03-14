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
			.get("https://spaceflightnewsapi.net/api/v1/articles")
			.then(res => {
				const News = res.data.docs;
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
								image={news.featured_image}
								site={news.news_site_long}
								date={news.published_date}
								url={news.url}
								key={news._id}
							></NewsCard>
						))}
					</>
				)}
			</Box>
		</>
	);
}

export default News;
