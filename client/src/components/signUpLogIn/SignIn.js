import React, { useState, useEffect } from "react";
import { Box, Button, Form, FormField, Collapsible, Text } from "grommet";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../actions/authActions";

function SignIn() {
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(undefined);
	const [msg, setMsg] = useState();

	const dispatch = useDispatch();
	const error = useSelector(state => state.errors);
	const auth = useSelector(state => state.auth);
	console.log("Error", error);
	console.log("Auth", auth.isAuthenticated, auth.user);

	useEffect(() => {
		if (auth.isAuthenticated) {
			setMsg("Log in successful");
		} else if (error) {
			setMsg(JSON.stringify(error.error));
			setLoading(false);
		}
	}, [auth.isAuthenticated, error]);

	const handleSubmit = event => {
		console.log("VALUE", event.value);
		event.preventDefault();
		setLoading(true);
		dispatch(loginUser(event.value));
		setOpen(true);
	};

	return (
		<Form onReset={event => console.log(event)} onSubmit={handleSubmit}>
			<FormField label="Email" name="email" type="email" required />
			<FormField
				label="Password"
				name="password"
				required
				type="Password"
			/>
			<Box direction="row" justify="between" margin={{ top: "medium" }}>
				{loading ? (
					<Button margin="xsmall" label="Signing in.." disabled />
				) : (
					<Button
						margin="xsmall"
						type="submit"
						label="Sign In"
						primary
					/>
				)}
				<Collapsible open={open} direction="horizontal">
					<Box
						background="light-2"
						pad="small"
						align="center"
						justify="center"
					>
						<Text>{msg}</Text>
					</Box>
				</Collapsible>
			</Box>
		</Form>
	);
}

export default SignIn;
