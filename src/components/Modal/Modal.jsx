import { useEffect } from 'react';
import { ModalDiv, Overlay } from './Modal.style';
import PropTypes from 'prop-types';

export default function Modal({ closeModal, largeImageURL }) {
	useEffect(() => {
		const handlePressESC = e => {
			if (e.code === 'Escape') {
				closeModal();
			}
		};

		window.addEventListener('keydown', handlePressESC);
		return () => {
			window.removeEventListener('keydown', handlePressESC);
		};
	}, [closeModal]);

	const handleOverlayClick = e => {
		if (e.target === e.currentTarget) {
			closeModal();
		}
	};

	return (
		<Overlay onClick={handleOverlayClick}>
			<ModalDiv>
				<img src={largeImageURL} alt='' />
			</ModalDiv>
		</Overlay>
	);
}

Modal.propTypes = {
	largeImageURL: PropTypes.string.isRequired,
	closeModal: PropTypes.func.isRequired,
};
