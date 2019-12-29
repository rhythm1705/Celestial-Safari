import React, { useState, useEffect } from "react";
import { Grid, InfiniteScroll } from "grommet";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";
import { external as axios } from "../../utils/externalAxios";

function Upcoming() {
	const [upcomingLaunches, setUpcomingLaunches] = useState([]);

	useEffect(() => {
		const fetchUpcoming = async () => {
			await axios
				.get("https://launchlibrary.net/1.4/launch/next/1")
				.then(res => {
					let count = res.data.total;
					axios
						.get(
							"https://launchlibrary.net/1.4/launch/next/" + count
						)
						.then(res => {
							const upcomingLaunchesData = res.data.launches.map(
								upcomingLaunch => {
									return (
										<Card
											key={upcomingLaunch.id}
											itemId={upcomingLaunch.id}
											title={upcomingLaunch.name}
											location={
												upcomingLaunch.location.name
											}
											date={upcomingLaunch.net}
											backgroundImg={
												upcomingLaunch.rocket.imageURL
											}
										/>
									);
								}
							);
							console.log("Upcoming", res);
							setUpcomingLaunches(upcomingLaunchesData);
						});
				});
		};
		if (upcomingLaunches.length === 0) {
			fetchUpcoming();
		}
	}, [upcomingLaunches]);

	return (
		<>
			{upcomingLaunches.length === 0 ? (
				<Spinner></Spinner>
			) : (
				<Grid columns="medium" gap="small">
					<InfiniteScroll items={upcomingLaunches} step={20}>
						{upcomingLaunch => (
							<React.Fragment key={upcomingLaunch.props.itemId}>
								{upcomingLaunch}
							</React.Fragment>
						)}
					</InfiniteScroll>
				</Grid>
			)}
		</>
	);
}

export default Upcoming;
