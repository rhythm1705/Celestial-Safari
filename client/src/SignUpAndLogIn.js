import React from "react";
import SignUp from "./signUpLogIn/SignUp";
import SignIn from "./signUpLogIn/SignIn";
import {
  Box,
  Button,
  Heading,
  Layer,
  Grommet,
  Tab,
  Tabs
} from "grommet";


function SignUpAndLogIn(props) {
  return (
    <Grommet>
      {props.open && (
        <Layer
          position="center"
          modal
          onClickOutside={() => props.invisible()}
          onEsc={() => props.invisible()}
        >
          <Box pad="medium" gap="small" width="medium">
            <Heading level={3} margin="none">
              SignUp / LogIn
              <Button
                label="Cancel"
                onClick={() => props.invisible()}
                margin="small"
              />
            </Heading>
            <Tabs>
              <Tab title="Sign In">
                <SignIn></SignIn>
              </Tab>
              <Tab title="Sign Up">
                <SignUp></SignUp>
              </Tab>
            </Tabs>
          </Box>
        </Layer>
      )}
    </Grommet>
  );
}

export default SignUpAndLogIn;
