import { color } from "../../../theme";
import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	padding-bottom: calc(900% / 16);
	z-index: 0;

	margin-bottom: 15px;

	/* border: 2px solid ${color.light};
	border-radius: 2px; */
`;

export const Overlay = styled.div`
	/* background-color: ${color.dark}bb; // 'bb' is not a mistake. This is setting the opacity. */
	background-image: linear-gradient(${color.dark}bb, ${color.dark}bb),
		url("${({ url }) => url}");
	background-position: center;
	background-size: cover;

	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1;

	display: flex;
	align-items: center;
	justify-content: center;

	transition: all 230ms;

	${({ show }) => !show && `opacity: 0; pointer-events: none;`}
`;

export const PlayButton = styled.div`
	background-image: url("${require("../../../assets/play.svg").default}");
	width: 80px;
	height: 80px;
	background-size: 80px 80px;
	border-radius: 80px;
	cursor: pointer;
	box-shadow: 0 0 25px ${color.dark}40;

	will-change: transform;
	transform: scale(1);
	transition: transform 230ms;

	&:hover {
		transform: scale(1.1);
	}
`;
