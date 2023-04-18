import React from 'react'

export interface IFooter {
  children?: React.ReactNode
}

export const Footer = ({ children }: IFooter): JSX.Element => {
  const year = React.useMemo(() => new Date().getFullYear(), [])

  return (
    <footer>
      {children}
      <p className="copyright">&copy; {year} Fosol Software Solutions Inc. All rights reserved.</p>
    </footer>
  )
}
