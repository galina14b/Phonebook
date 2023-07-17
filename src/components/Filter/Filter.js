import React from "react";
import css from "./Filter.module.css";

const Filter = ({onChange}) => {


  const handleValue = event => {
    onChange(event.currentTarget.value);
  }

   return <label className={css.label}>Find contact by name 
      <input
        type="text"
        onChange={handleValue}
      />
    </label>
}

export { Filter }


