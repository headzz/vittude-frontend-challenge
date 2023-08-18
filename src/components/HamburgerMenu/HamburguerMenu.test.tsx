import { fireEvent, render, screen } from '@testing-library/react'
import { HamburguerMenu } from '.'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'

describe('hamburguer mennus', () => {
  it('renders default menu', () => {
    render(
      <ThemeProvider theme={theme}>
        <HamburguerMenu>
          <ul>
            <li>Inicio</li>
            <li>Blog</li>
          </ul>
        </HamburguerMenu>
      </ThemeProvider>,
    )

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toMatchSnapshot()
  })

  it('should trigger nav appearing', () => {
    render(
      <ThemeProvider theme={theme}>
        <HamburguerMenu>
          <ul>
            <li>Inicio</li>
            <li>Blog</li>
          </ul>
        </HamburguerMenu>
      </ThemeProvider>,
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)
    const nav = screen.getByRole('navigation')

    expect(nav).toBeInTheDocument()
    expect(screen.getByText(/blog/i)).toBeInTheDocument()
    expect(nav).toMatchSnapshot()
  })
})
