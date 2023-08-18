import { InputProps } from './interface'
import {
  AnchorReviewPassword,
  ErrorMessageStyled,
  FieldsetStyled,
  InputStyled,
  LabelStyled,
} from './styled'
import Image from 'next/image'
import { useState } from 'react'

const SHOW_PASSWORD_IMAGE = 'static/showPassword.svg'
const HIDE_PASSWORD_IMAGE = 'static/hidePassword.svg'

export const Input: React.FC<InputProps> = ({
  handleChange,
  errorMessage = '',
  handleBlur,
  id,
  label,
  name,
  placeholder,
  type = 'text',
  value,
}) => {
  const [iconPassword, setIconPassword] = useState<string>(HIDE_PASSWORD_IMAGE)
  const [inputType, setInputType] = useState<typeof type>(type)

  const changeInputTypeToReviewPassword = () => {
    if (inputType === type) {
      setInputType('text')
      setIconPassword(SHOW_PASSWORD_IMAGE)
    } else {
      setInputType(type)
      setIconPassword(HIDE_PASSWORD_IMAGE)
    }
  }
  return (
    <FieldsetStyled>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <InputStyled
        aria-describedby={id}
        id={id}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={placeholder}
        type={inputType}
        value={value}
      />
      {type === 'password' && (
        <AnchorReviewPassword
          role="button"
          onClick={changeInputTypeToReviewPassword}
        >
          <Image
            src={iconPassword}
            alt="Visualizar senha"
            width={24}
            height={24}
          />
        </AnchorReviewPassword>
      )}
      <ErrorMessageStyled aria-live="assertive" id={id}>
        {errorMessage}
      </ErrorMessageStyled>
    </FieldsetStyled>
  )
}
