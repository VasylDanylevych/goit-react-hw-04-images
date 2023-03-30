import ImgApi from '../services/getImage';
import { Component } from 'react';
import { LoadMoreButton } from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';

const imgApi = new ImgApi();

class App extends Component {
	state = {
		inputValue: '',
		images: [],
		showBtn: false,
		isLoading: false,
		totalPage: null,
	};

	componentDidUpdate(_, prevState) {
		if (prevState.inputValue !== this.state.inputValue) {
			this.setState({ showBtn: false, isLoading: true });
			imgApi
				.getImg(this.state.inputValue)
				.then(data => {
					if (data.hits.length === 0) throw new Error(Error);
					const galleryLength = data.hits.length < 12;
					const totalHits = data.totalHits;
					this.setState({ showBtn: galleryLength ? false : true });

					this.setState({
						images: data.hits,
						totalPage: Math.ceil(totalHits / 12),
					});
				})
				.catch(error => {
					console.log(error);
				})
				.finally(() => {
					this.setState({ isLoading: false });
				});
		}
	}

	onSubmit = inputValue => {
		imgApi.resetPage();

		this.setState({ images: [] });
		this.setState({ inputValue });
	};

	onClick = () => {
		imgApi.incrementPage();
		const page = imgApi.page === this.state.totalPage;
		this.setState({ showBtn: page ? false : true });
		imgApi.getImg(this.state.inputValue).then(data => {
			this.setState(prevState => ({
				images: [...prevState.images, ...data.hits],
			}));
		});
	};

	render() {
		const { isLoading, showBtn } = this.state;
		// console.log(this.state.images);

		return (
			<>
				<Searchbar onSubmit={this.onSubmit} />
				<ImageGallery images={this.state.images} />
				{isLoading && <Loader></Loader>}
				{showBtn && <LoadMoreButton onClick={this.onClick} />}
			</>
		);
	}
}

export default App;
