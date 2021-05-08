export const getPictures = async (page = 1, limit = 100) => {
	const fetchPictures = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
		.then((response) => response.json())
		.catch((err) => new Error(err))

	const cleanImages = []

	fetchPictures.forEach((pix, idx) => {
		cleanImages.push({ author: pix.author, order: idx + 1 < 10 ? `#0${idx + 1}` : `#${idx + 1}`, url: `https://picsum.photos/id/${pix.id}/400` })
	})

	return cleanImages
}
