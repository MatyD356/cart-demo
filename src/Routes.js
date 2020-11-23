import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import App from './components/App'
import Cart from './components/Cart'
import NavBar from './components/NavBar'
import Shop from './components/Shop'


const Routes = () => {
  const [cardItems, setCardItems] = useState([])
  return (
    <BrowserRouter>
      <NavBar itemsInCart={cardItems.length} />
      <Switch>
        <Route exact path='/app' component={App} />
        <Route
          exact
          path='/shop'
          render={() => (
            <Shop setCardItems={setCardItems} cartItems={cardItems} />
          )} />
        <Route exact path='/cart' render={() => <Cart setCardItems={setCardItems} cartItems={cardItems} />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes