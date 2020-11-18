import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NavBar from '../NavBar'

it('renders navBar wihout crash', () => {
  const container = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>)
  const navBarComponent = container.getByLabelText('nav')
  expect(navBarComponent).toBeInTheDocument()
})