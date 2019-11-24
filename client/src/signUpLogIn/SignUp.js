import React, { useState, useEffect } from "react";
import { Box, Button, Form, FormField, Collapsible, Text } from "grommet";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../actions/authActions";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState();
  // const [error, setError] = useState();
  const [open, setOpen] = useState(undefined);

  const dispatch = useDispatch();

  const error = useSelector(state => state.errors);
  console.log(error);
  useEffect(() => {
    if (JSON.stringify(error) !== "{}") {
      setMsg(JSON.stringify(error));
    } else {
      setMsg("Sign up successful.");
    }
  })

  const handleSubmit = event => {
    console.log("VALUE", event.value);
    event.preventDefault();
    setLoading(true);
    dispatch(registerUser(event.value));
    setLoading(false);
    setOpen(true);
  };
  return (
    <>
      <Form onReset={event => console.log(event)} onSubmit={handleSubmit}>
        <FormField label="Name" name="name" required />
        <FormField label="Email" name="email" type="email" required />
        <FormField label="Password" name="password" required />
        <FormField label="Re-enter Password" name="password2" required />
        <Box direction="row" justify="between" margin={{ top: "medium" }}>
          {loading ? (
            <Button margin="xsmall" label="Signing Up.." disabled />
          ) : (
            <Button margin="xsmall" type="submit" label="Sign Up" primary />
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
    </>
  );
}
export default SignUp;
