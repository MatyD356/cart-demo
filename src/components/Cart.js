import { useEffect } from 'react'

const Cart = ({ cartItems, setCardItems }) => {
  useEffect(() => {
    console.log(cartItems);
  })
  const removeFromCart = (item) => {
    setCardItems(
      cartItems.filter(arrItem => item.id !== arrItem.id)
    )
  }
  return (
    <div aria-label='Cart' className='container vh-auto'>
      {cartItems.map(item =>
        <div className='row bg-dark text-light my-4 rounded'>
          <div className='col col-md-2 align-self-center' >
            <h4 className='mt-2'>{item.name}</h4>
            <p className='mb-2'>Quantity: {item.quantity}</p>
          </div>
          <div className='col col-md-8  align-self-center d-none d-md-block' >
            <img src={item.images.smallIcon} className='img-fluid ' alt='item to buy' />
          </div>
          <div className='col-5 col-sm align-self-center ' >
            <button className='btn btn-primary btn-lg' onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        </div>
      )}
      <div className='row align-self-center' >
        <button className='btn btn-primary btn-lg btn-block my-4' onClick={() => alert('not added yet')}>BUY</button>
      </div>
    </div>
  )
}

export default Cart