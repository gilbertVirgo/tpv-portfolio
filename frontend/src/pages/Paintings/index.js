import Gallery from "../../components/Gallery";
import React from "react";
import { Title } from "../../components";
import getPaintings from "./getPaintings";

export default () => {
	const [paintings, setPaintings] = React.useState();

	React.useEffect(() => {
		(async function () {
			let paintings = await getPaintings();
			console.log({ paintings });

			setPaintings(paintings);
		})();
	}, []);

	return (
		<React.Fragment>
			<Title>Paintings</Title>
			{paintings ? <Gallery documents={paintings} /> : "Loading"}
		</React.Fragment>
	);
};
