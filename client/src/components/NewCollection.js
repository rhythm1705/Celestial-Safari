import React from "react";
import { FormClose } from "grommet-icons";
import { Box, Button, Form, FormField, Heading, Layer } from "grommet";
import { useSelector } from "react-redux";
import axios from "axios";

function NewCollection(props) {
	const auth = useSelector(state => state.auth);
	const handleSubmit = async event => {
		let body = { owner: auth.user.id };
		Object.assign(body, event.value);
		event.preventDefault();
		let newCollectionInfo = {};
		await axios
			.post("/api/collections/", body)
			.then(res => {
				newCollectionInfo = res.data;
			})
			.catch(err => {
			});
		if (props.type === "launch") {
			await axios
				.patch("/api/collections/add/" + newCollectionInfo._id, {
					launch: props.itemId
				})
				.then(res => {
				})
				.catch(err => {
					console.log("err", err);
				});
		}
		props.invisible();
	};
	return (
		<>
			{props.open && (
				<Layer
					position="center"
					modal
					onClickOutside={() => props.invisible()}
					onEsc={() => props.invisible()}
				>
					<Box pad="medium" gap="small" width={{min: "medium"}}>
						<Box
							direction="row"
							align="center"
							justify="between"
							fill="horizontal"
						>
							<Heading level="3" margin="small">
								Create new collection
							</Heading>
							<Button
								icon={<FormClose size="medium" />}
								onClick={() => props.invisible()}
							/>
						</Box>
						<Form
							onReset={event => console.log(event)}
							onSubmit={handleSubmit}
						>
							<FormField
								label="Name of Collection"
								name="name"
								required
							/>
							<Button
								margin="xsmall"
								label="Create"
								type="submit"
								primary
							/>
						</Form>
					</Box>
				</Layer>
			)}
		</>
	);
}

export default NewCollection;
