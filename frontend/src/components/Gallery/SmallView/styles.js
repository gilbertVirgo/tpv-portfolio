import media from "../../../media";
import styled from "styled-components";

export const Wrapper = styled.div`
	margin: 0 15px 15px;

	${media.minWidth("m")`
        display: none;
    `}
`;
