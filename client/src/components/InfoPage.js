import React, { useState, useEffect } from "react";
import { Anchor, Box, Button, Text, Layer, Tab, Tabs, Image } from "grommet";
import { Calendar, Location, Info, Link } from "grommet-icons";

import { FormClose, Play } from "grommet-icons";
import NewsCard from "./NewsCard";
import { external as axios } from "../utils/externalAxios";

function InfoPage(props) {
	const [itemData, setItemData] = useState([]);
	const [about, setAbout] = useState("");
	const [updates, setUpdates] = useState([]);

	const calendarLink =
		"https://launchlibrary.net/1.4/calendar/" + props.itemId;

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
					<Box fill>
						<Box
							direction="row"
							pad="medium"
							align="center"
							justify="between"
							gap="small"
							background="background-contrast"
						>
							<Box
								round="full"
								overflow="hidden"
								width={{ min: "xsmall", max: "xsmall" }}
								height={{ min: "xsmall", max: "xsmall" }}
							>
								<Image
									src={itemData[0].rocket.imageURL}
									fill
									fit="cover"
								></Image>
							</Box>
							<Box alignSelf="start" fill justify="center">
								<Text size="large" weight="bold" color="text">
									{itemData[0].name}
								</Text>
								<Anchor label={itemData[0].lsp.name} />
							</Box>
							<Button
								icon={<FormClose size="medium" />}
								onClick={() => props.viewInfoPage()}
							/>
						</Box>

						<Box flex pad="xsmall">
							<Tabs flex>
								<Tab title="About">
									<Box
										pad="medium"
										gap="small"
										align="start"
										overflow="auto"
										fill
									>
										<Anchor
											color="neutral-3"
											href={calendarLink}
											icon={<Calendar />}
											label={itemData[0].net}
										/>
										<Anchor
											icon={<Location />}
											label={itemData[0].location.name}
											color="neutral-4"
											href={
												"https://www.google.com/maps/search/?api=1&query=" +
												itemData[0].location.name
											}
										/>
										<Button
											label="Watch Launch"
											icon={<Play color="red" />}
											color="red"
											href={itemData[0].vidURLs[0]}
											disabled={
												itemData[0].vidURLs.length === 0
											}
										/>
										<Text>{about}</Text>
										<Box
											direction="row"
											gap="small"
											justify="evenly"
											align="center"
											flex={false}
										>
											<Button
												label="Wikipedia"
												icon={<Link color="grey" />}
												color="grey"
												href={
													itemData[0].rocket.wikiURL
												}
											/>
											{itemData[0].rocket.infoURLs.map(
												url => {
													return (
														<Button
															key={url}
															label="More Info"
															icon={
																<Info color="blue" />
															}
															color="blue"
															href={url}
														/>
													);
												}
											)}
										</Box>
									</Box>
								</Tab>
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
										pad="medium"
										align="center"
										gap="small"
										flex={false}
									>
										{itemData[0].missions.map(mission => (
											<Box
												align="start"
												key={mission.id}
												flex={false}
											>
												<Box
													justify="between"
													align="center"
													direction="row"
													fill="horizontal"
												>
													<Text weight="bold">
														{mission.name}
													</Text>
													<Text
														weight="bold"
														color="green"
													>
														{mission.typeName}
													</Text>
												</Box>
												<Text>
													{mission.description}
												</Text>
												<Button
													label="Wikipedia"
													icon={<Link color="grey" />}
													color="grey"
													href={mission.wikiURL}
													disabled={
														mission.wikiURL
															.length === 0
													}
												/>
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
