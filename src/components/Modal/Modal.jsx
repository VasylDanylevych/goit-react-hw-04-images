import { Component } from 'react';
import { ModalDiv, Overlay } from './Modal.style';
import PropTypes from 'prop-types';

class Modal extends Component {
	state = {};

	componentDidMount() {
		window.addEventListener('keydown', this.handlePressESC);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handlePressESC);
	}

	handlePressESC = e => {
		if (e.code === 'Escape') this.props.closeModal();
	};

	handleOverlayClick = e => {
		const { toggleModal } = this.props;

		if (e.currentTarget === e.target) {
			toggleModal();
		}
	};

	render() {
		const { largeImageURL } = this.props;

		return (
			<Overlay onClick={this.handleOverlayClick}>
				<ModalDiv>
					<img src={largeImageURL} alt='' />
				</ModalDiv>
			</Overlay>
		);
	}
}

export default Modal;

Modal.propTypes = {
	largeImageURL: PropTypes.string.isRequired,
	toggleModal: PropTypes.func.isRequired,
};
