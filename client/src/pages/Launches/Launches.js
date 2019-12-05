import React from "react";
import { Box, Tabs, Tab } from "grommet";
import Upcoming from "./Upcoming";
import Past from "./Past";

function Launches() {
  
  return (
    <Box>
      <Tabs>
        <Tab title="Upcoming">
          <Upcoming></Upcoming>
        </Tab>
        <Tab title="Past">
            <Past></Past>
        </Tab>
      </Tabs>
    </Box>
  );
}

export default Launches;
