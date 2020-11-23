import { Link } from 'react-router-dom'

const NavBar = ({ itemsInCart }) => {
  return (
    <nav className='navbar navbar-dark bg-dark' aria-label='nav'>
      <Link to='/' className='navbar-brand text-light d-flex justify-content-center w-100 m-0'><h1>Shop Demo</h1></Link>
      <ul className='form-inline p-0 d-flex justify-content-center w-100 m-0 '>
        <li className=' pl-0 nav-item nav-link '><Link className='text-light' to='/' >Home</Link></li>
        <li className='nav-item nav-link'><Link className='text-light' to='/shop' >Shop</Link></li>
        <li className='pr-0 nav-item nav-link'><Link className='text-light' to='/cart' >Cart
        <span className="badge badge-primary ml-1">{itemsInCart}</span></Link></li>
      </ul>
    </nav >
  )
}

export default NavBar