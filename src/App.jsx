import { useState } from 'react';
import { Avatar, Button, IconButton, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from '@mui/material'
import './App.css';
import { blue } from '@mui/material/colors';
import { Edit, Visibility } from '@mui/icons-material';
import data from './libs/dummyData';





function App() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const ColorButton = styled(Button)(() => ({
    color: 'blue',
    backgroundColor: blue[100],
    boxShadow: 'none',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    width: '100%',
    borderRadius: '20px',
    '&:hover': {
      backgroundColor: blue[200],
      boxShadow: 'none',
    },
  }));

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>CUSTOMER NAME</TableCell>
              <TableCell style={{ textAlign: 'center' }}>EMAIL</TableCell>
              <TableCell style={{ textAlign: 'center' }}>LOCATION</TableCell>
              <TableCell style={{ textAlign: 'center' }}>MACHINE</TableCell>
              <TableCell style={{ textAlign: 'center' }}>WALLET</TableCell>
              <TableCell style={{ textAlign: 'center' }}>SUBSCRIPTION</TableCell>
              <TableCell style={{ textAlign: 'center' }}>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell style={{ display: 'flex', alignItems: 'center', columnGap: '16px', maxWidth: '100%' }}>
                  <Avatar alt={row.name} src={row.image} />
                  <div>
                    {row.name}<br />{row.mobile}
                  </div>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>
                  <b>{row.location}</b>
                  <div>{row.country}</div>
                </TableCell>
                <TableCell style={{ textAlign: 'center' }}>{row.machine}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', columnGap: '16px', justifyContent: 'space-between', maxWidth: '100%' }}>
                    <b>Showa Balance:</b>
                    <div>&#165;{row.walletBalance}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '100%' }}>
                    <b>Showa Points:</b>
                    <div>{row.walletPoints}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <ColorButton variant="contained" >{row.subscription}</ColorButton>
                </TableCell>
                <TableCell>
                  <IconButton
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 15 15">
                      <path fill="currentColor" fillRule="evenodd" d="M8.625 2.5a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0m0 5a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0M7.5 13.625a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25" clipRule="evenodd"></path>
                    </svg>
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <Edit sx={{ marginRight: 1 }} />
                      Edit
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Visibility sx={{ marginRight: 1 }} />
                      View
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ padding: '20px 0' }}>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Showa. All rights reserved.
        </Typography>
      </div>
    </div>
  )
}

export default App
