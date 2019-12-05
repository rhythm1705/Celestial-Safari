import React, { useState, useEffect } from "react";
import { Box, Button, DataTable } from "grommet";
import { Add, StatusGood } from "grommet-icons";
import Spinner from "../../reusables/Spinner";
import { useSelector } from "react-redux";
import { external as axios } from "../../utils/externalAxios";

function Upcoming() {
	const [UpcomingLaunches, setUpcomingLaunches] = useState([]);
	const [Marked, setMarked] = useState(null);

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
							console.log("Launch", res);
							let UpcomingLaunchData = [];
							let map = new Map();
							res.data.launches.forEach(launch => {
								UpcomingLaunchData.push({
									name: launch.name,
									date: launch.net,
									location: launch.location.name,
									id: launch.id
								});
								map.set(launch.id, false);
							});
							setUpcomingLaunches(UpcomingLaunchData);
							setMarked(map);
						});
				});
		};
		if (UpcomingLaunches.length === 0) {
			fetchUpcoming();
		}
	}, [UpcomingLaunches, Marked]);

	const handleClickMarked = (e, id) => {
		let temp = new Map(Marked);
		setMarked(temp.set(id, !temp.get(id)));
		console.log("Clicked", id, Marked, e);
	};

	const auth = useSelector(state => state.auth);
	console.log("Rendered");

	const columns = [
		{
			header: "Name",
			property: "name",
			search: true,
			sortable: true
		},
		{
			header: "Date",
			property: "date",
			sortable: true
		},
		{
			header: "Location",
			property: "location",
			sortable: true
		},
		{
			property: "add",
			header: "",
			render: datum => (
				<Box pad={{ vertical: "xsmall" }}>
					{auth.isAuthenticated ? (
						<>
							{Marked === null ? (
								<Box></Box>
							) : (
								<Box
									round="full"
									overflow="hidden"
									background="neutral-1"
								>
									{Marked.get(datum.id) ? (
										<Button
											icon={<StatusGood />}
											hoverIndicator
											onClick={e =>
												handleClickMarked(e, datum.id)
											}
										/>
									) : (
										<Button
											icon={<Add />}
											hoverIndicator
											onClick={e =>
												handleClickMarked(e, datum.id)
											}
										/>
									)}
								</Box>
							)}
						</>
					) : (
						<Box></Box>
					)}
				</Box>
			)
		}
	];

	return (
		<Box overflow="scroll">
			{UpcomingLaunches.length === 0 ? (
				<Spinner></Spinner>
			) : (
				<DataTable
					// resizeable={true}
					sortable={true}
					columns={columns}
					data={UpcomingLaunches}
					primaryKey="id"
				/>
			)}
		</Box>
	);
}

export default Upcoming;
