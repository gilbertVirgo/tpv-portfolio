import { color } from "../../theme";
import { height } from "./data/props";
import styled from "styled-components";

export const Wrapper = styled.div`
	height: ${height}px;
	padding: 15px;
	box-sizing: border-box;

	position: relative;
	z-index: 2;

	display: flex;
	justify-content: space-between;
`;

const overlayHeight = 120;
export const Overlay = styled.div`
	mask-image: url("${require("../../assets/nav-overlay.svg").default}");
	mask-size: cover;
	mask-position: bottom;
	mask-repeat: no-repeat;
	background-color: ${color.light};

	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: ${overlayHeight * 1.2}%;

	transform: translateY(${({ showMenu }) => (!showMenu ? -100 : 0)}%);

	transition-property: all;
	transition-duration: 460ms;
	transition-timing-function: ease-out;
	transition-delay: 230ms;
`;
