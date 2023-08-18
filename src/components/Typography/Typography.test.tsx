import { theme } from '@styles/theme'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Typography } from '.'

describe('Typography', () => {
  it('renders default text', () => {
    render(
      <ThemeProvider theme={theme}>
        <Typography>Test</Typography>
      </ThemeProvider>,
    )

    const paragraph = screen.getByText(/test/i)

    expect(paragraph).toMatchSnapshot()
  })

  it('renders Inter font and large text', () => {
    render(
      <ThemeProvider theme={theme}>
        <Typography font="Inter" size="large">
          Test
        </Typography>
      </ThemeProvider>,
    )

    const paragraph = screen.getByText(/test/i)

    expect(paragraph).toMatchSnapshot()
  })

  it('renders bold and extra large text', () => {
    render(
      <ThemeProvider theme={theme}>
        <Typography bold size="extraLarge">
          Test
        </Typography>
      </ThemeProvider>,
    )

    const paragraph = screen.getByText(/test/i)

    expect(paragraph).toMatchSnapshot()
  })
  it('renders small text', () => {
    render(
      <ThemeProvider theme={theme}>
        <Typography size="small">Test</Typography>
      </ThemeProvider>,
    )

    const paragraph = screen.getByText(/test/i)

    expect(paragraph).toMatchSnapshot()
  })
})
