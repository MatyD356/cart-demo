import Cart from '../Cart'
import { render } from '@testing-library/react'

it('renders Cart wihout crash', () => {
  const container = render(<Cart />)
  const CartComponent = container.getByLabelText('Cart')
  expect(CartComponent).toBeInTheDocument()
})