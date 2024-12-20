import React from 'react'

const Carted = () => {
    const items = ['wire','buds','iphones']
  return (
    <div>
        <h1>Cart</h1>
        <p>{items.length > 0 && <h2>you have {items.length} items in your card</h2>}</p>
    </div>
  )
}

export default Carted