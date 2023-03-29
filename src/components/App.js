import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { SectionApp } from './App.styled';
import { Modal } from './Modal/Modal';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';

export const App = () => {
  const [textSearch, setSearch] = useState('');
  // const [open, setOpen] = useState(true);
  const [selectedImage, setImage] = useState(null);

  const handleSubmit = textSearch => {
    setSearch(textSearch);
  };

  const selectImage = imageUrl => {
    setImage(imageUrl);
  };

  // const KeyDown = e => {
  //   if (e.code === 'Escape') {
  //     setImage(null);
  //   }
  // };

  const BackdropClick = e => {
    if (e.target === e.currentTarget) {
      setImage(null);
    }
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
      <ImageGallery textSearch={textSearch} onZoom={selectImage} />
      {selectedImage && <Modal img={selectedImage} onClose={BackdropClick} />}
    </SectionApp>
  );
};
