import React from "react";
import css from "./Filter.module.css";
import { useContextBlock } from './../Context';


const Filter = () => {

  const context = useContextBlock();
  const { addFilter } = context;

  const handleValue = event => {
    addFilter(event.currentTarget.value);
  }

   return <label className={css.label}>Find contact by name 
      <input
        type="text"
        onChange={handleValue}
      />
    </label>
}

export { Filter }


