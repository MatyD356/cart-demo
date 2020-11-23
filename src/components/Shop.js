import { useEffect, useState } from 'react'
import Card from './Card'

const Shop = ({ setCardItems, cartItems }) => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch('https://fortnite-api.com/v2/cosmetics/br/new')
      .then(response => response.json())
      .then(data => setItems(data.data.items))
      .then(setLoading(false))
  }, [])
  useEffect(() => {
    console.log(items[0])
  })
  return (
    <div aria-label='Shop' className='m-4 d-flex flex-row justify-content-center'>
      {loading
        ? <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div> :
        <div className='row m-auto flex-row justify-content-center'>
          {items
            ? items.map(item => <Card key={item.id} item={item} setCardItems={setCardItems} cardItems={cartItems} />)
            : null}
        </div>}
    </div>
  )
}
export default Shop