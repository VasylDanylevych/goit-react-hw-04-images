import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import { ListItem } from './ImageGalleryItem.style';

export default function ImageGalleryItem({ id, largeImageURL, webformatURL }) {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(prev => !prev);
	};

	return (
		<>
			{showModal && (
				<Modal closeModal={toggleModal} largeImageURL={largeImageURL} />
			)}
			<ListItem key={id}>
				<img src={webformatURL} alt='' onClick={toggleModal} />
			</ListItem>
		</>
	);
}

ImageGalleryItem.propTypes = {
	id: PropTypes.number,
	webformatURL: PropTypes.string.isRequired,
	largeImageURL: PropTypes.string.isRequired,
};
