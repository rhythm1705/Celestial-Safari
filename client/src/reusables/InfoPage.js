import React, { useState, useEffect } from "react";
import { Box, Button, Text, Heading, Layer, Tab, Tabs, Image } from "grommet";
import { FormClose } from "grommet-icons";
import NewsCard from "./NewsCard";
import { external as axios } from "./../utils/externalAxios";

function InfoPage(props) {
	const [itemData, setItemData] = useState([]);
	const [about, setAbout] = useState("");
	const [updates, setUpdates] = useState([]);

	useEffect(() => {
		const fetchItem = async () => {
			await axios
				.get("https://launchlibrary.net/1.4/launch/" + props.itemId)
				.then(res => {
					console.log("infopage res", res);
					setItemData(res.data.launches);
				});
		};
		if (itemData.length === 0) {
			fetchItem();
		}
		if (itemData.length !== 0) {
			axios
				.get(
					"https://en.wikipedia.org/api/rest_v1/page/summary/" +
						itemData[0].rocket.wikiURL.split("/").pop()
				)
				.then(res => {
					console.log("wikipedia summary res", res);
					setAbout(res.data.extract);
				});

			axios
				.get(
					"https://spaceflightnewsapi.net/api/v1/articles?ll=" +
						props.itemId
				)
				.then(res => {
					console.log("updates res", res);
					setUpdates(res.data.docs);
				});
		}
	}, [itemData, props.itemId]);
	console.log("itemId", props.itemId);
	console.log("itemData", itemData);

	return (
		<>
			{props.showInfoPage && itemData.length !== 0 && (
				<Layer full animation="fadeIn">
					<Box fill pad="medium">
						<Box>
							<Box>
								<Box
									direction="row"
									align="center"
									justify="between"
								>
									<Heading level="3" margin="small">
										{itemData[0].name}
									</Heading>
									<Button
										icon={<FormClose size="medium" />}
										onClick={() => props.viewInfoPage()}
									/>
								</Box>
								<Text>{itemData[0].net}</Text>
								<Text>{itemData[0].location.name}</Text>
							</Box>
							<Image src="" />
						</Box>
						<Box flex pad="xsmall">
							<Tabs flex>
								<Tab title="About">{about}</Tab>
								<Tab title="Updates">
									<Box
										fill
										overflow="auto"
										pad="small"
										align="center"
									>
										{updates.map(update => (
											<NewsCard
												title={update.title}
												image={update.featured_image}
												site={update.news_site_long}
												date={update.published_date}
												url={update.url}
												key={update._id}
											></NewsCard>
										))}
									</Box>
								</Tab>
								<Tab title="Missions">
									<Box
										fill
										overflow="auto"
										pad="small"
										align="center"
									>
										{itemData[0].missions.map(mission => (
											<Box key={mission.id}>
												<Text>{mission.name}</Text>
												<Text>
													{mission.description}
												</Text>
											</Box>
										))}
									</Box>
								</Tab>
							</Tabs>
						</Box>
					</Box>
				</Layer>
			)}
		</>
	);
}

export default InfoPage;
