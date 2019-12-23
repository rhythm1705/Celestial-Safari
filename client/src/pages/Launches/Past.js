import React, { useState, useEffect } from "react";
import { Box, Grid } from "grommet";
import Card from "../../reusables/Card";
import Spinner from "../../reusables/Spinner";
import { external as axios } from "../../utils/externalAxios";

function Past() {
	const [pastLaunches, setPastLaunches] = useState([]);

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
						"&limit=10000"
				)
				.then(res => {
					const pastLaunchesData = res.data.launches
						.map(pastLaunch => {
							return (
								<Card
									key={pastLaunch.id}
									itemId={pastLaunch.id}
									title={pastLaunch.name}
									date={pastLaunch.net}
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
		<Box>
			{pastLaunches.length === 0 ? (
				<Spinner></Spinner>
			) : (
				<Grid columns="medium" gap="small">
					{pastLaunches}
				</Grid>
			)}
		</Box>
	);
}

export default Past;
