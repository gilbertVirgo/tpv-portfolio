import React from "react";
import Slide from "./Slide";
import { Wrapper } from "./styles";
import lax from "lax.js";

export default ({ documents, isVideo }) => {
	React.useEffect(() => {
		lax.init();

		lax.addDriver("scrollY", function () {
			return window.scrollY;
		});

		// Add your elements
		lax.addElements(
			".slide",
			{
				scrollY: {
					translateY: [
						// CSS property
						["elInY", "elCenterY-150"], // Driver value map
						[-150, 0], // Animation value map
					],
					scale: [
						["elInY", "elCenterY-150"], // Driver value map
						[0.85, 1], // Animation value map
					],
					opacity: [
						["elInY", "elCenterY"],
						[0, 1],
					],
				},
			},
			[]
		);
	}, []);

	return (
		<Wrapper>
			{documents.map((d) => (
				<Slide document={d} isVideo={isVideo} />
			))}
		</Wrapper>
	);
};

// lax lax_preset_fadeIn:276:0 lax_preset_slideY:433:-171
