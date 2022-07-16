import { Overlay, PlayButton, Wrapper } from "./styles";

import Frame from "./Frame";
import React from "react";
import getEmbedURLFromYoutubeVideo from "../scripts/getEmbedURLFromYoutubeVideo";
import { getThumbnailFromYoutubeVideo } from "../scripts/getThumbnailFromYoutubeVideo";

export default ({ url }) => {
	const [showOverlay, setShowOverlay] = React.useState(true);

	console.log({ url });

	React.useEffect(() => setShowOverlay(true), [url]);

	return (
		<Wrapper>
			<Overlay url={getThumbnailFromYoutubeVideo(url)} show={showOverlay}>
				<PlayButton onClick={() => setShowOverlay(false)} />
			</Overlay>

			{!showOverlay && (
				<Frame
					url={
						getEmbedURLFromYoutubeVideo(url) + "?autoplay=1&mute=1"
					}
				/>
			)}
		</Wrapper>
	);
};
