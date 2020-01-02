import React, { useState, useEffect } from "react";
import { Grid, InfiniteScroll, ResponsiveContext } from "grommet";
import LaunchCard from "../../components/LaunchCard";
import Spinner from "../../components/Spinner";
import { external as axios } from "../../utils/externalAxios";

function Past() {
	const [pastLaunches, setPastLaunches] = useState([]);
	const size = React.useContext(ResponsiveContext);

	useEffect(() => {
		const fetchPast = async () => {
			var today = new Date();
			var dd = String(today.getDate()).padStart(2, "0");
			var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
			var yyyy = today.getFullYear();
			today = yyyy + "-" + mm + "-" + dd;
			await axios
				.get(
					"https://launchlibrary.net/1.4/launch?startdate=1800-01-01&enddate=" +
						today +
						"&limit=10000&fields=name,location,net,rocket"
				)
				.then(res => {
					const pastLaunchesData = res.data.launches
						.map(pastLaunch => {
							let location = "";
							let img = "";
							if (pastLaunch.location !== undefined) {
								location = pastLaunch.location.name;
							}
							if (pastLaunch.rocket !== undefined) {
								img = pastLaunch.rocket.imageURL;
							}
							return (
								<LaunchCard
									key={pastLaunch.id}
									itemId={pastLaunch.id}
									title={pastLaunch.name}
									date={pastLaunch.net}
									location={location}
									img={img}
								/>
							);
						})
						.reverse();
					console.log("Past", res);
					setPastLaunches(pastLaunchesData);
				});
		};
		if (pastLaunches.length === 0) {
			fetchPast();
		}
	}, [pastLaunches]);

	return (
		<>
			{pastLaunches.length === 0 ? (
				<Spinner></Spinner>
			) : (
				<Grid columns="medium" gap="small">
					<InfiniteScroll
						items={pastLaunches}
						step={5}
						{...(size === "small" && { replace: true })}
					>
						{pastLaunch => (
							<React.Fragment key={pastLaunch.props.itemId}>
								{pastLaunch}
							</React.Fragment>
						)}
					</InfiniteScroll>
				</Grid>
			)}
		</>
	);
}

export default Past;
