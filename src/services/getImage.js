import axios from 'axios';
const URL = 'https://pixabay.com/api/';
const API_KEY = '33456182-4b4e94c7d011671bbd7c07f09';

export default class ImgApi {
	constructor() {
		this.page = 1;
	}

	async getImg(searchQuery) {
		try {
			const response = await axios.get(
				`${URL}?q=${searchQuery}&page=${this.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
			);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}

	incrementPage() {
		this.page += 1;
	}

	resetPage() {
		this.page = 1;
	}
}
