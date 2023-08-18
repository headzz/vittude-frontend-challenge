import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '.'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'

describe('Button', () => {
  const mockClick = jest.fn()
  it('renders primary button', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button handleClick={mockClick} primary>
          Test
        </Button>
      </ThemeProvider>,
    )

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Test')
    expect(button).toMatchSnapshot()
  })

  it('should trigger click', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button handleClick={mockClick} primary>
          Test
        </Button>
      </ThemeProvider>,
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(mockClick).toBeCalled()
  })

  it('should render disabled button', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button handleClick={mockClick} primary disabled>
          Test
        </Button>
      </ThemeProvider>,
    )

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Test')
    expect(button).toMatchSnapshot()
  })

  it('should render outline button', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button handleClick={mockClick} primary={false} disabled>
          Test
        </Button>
      </ThemeProvider>,
    )

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Test')
    expect(button).toMatchSnapshot()
  })
})
