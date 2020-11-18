import { render } from '@testing-library/react'
import Shop from '../Shop'

it('renders shop wihout crash', () => {
  const container = render(<Shop />)
  const ShopComponent = container.getByLabelText('Shop')
  expect(ShopComponent).toBeInTheDocument()
})