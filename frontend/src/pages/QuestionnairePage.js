import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Toolbar, 
  Stepper, 
  Step, 
  StepLabel, 
  Button, 
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Divider
} from '@mui/material';
import Sidebar from '../components/Sidebar';

// Mock questions for each section
const questionnaireSections = [
  {
    title: 'Academic Skills',
    questions: [
      { id: 'q1_1', text: 'How confident are you in your math skills?', options: ['Not confident', 'Somewhat confident', 'Confident', 'Very confident'] },
      { id: 'q1_2', text: 'How would you rate your reading comprehension?', options: ['Poor', 'Average', 'Good', 'Excellent'] },
      { id: 'q1_3', text: 'Do you find it easy to understand scientific concepts?', options: ['Very difficult', 'Somewhat difficult', 'Somewhat easy', 'Very easy'] }
    ]
  },
  {
    title: 'Learning Preferences',
    questions: [
      { id: 'q2_1', text: 'Do you prefer learning through visual aids?', options: ['Never', 'Sometimes', 'Often', 'Always'] },
      { id: 'q2_2', text: 'Do you enjoy group projects?', options: ['Not at all', 'A little', 'Somewhat', 'Very much'] },
      { id: 'q2_3', text: 'How do you feel about self-directed learning?', options: ['Very uncomfortable', 'Somewhat uncomfortable', 'Comfortable', 'Very comfortable'] }
    ]
  },
  {
    title: 'Study Habits',
    questions: [
      { id: 'q3_1', text: 'How many hours do you typically study per week?', options: ['Less than 5', '5-10', '11-15', 'More than 15'] },
      { id: 'q3_2', text: 'Do you take notes during lectures?', options: ['Never', 'Rarely', 'Sometimes', 'Always'] },
      { id: 'q3_3', text: 'How often do you review your notes after class?', options: ['Never', 'Rarely', 'Sometimes', 'Daily'] }
    ]
  },
  {
    title: 'Career Aspirations',
    questions: [
      { id: 'q4_1', text: 'Which field are you most interested in pursuing?', options: ['Arts/Humanities', 'STEM', 'Business', 'Other'] },
      { id: 'q4_2', text: 'How important is work-life balance to you?', options: ['Not important', 'Somewhat important', 'Important', 'Very important'] },
      { id: 'q4_3', text: 'Do you see yourself pursuing higher education after school?', options: ['Definitely not', 'Probably not', 'Probably yes', 'Definitely yes'] }
    ]
  }
];

const QuestionnairePage = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [answers, setAnswers] = useState({});
  
  const handleNext = () => {
    if (activeSection < questionnaireSections.length - 1) {
      setActiveSection(activeSection + 1);
    }
  };
  
  const handleBack = () => {
    if (activeSection > 0) {
      setActiveSection(activeSection - 1);
    }
  };
  
  const handleSectionClick = (index) => {
    setActiveSection(index);
  };
  
  const handleAnswerChange = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
  };
  
  const handleSubmit = () => {
    // In a real app, you would send the answers to a backend
    console.log('Answers submitted:', answers);
    alert('Questionnaire submitted successfully!');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: '240px' }}>
        <Toolbar />
        <Typography variant="h4" component="h1" gutterBottom>
          Student Assessment Questionnaire
        </Typography>
        
        <Paper sx={{ p: 3, mb: 3 }}>
          <Stepper activeStep={activeSection} sx={{ mb: 4 }}>
            {questionnaireSections.map((section, index) => (
              <Step key={section.title}>
                <StepLabel 
                  onClick={() => handleSectionClick(index)}
                  sx={{ cursor: 'pointer' }}
                >
                  {section.title}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          
          <Divider sx={{ mb: 3 }} />
          
          <Typography variant="h5" gutterBottom>
            {questionnaireSections[activeSection].title}
          </Typography>
          
          {questionnaireSections[activeSection].questions.map((question) => (
            <Box key={question.id} sx={{ mb: 4 }}>
              <FormControl component="fieldset">
                <FormLabel component="legend" sx={{ mb: 1 }}>
                  {question.text}
                </FormLabel>
                <RadioGroup
                  value={answers[question.id] || ''}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                >
                  {question.options.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>
          ))}
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              variant="outlined"
              onClick={handleBack}
              disabled={activeSection === 0}
            >
              Back
            </Button>
            
            {activeSection < questionnaireSections.length - 1 ? (
              <Button
                variant="contained"
                onClick={handleNext}
              >
                Next
              </Button>
            ) : (
              <Button
                variant="contained"
                color="success"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            )}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default QuestionnairePage;