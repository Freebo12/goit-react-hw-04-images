import { useState } from 'react';
import PropTypes from 'prop-types';

import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-hot-toast';

import {
  Searchbar,
  SearchForm,
  SearchInput,
  SearchBtn,
} from './SearchBar.styled';

export const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const hadleSubmit = evt => {
    evt.preventDefault();
    if (value !== '') {
      onSearch(value);
      setValue('');
    } else {
      return toast.error('Write something', {});
    }
  };

  return (
    <Searchbar>
      <SearchForm onSubmit={hadleSubmit}>
        <SearchBtn type="submit">
          <FcSearch size="25px" />
        </SearchBtn>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </SearchForm>
    </Searchbar>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
