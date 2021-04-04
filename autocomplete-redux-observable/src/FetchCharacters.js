import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCharacters } from './redux/actions';

const FetchCharacters = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    dispatch(fetchCharacters(newValue));
  };

  return (
    <input
      onChange={handleChange}
      placeholder="Search Here"
      type="search"
      value={value}
    />
  );
};

export default FetchCharacters;
