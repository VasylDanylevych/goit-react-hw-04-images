import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { List } from './ImageGallery.style';

export const ImageGallery = ({ images }) => {
	return (
		<List>
			{images.map(image => (
				<ImageGalleryItem
					key={image.id}
					webformatURL={image.webformatURL}
					largeImageURL={image.largeImageURL}
				/>
			))}
		</List>
	);
};

ImageGallery.propTypes = {
	images: PropTypes.arrayOf(PropTypes.object),
};
