import { Box, Typography, IconButton } from '@mui/material'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import { useContext } from 'react'
import { UserInfo } from '../contexts/userContext'

const UserMenu = () => {

  const { userData: { userName } } = useContext( UserInfo )

  return (
    <IconButton>
      <Typography variant='body1'>
        Hi, { userName }
      </Typography>
      <ArrowDropDownIcon />
    </IconButton>
  )
}

export default UserMenu
