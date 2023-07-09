import { Box, Typography, Button, Menu, MenuItem } from '@mui/material'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import { useContext, useState } from 'react'
import { UserInfo } from '../contexts/userContext'

const UserMenu = () => {

  const { userData: { userName } } = useContext( UserInfo )

  const [anchorEl, setAnchorEl] =useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button 
        variant='newButton'
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Typography variant='body2'>
          Hi, { userName }
        </Typography>
        <ArrowDropDownIcon />
      </Button>
      <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}

export default UserMenu
