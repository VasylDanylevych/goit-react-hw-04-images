import ImgApi from '../services/getImage';
import { LoadMoreButton } from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import { useState, useEffect } from 'react';

const imgApi = new ImgApi();

export default function App() {
	const [inputValue, setInputValue] = useState('');
	const [images, setImages] = useState([]);
	const [showBtn, setShowBtn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [totalPage, setTotalPage] = useState(null);

	useEffect(() => {
		if (inputValue) {
			setShowBtn(false);
			setIsLoading(true);
			imgApi
				.getImg(inputValue)
				.then(data => {
					if (data.hits.length === 0) throw new Error(Error);
					const galleryLength = data.hits.length < 12;
					const totalHits = data.totalHits;
					setShowBtn(galleryLength ? false : true);

					setImages(data.hits);
					setTotalPage(Math.ceil(totalHits / 12));
				})
				.catch(error => {
					console.log(error);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	}, [inputValue]);

	const onSubmit = inputValue => {
		imgApi.resetPage();

		setImages([]);
		setInputValue(inputValue);
	};

	const onClick = () => {
		imgApi.incrementPage();
		const page = imgApi.page === totalPage;
		setShowBtn(page ? false : true);
		imgApi.getImg(inputValue).then(data => {
			setImages(prevImages => [...prevImages, ...data.hits]);
		});
	};

	return (
		<>
			<Searchbar onSubmit={onSubmit} />
			<ImageGallery images={images} />
			{isLoading && <Loader></Loader>}
			{showBtn && <LoadMoreButton onClick={onClick} />}
		</>
	);
}
