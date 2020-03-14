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

	useEffect(() => {
		if (auth.isAuthenticated) {
			setMsg("Log in successful");
		} else if (error.error) {
			setMsg(error.error);
			setLoading(false);
			setOpen(true);
		}
	}, [auth.isAuthenticated, error]);

	const handleSubmit = event => {
		event.preventDefault();
		setLoading(true);
		dispatch(loginUser(event.value));
	};

	return (
		<Form onSubmit={handleSubmit}>
			<FormField label="Email" name="email" type="email" required />
			<FormField
				label="Password"
				name="password"
				required
				type="Password"
			/>
			<Button
				margin="xsmall"
				type="submit"
				label={!loading ? "Sign In" : "Signing in..."}
				primary
			/>
			<Collapsible open={open} direction="horizontal">
				<Box
					background="background-contrast"
					pad="small"
					align="center"
					justify="center"
					margin="small"
				>
					<Text color="text">{msg}</Text>
				</Box>
			</Collapsible>
		</Form>
	);
}

export default SignIn;
