import React from "react";
import { FormClose } from "grommet-icons";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { Box, Button, Heading, Layer, Tab, Tabs } from "grommet";

function SignUpAndLogIn(props) {
	return (
		<>
			{props.open && (
				<Layer
					position="center"
					onClickOutside={() => props.invisible()}
					onEsc={() => props.invisible()}
				>
					<Box
						pad="medium"
						gap="small"
						width={{ min: "medium" }}
						height={{ min: "large" }}
					>
						<Box direction="row" align="center" justify="between">
							<Heading level="3" margin="small" color="text">
								Welcome!
							</Heading>
							<Button
								icon={<FormClose size="medium" />}
								onClick={() => props.invisible()}
							/>
						</Box>
						<Box fill>
							<Tabs flex>
								<Tab title="Sign In">
									<Box fill>
										<SignIn></SignIn>
									</Box>
								</Tab>
								<Tab title="Sign Up">
									<Box fill>
										<SignUp></SignUp>
									</Box>
								</Tab>
							</Tabs>
						</Box>
					</Box>
				</Layer>
			)}
		</>
	);
}

export default SignUpAndLogIn;
