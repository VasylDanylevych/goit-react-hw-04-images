import { Button } from './Button.style';
import PropTypes from 'prop-types';

export const LoadMoreButton = ({ onClick }) => {
	return (
		<Button type='button' onClick={onClick}>
			Load more
		</Button>
	);
};

LoadMoreButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};
