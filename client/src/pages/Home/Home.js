import React from "react";
import { Box } from "grommet";
import News from "./News";

function Home() {
	return (
		<Box flex fill pad="medium" align="center" justify="center">
			<News></News>
		</Box>
	);
}

export default Home;
