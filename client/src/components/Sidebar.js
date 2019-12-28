import React from "react";
import {
	Box,
	Button,
	Layer,
	Text,
	Collapsible,
	ResponsiveContext
} from "grommet";
import { Add,  FormClose, Launch, Home, Organization } from "grommet-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Sidebar(props) {
	const auth = useSelector(state => state.auth);
	const size = React.useContext(ResponsiveContext);
	const SidebarComponent = size === "small" ? Layer : Collapsible;
	const sidebarProps =
		size === "small" ? { full: true } : { direction: "horizontal" };
	return (
		<SidebarComponent {...sidebarProps} open={props.open}>
			<Box
				direction="row"
				align="center"
				as="header"
				elevation="medium"
				justify="between"
			>
				{auth.isAuthenticated ? (
					<Text size="large">Hi {auth.user.name}!</Text>
				) : (
					<Text size="large">Not logged in.</Text>
				)}
				{size === "small" && (
					<Box align="end">
						<Button
							icon={<FormClose />}
							onClick={() => props.setSidebar()}
						/>
					</Box>
				)}
			</Box>
			<Box gap="medium">
				<Link to="/">
					<Button
						as="button"
						plain
						hoverIndicator
						icon={<Home />}
						label="Home"
						onClick={() => size === "small" && props.setSidebar()}
					/>
				</Link>
				<Link to="/launches/past">
					<Button
						plain
						hoverIndicator
						icon={<Launch />}
						label="Past Launches"
						onClick={() => size === "small" && props.setSidebar()}
					/>
				</Link>
				<Link to="/launches/upcoming">
					<Button
						plain
						hoverIndicator
						icon={<Launch />}
						label="Upcoming Launches"
						onClick={() => size === "small" && props.setSidebar()}
					/>
				</Link>
				<Link to="/agencies">
					<Button
						plain
						hoverIndicator
						icon={<Organization />}
						label="Agencies"
						onClick={() => size === "small" && props.setSidebar()}
					/>
				</Link>
				{auth.isAuthenticated && (
					<Link to="/my_collections">
						<Button
							plain
							hoverIndicator
							icon={<Add />}
							label="My Collections"
							onClick={() =>
								size === "small" && props.setSidebar()
							}
						/>
					</Link>
				)}
			</Box>
		</SidebarComponent>
	);
}

export default Sidebar;
