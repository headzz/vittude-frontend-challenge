export interface TypographyProps {
  children?: React.ReactNode
  font?: 'Fira Sans' | 'Inter'
  size?: 'small' | 'normal' | 'large' | 'extraLarge'
  bold?: boolean
}

export interface IParagraphStyled {
  $font: TypographyProps['font']
  $size: TypographyProps['size']
  $bold: TypographyProps['bold']
}
