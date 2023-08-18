import { ButtonProps } from './interface'
import { ButtonStyled } from './styled'

export const Button: React.FC<ButtonProps> = (props) => {
  const { disabled = false, handleClick, children, primary, type } = props
  return (
    <ButtonStyled
      disabled={disabled}
      onClick={handleClick}
      $primary={primary}
      type={type}
    >
      {children}
    </ButtonStyled>
  )
}
