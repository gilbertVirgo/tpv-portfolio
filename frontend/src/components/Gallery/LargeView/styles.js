import { color, font } from "../../../theme";

import media from "../../../media";
import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	grid-template-areas:
		"left main right"
		". description .";
	grid-template-columns: 1fr 8fr 1fr;
	column-gap: 15px;

	${media.maxWidth("m")`
        display: none;
    `}

	${media.minWidth("l")`
	grid-template-columns: 1fr 6fr 1fr;
	`}

	${media.minWidth("xl")`
	grid-template-columns: 1fr 4fr 1fr;
	`}
`;

export const Aside = styled.div`
	transition: 230ms all;
	opacity: 0.4;
	transform: scale(0.9);
	cursor: pointer;
	background-image: url("${({ url }) => url}");
	background-size: cover;

	&:hover {
		opacity: 0.5;
		transform: scale(0.92);
	}
`;

export const Left = styled(Aside)`
	grid-area: left;
	transform-origin: left center;
	background-position: right center;
`;

export const Right = styled(Aside)`
	grid-area: right;
	transform-origin: right center;
	background-position: left center;
`;

export const Description = styled.div`
	grid-area: description;
	padding: 15px;
	box-sizing: border-box;
`;
