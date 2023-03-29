import PropTypes from 'prop-types';
import { BtnLoad } from './Button.styled';

export const BtnLoadMore = ({ loadMore }) => {
  return (
    <BtnLoad type="button" onClick={loadMore}>
      LoadMore
    </BtnLoad>
  );
};

BtnLoadMore.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
