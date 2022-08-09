import styled from "styled-components";

const IFrame = styled.iframe.attrs({
	frameborder: "0",
	allow: "autoplay,fullscreen",
	allowfullscreen: true,
})`
	border: none;

	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
`;

export default ({ url }) => <IFrame src={url} />;
