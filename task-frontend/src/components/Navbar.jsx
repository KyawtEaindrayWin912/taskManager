import React from 'react';
import { AppBar, Toolbar, Typography, Switch, Box } from '@mui/material';

const Navbar = ({ setMode, mode }) => {
  const handleToggle = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Task Manager</Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body2">{mode === 'light' ? 'Light Mode' : 'Dark Mode'}</Typography>
          <Switch checked={mode === 'dark'} onChange={handleToggle} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
