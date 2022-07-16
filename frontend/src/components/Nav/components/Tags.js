import { color, font } from "../../../theme";

import { Link } from "react-router-dom";
import styled from "styled-components";
import tags from "../data/tags";

const standardDuration = 75;

const Tag = styled(Link)`
	text-decoration: none;
	font-family: ${font.sansSerif};
	font-size: 20px;
	font-weight: 700;
	text-transform: uppercase;
	transform-origin: center top;
	color: ${color.dark};
	position: relative;
	display: block;

	transition-property: all;
	transition-duration: ${standardDuration}ms;
	transition-timing-function: linear;

	&.active {
		transform: rotateX(0deg);
		transition-delay: ${({ index }) => 300 + index * standardDuration}ms;
	}

	&:not(.active) {
		transition-delay: 0;
		transform: rotateX(90deg);
		transition-delay: ${({ index, length }) =>
			(length - index) * standardDuration}ms;
	}
`;

const Wrapper = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 0;
	position: absolute;
	left: 15px;
	top: 115px;
	z-index: 150;

	li {
		margin-bottom: 10px;
	}
`;

export default ({ showMenu }) => (
	<Wrapper>
		{tags.map(({ title, href }, index) => (
			<li key={`nav-tag-${index}`}>
				<Tag
					to={href}
					index={index}
					length={tags.length}
					className={showMenu ? "active" : ""}
				>
					{title}
				</Tag>
			</li>
		))}
	</Wrapper>
);
