import { color, font } from "../../../theme";

import { Paragraph } from "../../../components";
import styled from "styled-components";

export const Group = styled.section`
	margin-bottom: 30px;
`;

export const Label = styled(Paragraph)`
	color: ${color.light}40;
	text-transform: uppercase;
	display: block;
	margin-bottom: 6px;
`;

export const Field = styled.input`
	border: 2px solid ${color.light}40;
	border-radius: 2px;
	font-size: 16px;
	font-family: ${font.sansSerif};
	color: ${color.light};
	display: block;
	background-color: transparent;
	width: 100%;
	transition: border-color 230ms;
	height: 40px;
	box-sizing: border-box;
	padding-left: 10px;
	outline: none;

	&:focus {
		border-color: ${color.light};
	}
`;

export default styled.form`
	max-width: 365px;
	width: 100%;
	margin: 100px auto 0;
`;
