import { Link } from "react-router-dom";
import { color } from "../../../theme";
import styled from "styled-components";

const Icon = styled.div`
	position: relative;
	width: 27px;
	height: 33px;
	mask-image: url("${require("../../../assets/logo.svg").default}");
	left: 8px;
	top: 3px;

	transition-property: all;
	transition-duration: 230ms;
	transition-delay: 230ms;
`;

const Wrapper = styled(Link).attrs({ to: "/" })`
	text-decoration: none;
	width: 40px;
	height: 40px;
	display: block;
	border-radius: 40px;
	position: relative;
	background-color: ${({ showMenu }) =>
		showMenu ? `${color.dark}` : `${color.light}`};

	${Icon} {
		background-color: ${({ showMenu }) =>
			showMenu ? `${color.light}` : `${color.dark}`};
	}

	${({ show }) =>
		show
			? `transform: scale(1); opacity: 1;`
			: `transform: scale(0); opacity: 0;`}

	transition-property: all;
	transition-duration: 230ms;
	transition-delay: 230ms;
`;

export default (props) => (
	<Wrapper {...props}>
		<Icon />
	</Wrapper>
);
