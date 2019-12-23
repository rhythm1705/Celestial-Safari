import React from "react";
import { Box, Grommet, ResponsiveContext } from "grommet";
import AppBar from "./components/AppBar";
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
	return (
		<Provider store={store}>
			<Grommet theme={theme}>
				<ResponsiveContext.Consumer>
					{size => (
						<Box fill>
							<Router>
								<AppBar> </AppBar>
								<Box>
									<Switch>
										<Route
											path="/"
											exact
											component={Home}
										></Route>
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
							</Router>
						</Box>
					)}
				</ResponsiveContext.Consumer>
			</Grommet>
		</Provider>
	);
}

export default App;
