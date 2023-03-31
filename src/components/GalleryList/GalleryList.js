import PropTypes from 'prop-types';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryListStyle } from './GalleryList.styled';

export const GalleryList = ({ image }) => {
  return (
    <GalleryListStyle>
      {image.map(img => {
        return (
          <li key={img.id}>
            <ImageGalleryItem
              imgSmall={img.webformatURL}
              imgLarge={img.largeImageURL}
              tags={img.tags}
            />
          </li>
        );
      })}
    </GalleryListStyle>
  );
};
GalleryList.propTypes = {
  image: PropTypes.array.isRequired,
};
