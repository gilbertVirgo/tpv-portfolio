export default (url) => {
	// Already an embed URL
	if (url.includes("embed")) return url;

	if (url.includes("?v="))
		return `https://youtube.com/embed/${url.split("?v=").slice(-1)}`;

	throw new Error(
		"URL does not appear to fit the standard of a YouTube URL."
	);
};
