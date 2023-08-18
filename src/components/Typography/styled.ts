import { styled } from 'styled-components'
import { IParagraphStyled } from './interface'

export const ParagraphStyled = styled.p<IParagraphStyled>`
  font-size: ${({ $size = 'normal', theme }) => theme.font.size[$size]};
  font-family: ${({ $font }) => `${$font}, sans-serif;`};
  font-weight: ${({ $bold }) => ($bold ? 600 : 400)};
`
