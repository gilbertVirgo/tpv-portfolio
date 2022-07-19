export default async (query) => {
	console.log(encodeURIComponent(query.toString()));

	const ref = localStorage.getItem("prismic-ref");

	const json = (
		await (
			await fetch(
				`https://tpvportfolio.prismic.io/api/v2/documents/search?ref=${ref}&q=${encodeURIComponent(
					`[${query}]`
				)}`
			)
		).json()
	).results.map(({ id, data }) => ({ id, ...data }));

	return json;
};
