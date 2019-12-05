import React from "react";
import { FormClose } from "grommet-icons";
import SignUp from "../signUpLogIn/SignUp";
import SignIn from "../signUpLogIn/SignIn";
import { Box, Button, Heading, Layer, Grommet, Tab, Tabs } from "grommet";

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
              SignUp / LogIn!
              <Button
                icon={<FormClose size="medium"/>}
                onClick={() => props.invisible()}
                margin="small"
                color="status-critical"
                alignSelf="end"
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
