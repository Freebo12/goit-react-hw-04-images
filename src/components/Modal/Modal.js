import PropTypes from 'prop-types';
import { OverLayModal, ModalImg } from './Modal.styled';

export const Modal = ({ onClose, imgLarge }) => {
  return (
    <OverLayModal onClick={onClose}>
      <ModalImg className="modal">
        <img src={imgLarge} alt={imgLarge} />
      </ModalImg>
    </OverLayModal>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  imgLarge: PropTypes.string.isRequired,
};
