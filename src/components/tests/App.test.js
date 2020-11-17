import { render } from '@testing-library/react'
import App from '../App'

it('renders app wihout crash', () => {
  const container = render(<App />)
  const app = container.getByLabelText('App')
  expect(app).toBeInTheDocument()
})