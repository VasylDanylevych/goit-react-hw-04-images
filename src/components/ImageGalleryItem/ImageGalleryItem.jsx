import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';
import { ListItem } from './ImageGalleryItem.style';

class ImageGalleryItem extends Component {
	state = {
		showModal: false,
	};

	toggleModal = () => {
		this.setState(prevState => ({
			showModal: !prevState.showModal,
		}));
	};

	onClick = () => {
		this.toggleModal();
	};

	render() {
		const { id, webformatURL, largeImageURL } = this.props;
		const { showModal } = this.state;
		return (
			<>
				{showModal && (
					<Modal toggleModal={this.toggleModal} largeImageURL={largeImageURL} />
				)}
				<ListItem key={id}>
					<img src={webformatURL} alt='' onClick={this.onClick} />
				</ListItem>
			</>
		);
	}
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
	id: PropTypes.number,
	webformatURL: PropTypes.string.isRequired,
	largeImageURL: PropTypes.string.isRequired,
};
