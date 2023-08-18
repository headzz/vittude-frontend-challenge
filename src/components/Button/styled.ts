import { css, styled } from 'styled-components'

const PrimaryButton = css`
  ${({ theme }) => `
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.light[100]}
  `}
`

const SecondaryButton = css`
  ${({ theme }) => `
    background-color: transparent;
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
  `}
`
interface PrimaryType {
  $primary: boolean
}
export const ButtonStyled = styled.button<PrimaryType>`
  border: 0;
  border-radius: 10px;
  font-weight: 600;
  outline: 0;
  text-align: center;
  width: 100%;
  padding: ${({ theme }) => `
        ${theme.spacing.normal} ${theme.spacing.small}
    `};
  ${({ $primary }) => ($primary ? PrimaryButton : SecondaryButton)};

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    color: #dfdfdf;
  }
`
