import { color, font } from "../theme";

import media from "../media";
import styled from "styled-components";

export const Title = styled.h1`
	font-family: ${font.serif};
	font-size: 46px;
	font-weight: normal;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 0.14em;
	color: ${color.light};
	line-height: 100%;

	${media.minWidth("l")`
        font-size: 60px;
        margin: 50px 0;
    `}
`;

export const Paragraph = styled.p`
	font-family: ${font.sansSerif};
	font-size: 16px;
	letter-spacing: 0.05em;
	line-height: 130%;
	font-weight: 400;
	color: ${color.light};
	margin: 0;

	a {
		color: inherit;
	}

	${({ small }) => small && `font-size: 12px;`}
`;

export const Heading = styled.h2`
	font-family: ${font.sansSerif};
	font-size: 24px;
	font-weight: bold;
	letter-spacing: 0.05em;
	color: ${color.light};
	margin: 0 0 15px;
`;
