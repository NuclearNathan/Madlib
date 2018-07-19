import React from 'react';

const Input = ({title, state, name}, onChange, index) => {
  return (
    <div key={state} className="input">
      <label></label>
      <input name={name} value={state}> onChange={onChange}/>
      <label className="input__title">{title}</label>
    </div>
  )
}

export default Input;