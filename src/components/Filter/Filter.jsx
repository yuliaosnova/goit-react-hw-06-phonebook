import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const setFilter = e => {
    e.preventDefault();
    const value = e.currentTarget.value.toLowerCase();
    // console.log(value);

    dispatch(filterChange(value));
  };

  return (
    <div className={css.list}>
      <label className={css.label}>Find contacts by name</label>
      <input type="text" onChange={setFilter} />
    </div>
  );
};

export default Filter;
