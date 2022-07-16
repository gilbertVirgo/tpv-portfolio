import styled from "styled-components";

export default styled.div`
	padding-bottom: calc(900% / 16);
	background-image: url("${({ url }) => url}");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;
