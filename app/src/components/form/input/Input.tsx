import { makeClassName } from '@/utils'
import React from 'react'
import '../form.scss'

export interface IInputProps {
  /** The input type */
  type: React.HTMLInputTypeAttribute
  /** Unique identifier for the form input. */
  id?: string
  /** The property name of the form value. */
  name?: string
  /** A label to display with the form input. */
  label?: React.ReactNode
  /** The class name of the component. */
  className?: string
  /** The value of the input. */
  value?: string | number | readonly string[] | undefined
  /** An error message. */
  error?: string
  /** Children to display after the input. */
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const Input = ({
  type,
  id,
  name,
  label,
  className,
  value,
  error,
  children,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyUp,
  onChange,
}: IInputProps) => {
  const [uid] = React.useState(Date.now)

  const _id = id ?? `txt-${name ?? uid}`

  return (
    <div className={makeClassName('frm-in', className)}>
      <div className="frm-in-box">
        <div className="frm-in-value">
          {label && <label htmlFor={_id}>{label}</label>}
          <input
            type={type}
            id={_id}
            name={name}
            value={value}
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onChange={onChange}
          />
        </div>
        {error && <div className="error">{error}</div>}
      </div>
      {children}
    </div>
  )
}
