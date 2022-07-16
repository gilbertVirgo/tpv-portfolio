import Video from "../../Video";
import { font } from "../../../../theme";
import styled from "styled-components";

// Maybe do some lax.js stuff
export const Wrapper = styled.div`
	margin-bottom: 45px;
	position: relative;
	perspective: 500px;
	transform: translateZ(0px);
`;

export const Image = styled.img`
	display: block;
	width: 100%;
	margin-bottom: 15px;
`;

export const Title = styled.h2`
	font-family: ${font.sansSerif};
	font-weight: 700;
	font-size: 24px;
	line-height: 100%;
	letter-spacing: 0.05em;
	margin: 0 0 7.5px;
`;
