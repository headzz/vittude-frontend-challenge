import { styled } from 'styled-components'

export const LabelStyled = styled.label`
  font-family: 'Fira Sans', sans-serif;
  margin-bottom: 4px;
  ${(props) => `
        font-size: ${props.theme.font.size.small};
        color: ${props.theme.colors.dark[200]};
    `}
`

export const InputStyled = styled.input`
  border-radius: 4px;
  font-family: 'Fira Sans', sans-serif;
  ${(props) => `
    border: 1px solid ${props.theme.colors.light[200]};
    color: ${props.theme.colors.dark[100]};
    font-size: ${props.theme.font.size.normal};
    padding: ${props.theme.spacing.small};
  `}
  outline: none;
  width: 100%;
`

export const FieldsetStyled = styled.fieldset`
  border: 0;
  display: flex;
  flex-direction: column;
  height: 68px;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
`

export const AnchorReviewPassword = styled.a`
  bottom: 8px;
  position: absolute;
  right: 12px;
`

export const ErrorMessageStyled = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.font.size.small};
  margin-top: 4px;
  text-align: left;
`
