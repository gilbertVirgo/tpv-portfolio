import LargeView from "./LargeView";
import React from "react";
import SmallView from "./SmallView";
import { Wrapper } from "./styles";

export default (props) => {
	return (
		<Wrapper>
			<LargeView {...props} />
			<SmallView {...props} />
		</Wrapper>
	);
};
