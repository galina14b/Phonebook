import React from "react";
import css from "./Filter.module.css";

import { useDispatch } from 'react-redux'
import { setNewFilterValue } from '../../redux/filterSlice/filterSlice';


const Filter = () => {
  const dispatch = useDispatch();

  const handleValue = event => {
    let filterValue = event.currentTarget.value;
    dispatch(setNewFilterValue(filterValue.toLowerCase()));
  }

   return <label className={css.label}>Find contact by name 
      <input
        type="text"
        onChange={handleValue}
      />
    </label>
}

export { Filter }


