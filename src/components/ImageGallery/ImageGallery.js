// import { useEffect, useState } from 'react';
// import { getImage } from 'services/getImage';
// import PropTypes from 'prop-types';

// import { Loader } from 'components/Loader/Loader';
// import { BtnLoadMore } from 'components/Button/Button';
// import { GalleryList } from '../GalleryList/GalleryList';

// export const ImageGallery = ({ onZoom, textSearch }) => {
// const [image, setImage] = useState([]);
// const [page, setPage] = useState(1);
// const [error, setError] = useState(null);
// const [status, setStatus] = useState('idle');

// useEffect(() => {
//   if (!textSearch) {
//     return;
//   }
// async function GetImage() {
//   try {
//     setStatus('pending');
//     setError('null');
//     const imgFetch = await getImage(textSearch, page);
//     const imgFind = await imgFetch.json();

//     setImage(prev => [...prev, ...imgFind.hits]);

//     // if (page > 1) {
//     //   setImage(prev => [...prev, ...imgFind.hits]);
//     // }
//     setStatus('resolved');
//   } catch (error) {
//     setError('opps!!!!');
//   } finally {
//     setStatus('resolved');
//   }
// }

// }, [textSearch, page]);

// useEffect(() => {
//   setStatus('idle');
//   // setPage(1);
//   // setImage(null);
//   if (textSearch !== '') {
//     getImage(textSearch).then(response => {
//       response
//         .json()
//         .then(image => {
//           setStatus('pending');
//           setImage([...image.hits]);
//           setPage(1);
//           setTimeout(() => {
//             setStatus('resolved');
//           }, 500);
//         })

//         .catch(
//           (error => console.log(error), setStatus({ status: 'pending' }))
//         );
//     });
//   }
// }, [textSearch]);

// const loadMore = () => {
//   setPage(prevPage => prevPage + 1);
// };

// useEffect(() => {
//   getImage(textSearch, page + 1)
//     .then(response => response.json())
//     .then(images => {
//       if (page > 1) {
//         setStatus('pending');
//         setImage(prevImages => [...prevImages, ...images.hits]);
//         console.log('2 umowa');
//         console.log(images.hits);
//         setTimeout(() => {
//           setStatus('resolved');
//         }, 500);
//       }
//     });
// }, [page]);

//   if (status === 'pending') {
//     return <Loader />;
//   }

//   if (status === 'resolved') {
//     return (
//       <>
//         <GalleryList image={image} onZoom={onZoom} />
//         <BtnLoadMore loadMore={loadMore} />
//       </>
//     );
//   }

//   if (status === 'rejected') {
//   }
// };

// ImageGallery.propTypes = {
//   onZoom: PropTypes.func.isRequired,
//   textSearch: PropTypes.string.isRequired,
// };
