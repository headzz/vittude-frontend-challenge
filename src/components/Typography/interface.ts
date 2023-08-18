export interface TypographyProps {
  /**
   * React children elements
   */
  children?: React.ReactNode
  /**
   * Defining font used for the paragraph.
   */
  font?: 'Fira Sans' | 'Inter'
  /**
   * defining sizes based on the ones present into the theme
   */
  size?: 'small' | 'normal' | 'large' | 'extraLarge'
  /**
   * defines if text is going to be bold or not
   */
  bold?: boolean
}

export interface IParagraphStyled {
  $font: TypographyProps['font']
  $size: TypographyProps['size']
  $bold: TypographyProps['bold']
}
