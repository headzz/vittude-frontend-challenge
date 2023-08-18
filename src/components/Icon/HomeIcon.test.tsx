import { theme } from '@styles/theme'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { HomeIcon } from './Home'

describe('home icon', () => {
  const mockClick = jest.fn()
  it('renders default icon', () => {
    render(
      <ThemeProvider theme={theme}>
        <HomeIcon />
      </ThemeProvider>,
    )

    const button = screen.getByRole('graphics-symbol')

    expect(button).toMatchSnapshot()
  })

  it('renders white style icon', () => {
    render(
      <ThemeProvider theme={theme}>
        <HomeIcon fill="#ffffff" />
      </ThemeProvider>,
    )

    const button = screen.getByRole('graphics-symbol')

    expect(button).toMatchSnapshot()
  })
})
