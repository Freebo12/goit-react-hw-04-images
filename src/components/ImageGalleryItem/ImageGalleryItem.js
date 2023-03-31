import PropTypes from 'prop-types';
import { ListImg } from './ImageGalleryItem.styled';
import { useEffect, useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ imgSmall, imgLarge, tags }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const KeyDown = e => {
      if (e.code === 'Escape') {
        setShowModal(false);
      }
    };
    document.addEventListener('keydown', KeyDown);
    return () => {
      document.removeEventListener('keydown', KeyDown);
    };
  }, []);

  const BackdropClick = e => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <>
      <ListImg
        src={imgSmall}
        alt={tags}
        onClick={() => {
          setShowModal(true);
        }}
      />
      {showModal && <Modal imgLarge={imgLarge} onClose={BackdropClick} />}
    </>
  );
};

ImageGalleryItem.propTypes = {
  imgSmall: PropTypes.string.isRequired,
  imgLarge: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
