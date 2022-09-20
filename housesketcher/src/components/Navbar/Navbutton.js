import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import AuthContext from '../../context/AuthContext';
import {useContext} from 'react'
import { useHistory } from 'react-router-dom';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let {user , logoutUser} = useContext(AuthContext)
  const hisory = useHistory()

  const retestClickHandler = () => {
    hisory.push('/tasteanalysis')
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <button aria-describedby={id} variant="contained" onClick={handleClick}>
        <b>Hello, {user.user_nickname}</b>
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }} >
            <p onClick={retestClickHandler} style={{ marginTop: '0.5rem', marginBottom : '0.5rem' }}>Retest</p>
            <hr />
            <p style={{ marginTop: '0.5rem', marginBottom : '0.5rem' }}>Edit Profile</p>
            <hr />
            <p onClick={logoutUser} style={{ marginTop: '0.5rem', marginBottom : '0.5rem' }}>Logout</p>            
            </Typography>
      </Popover>
    </div>
  );
}