export const getPictures = async (limit = 100) => {
	const fetchPictures = await fetch(`https://picsum.photos/v2/list?limit=${limit}`)
		.then((response) => response.json())
		.catch((err) => new Error(err))
	return fetchPictures
}
