import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Heading, ResponsiveContext } from "grommet";
import { FormUpload } from "grommet-icons";
import { Brightness5, Brightness2 } from "@material-ui/icons";
import Burger from "@animated-burgers/burger-slip";
import "@animated-burgers/burger-slip/dist/styles.css";
import SignUpAndLogIn from "./signUpLogIn/SignUpAndLogIn";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/authActions";
import Toggle from "react-toggle";
import "react-toggle/style.css";

function AppBar(props) {
	const [openSignUp, setOpenSignUp] = useState(undefined);
	const size = React.useContext(ResponsiveContext);

	// SignUp / SignIn layer visibility
	const invisible = () => {
		return () => {
			setOpenSignUp(undefined);
		};
	};

	const dispatch = useDispatch();
	const auth = useSelector(state => state.auth);
	console.log("Auth", auth.isAuthenticated, auth.user);

	useEffect(() => {
		if (auth.isAuthenticated) {
			setOpenSignUp(undefined);
		}
	}, [auth.isAuthenticated]);

	return (
		<>
			<Box
				as="header"
				direction="row"
				align="center"
				justify="between"
				pad="small"
				style={{ zIndex: "9" }}
				margin="none"
				flex={false}
				{...props}
				elevation="medium"
			>
				<Grid
					fill
					rows={["auto", "flex"]}
					columns={["flex", "auto"]}
					areas={[
						{
							name: "header",
							start: [0, 1],
							end: [0, 1]
						},
						{
							name: "user",
							start: [1, 1],
							end: [1, 1]
						}
					]}
				>
					<Box
						gridArea="header"
						direction="row"
						gap="small"
						align="center"
					>
						{size !== "small" && (
							<Burger
								isOpen={props.sidebar}
								onClick={() => props.setSidebar()}
							/>
						)}

						<Heading
							level="3"
							margin="none"
							color="text-strong"
							alignSelf="center"
						>
							CELESTIAL SAFARI
						</Heading>
					</Box>

					<Box
						gridArea="user"
						direction="row"
						align="center"
						gap="small"
						justify="end"
					>
						{auth.isAuthenticated ? (
							<>
								<Button
									label="Sign out"
									onClick={() => {
										dispatch(logoutUser());
									}}
									primary
									alignSelf="center"
									color="brand"
								/>
							</>
						) : (
							<Button
								icon={<FormUpload />}
								label="Sign In/Up"
								onClick={() => {
									setOpenSignUp(true);
								}}
								color="brand"
								primary
							/>
						)}
						<Toggle
							icons={{
								unchecked: (
									<Brightness5
										style={{
											color: "orange",
											position: "absolute",
											top: "-5px",
											left: "-4px",
											width: "20px",
											height: "20px"
										}}
										fontSize="small"
									/>
								),
								checked: (
									<Brightness2
										style={{
											color: "#FFE082",
											position: "absolute",
											top: "-5px",
											left: "-4px",
											width: "20px",
											height: "20px"
										}}
										fontSize="small"
									/>
								)
							}}
							checked={props.curTheme === "dark" ? true : false}
							onChange={props.setTheme}
							className="dark-mode-toggle"
						/>
					</Box>
				</Grid>
			</Box>
			<SignUpAndLogIn invisible={invisible()} open={openSignUp} />
		</>
	);
}

export default AppBar;
