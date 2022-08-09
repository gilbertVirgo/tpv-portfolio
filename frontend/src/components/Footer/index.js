import { Inner, InstagramIcon, Outer } from "./styles";

import { Paragraph } from "..";

export default () => {
	return (
		<Outer>
			<Inner>
				<InstagramIcon />
				<Paragraph as="a" href="https://instagram.com/theovirgo_">
					@theovirgo_
				</Paragraph>
			</Inner>
		</Outer>
	);
};
