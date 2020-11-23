import { useState } from 'react'

const Card = ({ setCardItems, item, cardItems }) => {
  const [quantity, setQuantity] = useState(1)
  const [clicked, setClicked] = useState(cardItems.filter(cartItem => cartItem.id === item.id).length > 0 ? true : false)
  const handleChange = (e) => {
    if (e.target.value > 0) {
      setQuantity(e.target.value)
    }
  }
  const addToCart = () => {
    const newItem = { ...item, quantity: parseInt(quantity, 10) }
    setClicked(!clicked)
    setCardItems((prev) => [...prev, newItem])
  }
  return (
    <div className='card bg-dark col-sm-auto p-4 m-2'>
      <img src={item.images.icon} className='card-img-top' alt='item to buy' />
      <h5 className='card-title text-light'>{item.name}</h5>
      <p className='card-text text-light'>{item.description}</p>
      <div className='input-group mb-3 d-flex '>
        <span className='card-text text-light d-flex align-items-center mr-2'>Quantity:</span>
        <input disabled={clicked} type='number' className='input-group input-group-sm col-auto text-center ' value={quantity} onChange={handleChange} />
      </div>
      <button
        disabled={clicked}
        className='btn btn-primary'
        onClick={() => addToCart()}
      >{clicked ? 'In cart' : 'Add to Cart'}</button>
    </div>
  )
}
export default Card