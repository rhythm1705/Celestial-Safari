import React from "react";
import { Accordion, AccordionPanel, Box, Text, Anchor } from "grommet";
import { User, Github, Twitter } from "grommet-icons";

function About() {
	return (
		<>
			<Box pad="medium" fill>
				<Accordion animate multiple>
					<AccordionPanel label="AUTHOR">
						<Box
							direction="row"
							align="center"
							gap="small"
							pad={{ horizontal: "small" }}
						>
							<User size="medium" color="control" />
							<Box>
								<Text size="large" weight="bold">
									Rhythm Goel
								</Text>
								<Text color="control" weight="bold">
									Developer and Designer
								</Text>
								<Anchor
									label="Portfolio"
									href="http://www.rhythm1705.dev"
									color="control"
								/>
							</Box>
						</Box>
					</AccordionPanel>
					<AccordionPanel label="SOCIAL">
						<Box gap="small" pad={{ horizontal: "small" }}>
							<Anchor
								icon={<Github color="dark grey" />}
								label="Github"
								color="dark grey"
								href="https://github.com/rhythm1705/Celestial-Safari"
							/>
							<Anchor
								color="blue"
								icon={<Twitter color="blue" />}
								label="Twitter"
								href="#"
							/>
						</Box>
					</AccordionPanel>
					<AccordionPanel label="CREDITS">
						<Box gap="small" pad={{ horizontal: "small" }}>
							<Text>
								Illustrations by{" "}
								<Anchor
									label="Sara Maese"
									href="http://www.saramaese.com/"
								/>{" "}
								available for free at{" "}
								<Anchor
									label="Ouch.pics"
									href="http://ouch.pics"
								/>
							</Text>
						</Box>
					</AccordionPanel>
				</Accordion>
			</Box>
			<Text
				alignSelf="center"
				color="text-xweak"
				weight="bold"
				margin="xsmall"
			>
				Made with lots of ❤
			</Text>
		</>
	);
}

export default About;
