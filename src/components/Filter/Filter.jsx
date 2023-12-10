import React from 'react';
import css from './Filter.module.css'

function Filter({ filter, onChange }) {
  console.log(filter)
  return (
    <label className={css.FilterWrapper}>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
}

export default Filter;
