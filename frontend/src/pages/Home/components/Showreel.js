import { height } from "../../../components/Nav/data/props";
import styled from "styled-components";

const Wrapper = styled.div`
	/* position: absolute;
	left: 0;
	top: 0; */
	position: relative;

	// Nav
	top: -${height}px;

	// Footer
	margin-bottom: -${100 + height}px;

	width: 100%;
	height: 100vh;
	z-index: -1;

	/* margin: 0 15px 15px; */
	/* padding-bottom: calc(900% / 16); */
`;

const Video = styled.video`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`;

export default () => (
	<Wrapper>
		<Video autoPlay loop muted>
			<source
				src={require("../../../assets/showreel.mp4")}
				type="video/mp4"
			/>
		</Video>
	</Wrapper>
);
