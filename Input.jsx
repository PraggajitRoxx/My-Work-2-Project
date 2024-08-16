import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        width: 700, // Increased width
        height: 70, // Increased height
        maxWidth: '100%',
      }}
    >
      <TextField 
        fullWidth 
        label="Manual Context" 
        id="fullWidth" 
        sx={{ height: '100%' }} // Ensure TextField takes full height of the Box
      />
    </Box>
  ); 
}
