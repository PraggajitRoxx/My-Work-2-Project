import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const tones = [
  { value: 'Professional', label: 'Professional' },
  { value: 'Conversational', label: 'Conversational' },
  { value: 'Friendly', label: 'Friendly' },
  { value: 'Urgent', label: 'Urgent' },
  { value: 'Persuasive', label: 'Persuasive' },
];

export default function ToneSelect() {
  const [tone, setTone] = React.useState('');

  const handleChange = (event) => {
    setTone(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-tone"
          select
          label="Select Tone"
          value={tone}
          onChange={handleChange}
          // helperText="Please select the tone"
        >
          {tones.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
