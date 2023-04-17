export interface IFooter {
  children?: React.ReactNode
}

export const Footer = ({ children }: IFooter): JSX.Element => {
  return (
    <footer>
      {children}
      <p className="copyright">&copy; 2023 Fosol Software Solutions Inc. All rights reserved.</p>
    </footer>
  )
}
