import Gallery from "../../components/Gallery";
import React from "react";
import { Title } from "../../components";
import getVideos from "./getVideos";

export default () => {
	const [videos, setVideos] = React.useState();

	React.useEffect(() => {
		(async function () {
			let videos = await getVideos();
			console.log({ videos });

			setVideos(videos);
		})();
	}, []);

	return (
		<React.Fragment>
			<Title>Videos</Title>
			{videos ? <Gallery documents={videos} isVideo /> : "Loading"}
		</React.Fragment>
	);
};
