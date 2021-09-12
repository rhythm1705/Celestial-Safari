import React, { useState, useEffect } from "react";
import { Grid, InfiniteScroll, Box } from "grommet";
import LaunchCard from "../../components/LaunchCard";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { external as axios } from "../../utils/externalAxios";

function Upcoming() {
	const [upcomingLaunches, setUpcomingLaunches] = useState([]);
	const [url, setUrl] = useState("https://ll.thespacedevs.com/2.2.0/launch/?name=&slug=&rocket__configuration__name=&rocket__configuration__id=&status=&rocket__spacecraftflight__spacecraft__name=&rocket__spacecraftflight__spacecraft__name__icontains=&rocket__spacecraftflight__spacecraft__id=&rocket__configuration__manufacturer__name=&rocket__configuration__manufacturer__name__icontains=&rocket__configuration__full_name=&rocket__configuration__full_name__icontains=&mission__orbit__name=&mission__orbit__name__icontains=&r_spacex_api_id=&net__gt=2021-09-11T00%3A00%3A00Z&net__lt=&net__gte=&net__lte=&window_start__gt=&window_start__lt=&window_start__gte=&window_start__lte=&window_end__gt=&window_end__lt=&window_end__gte=&window_end__lte=&last_updated__gte=&last_updated__lte=");

	const onMore = () => {
		fetchUpcoming(url);
	}

	const fetchUpcoming = async (url) => {
		await axios
			.get(url)
			.then(res => {
				let count = res.data.count;
				setUrl(res.data.next);
				const upcomingLaunchesData = res.data.results.map(
					upcomingLaunch => {
						return (
							<LaunchCard
								key={upcomingLaunch.id}
								itemId={upcomingLaunch.id}
								title={upcomingLaunch.name}
								location={
									upcomingLaunch.pad.location.name
								}
								date={upcomingLaunch.net}
								img={upcomingLaunch.image}
							/>
						);
					}
				);
				setUpcomingLaunches({ ...upcomingLaunches, upcomingLaunchesData });
			});
		// });
	};

	useEffect(() => {
		if (upcomingLaunches.length === 0) {
			fetchUpcoming(url);
		}
	}, [upcomingLaunches]);

	return (
		<>
			{upcomingLaunches.length === 0 ? (
				<Box align="center" justify="center" fill>
					<ClimbingBoxLoader color="#007575" />
				</Box>
			) : (
				<Grid columns="medium" gap="small">
					<InfiniteScroll items={upcomingLaunches} onMore={onMore}>
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
