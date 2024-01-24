import Image from "./Image";
import React from "react";
import Video from "./../../Video";
import { color } from "../../../../theme";
import styled from "styled-components";

const Wrapper = styled.div`
	grid-area: main;
	position: relative;
`;

export default ({ document, isVideo }) => {
	return (
		<Wrapper>
			{isVideo ? (
				<Video {...document} />
			) : (
				<Image url={document.image.url} />
			)}
		</Wrapper>
	);
};
