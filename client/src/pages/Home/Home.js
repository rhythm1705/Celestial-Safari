import React from "react";
import { Box } from "grommet";
import News from "./News";

function Home() {
	return (
		<Box flex={false} pad="medium">
			<News></News>
		</Box>
	);
}

export default Home;
