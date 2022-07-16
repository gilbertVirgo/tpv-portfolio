import { color } from "../../theme";
import styled from "styled-components";

export const Outer = styled.footer`
	margin-top: 100px;
	height: 300px;
	/* border-top: 2px solid ${color.light}; */
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${color.dark};
`;

export const Inner = styled.div`
	a {
		color: ${color.light};
		font-size: 24px;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const InstagramIcon = styled.div`
	background-color: ${color.light};
	mask-image: url("${require("../../assets/instagram.svg").default}");
	mask-size: contain;
	mask-repeat: no-repeat;
	mask-position: center;
	width: 24px;
	height: 24px;

	display: inline-block;
	margin-right: 15px;
	position: relative;
	top: -2px;
	vertical-align: middle;
`;
