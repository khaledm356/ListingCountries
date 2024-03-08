import React from 'react';

interface IList {
  label: string;
  id: string;
}

export const List = ({list}: {list: IList[];}) => {
  return (
    <>
      {list.map(({label, id})=>{
        return (
          <div key={id}>
            {label}
          </div>
        )
      })}
    </>
  )
}
