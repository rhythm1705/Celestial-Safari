import React from "react";
import { Box, Button, Layer, Text } from "grommet";
import { Add, Calendar, FormClose, Launch, Home } from "grommet-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Sidebar(props) {
	const auth = useSelector(state => state.auth);
	return (
		<>
			{props.open && (
				<Layer
					full="vertical"
					position="left"
					onClickOutside={() => props.invisible()}
					onEsc={() => props.invisible()}
				>
					<Box gap="large">
						<Box
							direction="row"
							align="center"
							as="header"
							elevation="medium"
							justify="between"
							gap="large"
							size="large"
						>
							{auth.isAuthenticated ? (
								<Text size="large">Hi {auth.user.name}!</Text>
							) : (
								<Text size="large">Not logged in.</Text>
							)}
							<Button
								icon={<FormClose />}
								onClick={() => props.invisible()}
							/>
						</Box>
						<Box gap="medium">
							<Link to="/">
								<Button
									as="button"
									plain
									hoverIndicator
									icon={<Home />}
									label="Home"
								/>
							</Link>
							<Link to="/launches/past">
								<Button
									plain
									hoverIndicator
									icon={<Launch />}
									label="Past Launches"
								/>
							</Link>
							<Link to="/launches/upcoming">
								<Button
									plain
									hoverIndicator
									icon={<Launch />}
									label="Upcoming Launches"
								/>
							</Link>
							<Link to="/calendar">
								<Button
									plain
									hoverIndicator
									icon={<Calendar />}
									label="Calendar"
								/>
							</Link>
							<Link to="/my_collection">
								<Button
									plain
									hoverIndicator
									icon={<Add />}
									label="My Collection"
								/>
							</Link>
						</Box>
					</Box>
				</Layer>
			)}
		</>
	);
}

export default Sidebar;
