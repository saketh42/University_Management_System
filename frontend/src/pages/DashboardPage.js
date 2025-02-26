import React from 'react';
import { Box, Typography, Toolbar } from '@mui/material';
import Sidebar from '../components/Sidebar';

const DashboardPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: '240px' }}>
        <Toolbar />
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1">
          This is a placeholder for the dashboard content. 
          You mentioned to leave the dashboard for now, so we can implement the detailed
          charts and analytics features later.
        </Typography>
      </Box>
    </Box>
  );
};

export default DashboardPage;