import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'
import { HeaderDesktop } from './HeaderDesktop'
import { HeaderLinkItems } from './HeaderLinkItems'
import { MobileHeader } from './HeaderMobile'

describe('Header', () => {
  it('renders header link items', () => {
    render(
      <ThemeProvider theme={theme}>
        <HeaderLinkItems />,
      </ThemeProvider>,
    )

    const list = screen.getByRole('list')

    const site = screen.getByRole('link', {
      name: /site institucional/i,
    })

    const blog = screen.getByRole('link', {
      name: /blog/i,
    })

    const home = screen.getByRole('graphics-symbol')

    expect(site).toBeInTheDocument()
    expect(blog).toBeInTheDocument()
    expect(home).toBeInTheDocument()
    expect(list).toMatchSnapshot()
  })

  it('renders header desktop layout', () => {
    render(
      <ThemeProvider theme={theme}>
        <HeaderDesktop />,
      </ThemeProvider>,
    )

    const header = screen.getByRole('banner')

    const logo = screen.getByAltText('logo da empresa vittude')

    const site = screen.getByRole('link', {
      name: /site institucional/i,
    })

    const blog = screen.getByRole('link', {
      name: /blog/i,
    })

    const home = screen.getByRole('graphics-symbol')

    expect(logo).toBeInTheDocument()
    expect(site).toBeInTheDocument()
    expect(blog).toBeInTheDocument()
    expect(home).toBeInTheDocument()
    expect(header).toMatchSnapshot()
  })

  it('renders header mobile layout', () => {
    render(
      <ThemeProvider theme={theme}>
        <MobileHeader />,
      </ThemeProvider>,
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    const nav = screen.getByRole('navigation')

    const header = screen.getByRole('banner')

    const logo = screen.getByRole('img')

    const site = screen.getByRole('link', {
      name: /site institucional/i,
    })

    const blog = screen.getByRole('link', {
      name: /blog/i,
    })

    const home = screen.getByRole('graphics-symbol')

    expect(logo).toBeInTheDocument()
    expect(site).toBeInTheDocument()
    expect(blog).toBeInTheDocument()
    expect(home).toBeInTheDocument()
    expect(header).toMatchSnapshot()
    expect(nav).toMatchSnapshot()
  })
})
