import React from 'react'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import * as styled from './styled'

export interface IFooter {
  children?: React.ReactNode
}

export const Footer = ({ children }: IFooter): JSX.Element => {
  const year = React.useMemo(() => new Date().getFullYear(), [])

  return (
    <styled.Footer>
      {children}
      <div className="row">
        <div className="row">
          <div className="logo">
            <img src="/assets/fosol-logo-small-01.png" />
          </div>
          <div className="contact">
            <div className="row">
              <FaMapMarkerAlt />
              <p>Victoria, Canada</p>
            </div>
            <div className="row">
              <FaEnvelope />
              <p>
                <a href="mailto:sales@fosol.ca?subject=Request for Information" className="white">
                  sales@fosol.ca
                </a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="copyright">
            &copy; {year} Fosol Software Solutions Inc. All rights reserved.
          </p>
        </div>
        <div></div>
      </div>
    </styled.Footer>
  )
}
