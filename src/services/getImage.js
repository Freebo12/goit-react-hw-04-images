import PropTypes from 'prop-types';

export const getImage = (searchText, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '33175218-249cfa9e0adbf794a9bfb1ae0';

  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${searchText}&image_type=photo&per_page=3&page=${page}`
  );
};

getImage.propTypes = {
  searchText: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

// import axios from 'axios';

// const BASE_URL = 'https://pixabay.com/api/';
// const KEY = '32975288-caf6655f638892d6e2855db13';
// const PARAM_SEARCH_API =
//   'image_type=photo&orientation=horizontal&safesearch=true';

// export const FeatchImages = async (nextName, page, per_page) => {
//   const responce = await axios.get(
//     `${BASE_URL}?key=${KEY}&q=${nextName}&${PARAM_SEARCH_API}&page=${page}&per_page=${per_page}`
//   );
//   // console.log(responce.data);
//   return responce.data;
// };
