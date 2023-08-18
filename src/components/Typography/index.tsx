import { TypographyProps } from './interface'
import { ParagraphStyled } from './styled'

export const Typography: React.FC<TypographyProps> = ({
  bold = false,
  font = 'Fira Sans',
  size = 'normal',
  children,
}) => {
  return (
    <ParagraphStyled $size={size} $font={font} $bold={bold}>
      {children}
    </ParagraphStyled>
  )
}
