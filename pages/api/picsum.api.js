export const getPictures = async (page = 1, limit = 100) => {
	const fetchPictures = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
		.then((response) => response.json())
		.catch((err) => new Error(err))

	const cleanImages = []

	fetchPictures.forEach((pix, idx) => {
		if (page === 1) {
			cleanImages.push({ author: pix.author, order: idx + 1 < 10 ? `#0${idx + 1}` : `#${idx + 1}`, url: `https://picsum.photos/id/${pix.id}/400` })
		} else {
			let order = ''
			if ((idx + 1) % 100 == 0) {
				order = `#${page}00`
			} else {
				if (idx + 1 < 10) {
					order = `#${page - 1}0${idx + 1}`
				} else {
					order = `#${page - 1}${idx + 1}`
				}
			}
			let auxImage = {
				author: pix.author,
				order: order,
				url: `https://picsum.photos/id/${pix.id}/400`,
			}
			cleanImages.push(auxImage)
		}
	})

	return cleanImages
}
