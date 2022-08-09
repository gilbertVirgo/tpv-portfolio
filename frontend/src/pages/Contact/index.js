import Form, { Field, Group, Label } from "./components/Form";
import { Heading, Paragraph } from "../../components";

import Button from "../../components/Button";
import React from "react";
import { Title } from "../../components";

const emailAddress = "theodorevirgo@gmail.com";

export default () => {
	const handleSubmit = (event) => {
		event.preventDefault();

		const { target } = event;

		if (target.checkValidity()) {
			window.location.href = `mailto:${emailAddress}?subject=${
				target.subject.value
			}&body=${encodeURI(`${target.body.value}
	
From ${target.name.value}`)}`;
		}
	};

	return (
		<React.Fragment>
			<Title>Contact</Title>
			<Form onSubmit={handleSubmit}>
				<Group>
					<Heading>Contact Theo</Heading>
					<Paragraph>Your video begins here.</Paragraph>
				</Group>
				<Group>
					<Label for="name">Your Name</Label>
					<Field
						required
						name="name"
						type="text"
						placeholder="e.g. John Doe"
					/>
				</Group>
				<Group>
					<Label for="subject">Subject</Label>
					<Field required name="subject" type="text" />
				</Group>
				<Group>
					<Label for="body">Message</Label>
					<Field
						required
						as="textarea"
						name="body"
						style={{
							height: "auto",
							resize: "vertical",
							minHeight: "120px",
							maxHeight: "300px",
							paddingTop: "7px",
						}}
					/>
				</Group>
				<Group>
					<Button icon="external" type="submit">
						Continue in your email client
					</Button>
				</Group>

				<Group>
					<Paragraph small>
						Or if you would prefer to email me without using this
						form, reach me at{" "}
						<a target="_blank" href={`mailto:${emailAddress}`}>
							{emailAddress}
						</a>
						.
					</Paragraph>
				</Group>
			</Form>
		</React.Fragment>
	);
};
