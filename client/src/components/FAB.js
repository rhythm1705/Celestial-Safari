import React from "react";
import { Box, Layer, ResponsiveContext } from "grommet";
import Burger from "@animated-burgers/burger-slip";
import "@animated-burgers/burger-slip/dist/styles.css";

function FAB(props) {
	const size = React.useContext(ResponsiveContext);

	return (
		<>
			{size === "small" && (
				<Layer
					modal={false}
					plain
					position="bottom-right"
					responsive={false}
					margin={{
						bottom: "7%",
						right: "7%"
					}}
				>
					<Box
						round="full"
						background="brand"
						pad="medium"
						elevation="medium"
					>
						<Burger
							className="FAB"
							isOpen={props.sidebar}
							onClick={() => props.setSidebar()}
						/>
					</Box>
				</Layer>
			)}
		</>
	);
}

export default FAB;
