import React, { ChangeEventHandler } from 'react';

export const Input = ({value, placeholder, onChange}: {value: string; placeholder:string; onChange: ChangeEventHandler<HTMLInputElement>}) => {
  return (
    <input onChange={onChange} type='text' value={value} placeholder={placeholder}/>
  )
}
