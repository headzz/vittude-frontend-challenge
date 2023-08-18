import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from 'react'

export interface InputProps {
  /**
   * React children elements
   */
  children?: React.ReactNode
  /**
   * string to show an error message
   */
  errorMessage?: string
  /**
   * Event trigger when blur synthetic event happens
   */
  handleBlur: FocusEventHandler<HTMLInputElement>
  /**
   * Event trigger when change synthetic event happens
   */
  handleChange: ChangeEventHandler<HTMLInputElement>
  /**
   * id for input
   */
  id: string
  /**
   * label for the input
   */
  label: string
  /**
   * inserting desire input name attribute
   */
  name?: string
  /**
   * adds a placeholder description to the input
   */
  placeholder?: string
  /**
   * defines which is the input type. Defaults to text.
   */
  type?: HTMLInputTypeAttribute
  /**
   * controlled input value
   */
  value: string
}
