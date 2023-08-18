import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEvent,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from 'react'

export interface InputProps {
  children?: React.ReactNode
  errorMessage?: string
  handleBlur: FocusEventHandler<HTMLInputElement>
  handleChange: ChangeEventHandler<HTMLInputElement>
  id: string
  label: string
  name?: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
  value: string
}
