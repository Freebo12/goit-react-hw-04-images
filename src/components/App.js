import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { getImage } from 'services/getImage';

import { Loader } from '../components/Loader/Loader';
import { BtnLoadMore } from '../components/Button/Button';
import { GalleryList } from '../components/GalleryList/GalleryList';
import { SearchBar } from './SearchBar/SearchBar';
import { SectionApp } from './App.styled';

import { GlobalStyle } from './GlobalStyle/GlobalStyle';

export const App = () => {
  const [textSearch, setSearch] = useState('');

  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    console.log(error);
    if (!textSearch) {
      return;
    }
    async function GetImage() {
      try {
        setStatus('pending');
        setError('null');

        const imgFetch = await getImage(textSearch, page);
        const imgFind = await imgFetch.json();

        setImage(prev => [...prev, ...imgFind.hits]);
        setStatus('resolved');
      } catch (error) {
        setError('opps');
        console.log(error);
      } finally {
        setStatus('resolved');
      }
    }
    GetImage();
  }, [textSearch, page]);

  const handleSubmit = textSearch => {
    setSearch(textSearch);
    setImage([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <SectionApp>
      <GlobalStyle />
      <Toaster
        toastOptions={{
          duration: 1500,
          position: 'top-right',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <SearchBar onSearch={handleSubmit} />
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <>
          <GlobalStyle />
          <GalleryList image={image} />
          <BtnLoadMore loadMore={loadMore} />
        </>
      )}
    </SectionApp>
  );
};
