import { MouseEventHandler } from 'react'

export interface ButtonProps {
  /**
   * React children to insert a text value into button
   */
  children?: React.ReactNode
  /**
   * Responsible for running some action when button is clicked
   */
  handleClick: MouseEventHandler<HTMLButtonElement>
  /**
   * Defines if button is disabled
   */
  disabled?: boolean
  /**
   * Defines if button is primary or secondary style
   */
  primary: boolean
  /**
   * Defines if button is type submit
   */
  type?: 'submit'
}
