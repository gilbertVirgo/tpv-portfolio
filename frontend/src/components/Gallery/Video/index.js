import { Overlay, PlayButton, Wrapper } from "./styles";

import Frame from "./Frame";
import React from "react";
import getEmbedURLFromYoutubeVideo from "../scripts/getEmbedURLFromYoutubeVideo";

export default ({ video, image }) => {
	const [showOverlay, setShowOverlay] = React.useState(true);

	React.useEffect(() => setShowOverlay(true), [video.url]);

	return (
		<Wrapper>
			<Overlay url={image.url} show={showOverlay}>
				<PlayButton onClick={() => setShowOverlay(false)} />
			</Overlay>

			{!showOverlay && (
				<Frame
					url={
						getEmbedURLFromYoutubeVideo(video.url) +
						"?autoplay=1&mute=1"
					}
				/>
			)}
		</Wrapper>
	);
};
