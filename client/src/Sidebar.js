import React from "react";
import { Box, Button, Layer, Anchor, Text } from "grommet";
import { Add, FormClose, Launch, Home } from "grommet-icons";

function Sidebar(props) {
  return (
    <>
      {props.open && (
        <Layer
          full="vertical"
          position="left"
          onClickOutside={() => props.invisible()}
          onEsc={() => props.invisible()}
        >
          <Box>
            <Box
              direction="row"
              align="center"
              as="header"
              elevation="small"
              justify="between"
            >
              <Text margin={{ left: "small" }}>Hi user!</Text>
              <Button icon={<FormClose />} onClick={() => props.invisible()} />
            </Box>
            <Box>
              <Anchor href="#" icon={<Home />} primary label="Home" />
              <Anchor
                href="/Spacetech"
                icon={<Launch />}
                primary
                label="Spacetech"
              />
              <Anchor href="#" icon={<Add />} primary label="More1" />
              <Anchor href="#" icon={<Add />} primary label="More2" />
            </Box>
          </Box>
        </Layer>
      )}
    </>
  );
}

export default Sidebar;
