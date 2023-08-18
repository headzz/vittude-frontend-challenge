import { HomeIcon } from '@components/Icon/Home'
import { theme } from '@styles/theme'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Input } from '.'

describe('Input', () => {
  let value = ''
  const handleBlurMock = jest.fn()
  const handleChangeMock = jest.fn()

  it('renders input', () => {
    render(
      <ThemeProvider theme={theme}>
        <Input
          value={value}
          handleBlur={handleBlurMock}
          handleChange={handleChangeMock}
          id="test"
          label="testing"
          placeholder="type something"
        />
      </ThemeProvider>,
    )

    const label = screen.getByText(/testing/i)
    const input = screen.getByRole('textbox')

    expect(input.getAttribute('placeholder')).toBe('type something')
    expect(label).toBeInTheDocument()
    expect(input.getAttribute('value')).toBe('')
  })
})
