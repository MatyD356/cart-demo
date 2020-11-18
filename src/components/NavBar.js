import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark' aria-label='nav'>
      <Link to='/' className='navbar-brand'><h1>Shop Demo</h1></Link>
      <ul className='form-inline'>
        <li className='nav-item nav-link'><Link to='/' >Home</Link></li>
        <li className='nav-item nav-link'><Link to='/shop' >Shop</Link></li>
        <li className='nav-item nav-link'><Link to='/cart' >Cart</Link></li>
      </ul>
    </nav >
  )
}

export default NavBar