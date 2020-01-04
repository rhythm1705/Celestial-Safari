import React, { useState } from "react";
import {
	Box,
	Button,
	Layer,
	Heading,
	Collapsible,
	ResponsiveContext
} from "grommet";
import { Launch, Home, Bookmark, StatusInfo } from "grommet-icons";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function SidebarNav(props) {
	const size = React.useContext(ResponsiveContext);
	return (
		<>
			{props.visible && (
				<Link to={props.to}>
					<Button
						plain
						active={props.active}
						onClick={() => {
							if (size === "small") {
								props.setSidebar();
							}
							props.setActive();
						}}
						fill
						hoverIndicator="active"
					>
						<Box
							pad={{
								horizontal: "xsmall",
								vertical: "xsmall"
							}}
							background={props.active ? "selected" : undefined}
							direction="row"
							align="center"
							gap="small"
						>
							{props.icon}
							<Heading
								level="4"
								color="text"
								margin={{
									vertical:
										size !== "small" ? "small" : "medium"
								}}
							>
								{props.label}
							</Heading>
						</Box>
					</Button>
				</Link>
			)}
		</>
	);
}

function Sidebar(props) {
	let location = useLocation();
	console.log("ROUTER location", location);
	const [active, setActive] = useState(location.pathname);
	const auth = useSelector(state => state.auth);
	const size = React.useContext(ResponsiveContext);
	const SidebarComponent = size === "small" ? Layer : Collapsible;
	const sidebarProps =
		size === "small"
			? { full: "vertical", position: "left", responsive: false }
			: { direction: "horizontal" };
	const sidebarNavData = [
		{ to: "/", icon: <Home />, label: "Home", visible: true },
		{
			to: "/pastLaunches",
			icon: <Launch />,
			label: "Past Launches",
			visible: true
		},
		{
			to: "/upcomingLaunches",
			icon: <Launch />,
			label: "Upcoming Launches",
			visible: true
		},
		{
			to: "/myCollections",
			icon: <Bookmark />,
			label: "My Collections",
			visible: auth.isAuthenticated
		},
		{
			to: "/about",
			icon: <StatusInfo />,
			label: "About",
			visible: true
		}
	];
	return (
		<SidebarComponent {...sidebarProps} open={props.open}>
			<Box
				direction="row"
				align="center"
				justify="between"
				fill="horizontal"
			>
				<Heading
					margin="small"
					level="3"
					color="text"
					textAlign="center"
				>
					{auth.isAuthenticated
						? "Hi" + auth.user.name + "!"
						: "Not logged in."}
				</Heading>
			</Box>
			<Box fill>
				{sidebarNavData.map(nav => {
					return (
						<SidebarNav
							key={nav.label}
							to={nav.to}
							icon={nav.icon}
							label={nav.label}
							visible={nav.visible}
							setSidebar={props.setSidebar}
							setActive={() => {
								setActive(nav.to);
							}}
							active={nav.to === active}
						/>
					);
				})}
			</Box>
		</SidebarComponent>
	);
}

export default Sidebar;
