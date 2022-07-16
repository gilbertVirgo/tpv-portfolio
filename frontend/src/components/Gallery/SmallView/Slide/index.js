import { Image, Title, Wrapper } from "./styles";

import { Paragraph } from "../../..";
import React from "react";
import Video from "../../Video";

export default ({
	document: { video, image, title, description },
	isVideo,
}) => {
	return (
		<Wrapper className="slide">
			{isVideo ? <Video url={video.url} /> : <Image src={image.url} />}
			<Title>{title}</Title>
			<Paragraph>{description}</Paragraph>
		</Wrapper>
	);
};
