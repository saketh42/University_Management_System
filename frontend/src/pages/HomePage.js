import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Button,
  Toolbar,
  Card,
  CardContent,
  CardHeader,
  CardActions
} from '@mui/material';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || 'Student';
  
  // Mock student data
  const studentData = {
    name: username,
    id: 'STU001',
    grade: '10th',
    joinDate: 'September 15, 2024',
    lastAssessment: 'February 20, 2025',
    strengths: ['Critical Thinking', 'Mathematics'],
    areasToImprove: ['Time Management', 'Written Communication']
  };
  
  const dashboardPreviews = [
    {
      title: 'Assessment Progress',
      content: '70% Complete',
      action: 'View Progress',
      color: '#4e73df'
    },
    {
      title: 'Strength Analysis',
      content: 'Top: Critical Thinking',
      action: 'View Strengths',
      color: '#1cc88a'
    },
    {
      title: 'Improvement Areas',
      content: 'Focus: Time Management',
      action: 'View Details',
      color: '#f6c23e'
    }
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: '240px' }}>
        <Toolbar />
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome back, {studentData.name}!
        </Typography>
        
        <Grid container spacing={3}>
          {/* Student Information Section - Left Half */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Student Information
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1">
                  <strong>Student ID:</strong> {studentData.id}
                </Typography>
                <Typography variant="body1">
                  <strong>Grade:</strong> {studentData.grade}
                </Typography>
                <Typography variant="body1">
                  <strong>Joined:</strong> {studentData.joinDate}
                </Typography>
                <Typography variant="body1">
                  <strong>Last Assessment:</strong> {studentData.lastAssessment}
                </Typography>
              </Box>
              
              <Typography variant="subtitle1" gutterBottom>
                <strong>Key Strengths:</strong>
              </Typography>
              <Box sx={{ mb: 2 }}>
                {studentData.strengths.map((strength, index) => (
                  <Typography key={index} variant="body2">
                    • {strength}
                  </Typography>
                ))}
              </Box>
              
              <Typography variant="subtitle1" gutterBottom>
                <strong>Areas to Improve:</strong>
              </Typography>
              <Box>
                {studentData.areasToImprove.map((area, index) => (
                  <Typography key={index} variant="body2">
                    • {area}
                  </Typography>
                ))}
              </Box>
              
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ mt: 2 }}
                onClick={() => navigate('/questionnaire')}
              >
                Take New Assessment
              </Button>
            </Paper>
          </Grid>
          
          {/* Dashboard Sneak Peek - Right Half */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Dashboard Sneak Peek
              </Typography>
              
              <Grid container spacing={2}>
                {dashboardPreviews.map((preview, index) => (
                  <Grid item xs={12} key={index}>
                    <Card sx={{ backgroundColor: preview.color + '20' }}>
                      <CardHeader 
                        title={preview.title} 
                        titleTypographyProps={{ variant: 'subtitle1' }}
                        sx={{ pb: 0 }}
                      />
                      <CardContent>
                        <Typography variant="h6">{preview.content}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button 
                          size="small" 
                          onClick={() => navigate('/dashboard')}
                          sx={{ color: preview.color }}
                        >
                          {preview.action}
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              
              <Button 
                variant="outlined" 
                color="primary" 
                sx={{ mt: 2 }}
                onClick={() => navigate('/dashboard')}
                fullWidth
              >
                Go to Dashboard
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;