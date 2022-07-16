import { Description, Left, Right, Wrapper } from "./styles";
import { Heading, Paragraph } from "../..";

import Main from "./Main";
import React from "react";
import { getThumbnailFromYoutubeVideo } from "../scripts/getThumbnailFromYoutubeVideo";

const selectedChunk = (d, i) => {
	const l = d.length;

	return [i, (i + 1) % l, (i + 2) % l].map((index) => d[index]);
};

export default ({ documents, isVideo }) => {
	if (documents.length < 3)
		throw new Error("This component requires three or more documents.");

	const [index, setIndex] = React.useState(0);
	const [left, main, right] = selectedChunk(documents, index);

	const handleIncrement = () => setIndex((index + 1) % documents.length);
	const handleDecrement = () =>
		setIndex(index - 1 === -1 ? documents.length - 1 : index - 1);

	const url = (d) =>
		isVideo ? getThumbnailFromYoutubeVideo(d.video.url) : d.image.url;

	return (
		<Wrapper>
			<Left url={url(left)} onClick={handleDecrement} />
			<Main isVideo={isVideo} document={main} />
			<Right url={url(right)} onClick={handleIncrement} />
			<Description>
				<Heading>{main.title}</Heading>
				<Paragraph>{main.description}</Paragraph>
			</Description>
		</Wrapper>
	);
};
