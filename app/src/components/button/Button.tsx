import { makeClassName } from '@/utils'
import React from 'react'
import * as styled from './styled'

export interface IButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  variant?: 'primary' | 'secondary' | 'info' | 'link' | 'success' | 'warning' | 'error'
  onClick?: React.MouseEventHandler<HTMLInputElement>
}

export const Button = ({ label, className, children, onClick, ...rest }: IButtonProps) => {
  const btnRef = React.useRef<HTMLInputElement>(null)

  return (
    <styled.Button
      tabIndex={rest.tabIndex ?? 0}
      className={makeClassName('btn', className)}
      label={label}
      {...rest}
      onClick={(e) => btnRef?.current?.click?.()}
      onKeyDown={(e) => {
        if (e.code === 'Space' || e.code === 'Enter') btnRef?.current?.click?.()
      }}
    >
      {label}
      {children}
      <input ref={btnRef} type="button" value={label} onClick={onClick} />
    </styled.Button>
  )
}
