import {
  Box,
  Drawer,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import * as styled from './styled'

export interface IHeaderMenuItem {
  icon?: React.ReactNode
  label: React.ReactNode
  to: string
}

export interface IHeader {
  menu?: IHeaderMenuItem[]
}

export const Header = ({ menu }: IHeader): JSX.Element => {
  const navigate = useNavigate()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [open, setOpen] = React.useState(false)

  return (
    <styled.Header>
      <div className="company-logo-small">
        <Link to="/">
          <img className="logo" src="/assets/fosol-logo-small-01.png" />
          <h1 className="company-name">Fosol</h1>
        </Link>
      </div>
      <div className="menu">
        {isMobile ? (
          <>
            <IconButton onClick={() => setOpen(!open)}>
              <FaBars />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={() => setOpen(false)}
              onKeyDown={() => setOpen(false)}
              onClick={() => setOpen(false)}
            >
              <Box>
                <ListItemButton onClick={() => navigate('/')}>
                  <div className="company-logo-small">
                    <img className="logo" src="/assets/fosol-logo-small-01.png" />
                    <h1 className="company-name">Fosol</h1>
                  </div>
                </ListItemButton>
                {menu?.map((item, index) => (
                  <ListItemButton key={index} onClick={() => navigate(item.to)}>
                    {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                ))}
              </Box>
            </Drawer>
          </>
        ) : (
          menu?.map((item, index) => (
            <ListItemButton key={index} onClick={() => navigate(item.to)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))
        )}
      </div>
      {!isMobile && <div></div>}
    </styled.Header>
  )
}
