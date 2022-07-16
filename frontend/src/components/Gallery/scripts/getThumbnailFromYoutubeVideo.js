export const getThumbnailFromYoutubeVideo = (youtubeEmbedURL) => {
	let id;

	if (youtubeEmbedURL.includes("embed")) {
		id = youtubeEmbedURL.split("/").slice(-1);
	}

	if (youtubeEmbedURL.includes("?v=")) {
		id = youtubeEmbedURL.split("?v=").slice(-1);
	}

	return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
};
