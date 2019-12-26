import React, { useState } from "react";
import { Box, Grommet, ResponsiveContext, Grid } from "grommet";
import AppBar from "./components/AppBar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home/Home";
import Upcoming from "./pages/Launches/Upcoming";
import Past from "./pages/Launches/Past";
import theme from "./Theme";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = localStorage.jwtToken;
	setAuthToken(token);
	// Decode token and get user info and exp
	const decoded = jwt_decode(token);
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
	// Check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser());
	}
}

function App() {
	const [openSidebar, setOpenSidebar] = useState(undefined);

	const showSidebar = () => {
		return () => {
			setOpenSidebar(!openSidebar);
		};
	};

	return (
		<Provider store={store}>
			<Router>
				<Grommet theme={theme} full>
					<Grid
						fill
						rows={["auto", "flex"]}
						columns={["auto", "flex"]}
						areas={[
							{ name: "appbar", start: [0, 0], end: [1, 0] },
							{ name: "sidebar", start: [0, 1], end: [0, 1] },
							{ name: "main", start: [1, 1], end: [1, 1] }
						]}
					>
						<AppBar setSidebar={showSidebar()} gridArea="appbar" />
						<Box
							gridArea="sidebar"
							overflow="auto"
							flex
							background={{ color: "light-2" }}
						>
							{openSidebar && (
								<Sidebar
									setSidebar={showSidebar()}
									open={openSidebar}
								></Sidebar>
							)}
						</Box>
						<Box gridArea="main" overflow="auto">
							<Switch>
								<Route path="/" exact component={Home}></Route>
								<Route
									path="/launches/past"
									component={Past}
								></Route>
								<Route
									path="/launches/upcoming"
									component={Upcoming}
								></Route>
							</Switch>
						</Box>
					</Grid>
				</Grommet>
			</Router>
		</Provider>
	);
}

export default App;
