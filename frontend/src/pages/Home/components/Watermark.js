import { color } from "../../../theme";
import styled from "styled-components";

export default styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	z-index: 1;
	pointer-events: none;

	background-color: ${color.light};
	mask-image: url("${require("../../../assets/logo.svg").default}");
	mask-repeat: no-repeat;
	mask-position: center center;
	mask-size: 130px 160px;
`;
