import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Heading } from "grommet";
import { FormUpload, Menu } from "grommet-icons";
import { Brightness5, Brightness2 } from "@material-ui/icons";
import SignUpAndLogIn from "./signUpLogIn/SignUpAndLogIn";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/authActions";
import Toggle from "react-toggle";
import "react-toggle/style.css";

const buttonStyle = {
	display: "inline - block",
	width: "none"
};

function AppBar(props) {
	const [openSignUp, setOpenSignUp] = useState(undefined);

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
		<Box
			as="header"
			direction="row"
			align="center"
			justify="between"
			background="brand"
			pad="small"
			// elevation="medium"
			style={{ zIndex: "1" }}
			margin="none"
			flex={false}
			{...props}
		>
			<Grid
				fill
				rows={["auto", "flex"]}
				columns={["1/2", "1/2"]}
				areas={[
					{ name: "header", start: [0, 1], end: [0, 1] },
					{ name: "user", start: [1, 1], end: [1, 1] }
				]}
			>
				<Box gridArea="header" direction="row">
					<Button
						icon={<Menu />}
						onClick={() => props.setSidebar()}
					/>
					<Heading
						level="3"
						margin="none"
						color="text-strong"
						alignSelf="center"
					>
						Celestial Safari
					</Heading>
				</Box>

				<Box
					gridArea="user"
					direction="row"
					align="center"
					justify="between"
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
								style={buttonStyle}
							/>
						</>
					) : (
						<Button
							icon={<FormUpload />}
							label="SignUp / LogIn"
							onClick={() => {
								setOpenSignUp(true);
							}}
							primary
							alignSelf="center"
							style={buttonStyle}
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

				<SignUpAndLogIn
					invisible={invisible()}
					open={openSignUp}
				></SignUpAndLogIn>
			</Grid>
		</Box>
	);
}

export default AppBar;
