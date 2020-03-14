import React, { useState, useEffect } from "react";
import { Box, Button, Form, FormField, Collapsible, Text } from "grommet";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../actions/authActions";

function SignUp() {
	const [loading, setLoading] = useState(false);
	const [msg, setMsg] = useState();
	// const [error, setError] = useState();
	const [open, setOpen] = useState(undefined);

	const dispatch = useDispatch();

	const error = useSelector(state => state.errors);
	useEffect(() => {
		if (JSON.stringify(error) !== "{}") {
			setMsg(error);
		}
	}, [error]);

	const handleSubmit = event => {
		event.preventDefault();
		setLoading(true);
		dispatch(registerUser(event.value));
		setLoading(false);
		setOpen(true);
	};
	return (
		<Form onSubmit={handleSubmit}>
			<FormField label="Name" name="name" required />
			<FormField label="Email" name="email" type="email" required />
			<FormField
				label="Password"
				name="password"
				type="password"
				required
			/>
			<FormField
				label="Re-enter Password"
				name="password2"
				type="password"
				required
			/>
			<Button
				margin="xsmall"
				type="submit"
				label={!loading ? "Sign Up" : "Signing Up..."}
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
export default SignUp;
