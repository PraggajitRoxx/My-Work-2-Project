import * as React from 'react';
import Button from '@mui/material/Button';
 
export default function DisableElevation() {
  return (
    <Button
      variant="contained"
      disableElevation
      sx={{ backgroundColor: 'black', color: 'white' }} // Custom background and text color
    >
      Generate
    </Button>
  );
}