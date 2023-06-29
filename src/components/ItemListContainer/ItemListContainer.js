import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='itemListContainer'>
        <h1 className='itemListContainer_Titulo'>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer