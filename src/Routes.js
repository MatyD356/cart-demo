import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/App'
import Cart from './components/Cart'
import Shop from './components/Shop'
import NavBar from './components/NavBar'

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes