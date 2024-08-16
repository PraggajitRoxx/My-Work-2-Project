import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const tones = [
  { value: 'EvoX', label: 'EvoX' },
  { value: 'Vertex', label: 'Vertex' },
  { value: 'NovaPro', label: 'NovaPro' },
  { value: 'AeroMax', label: 'AeroMax' },
  { value: 'HyperBook', label: 'HyperBook' },
  { value: 'UltraCore', label: 'UltraCore' },
  { value: 'ProWave', label: 'ProWave' },
  { value: 'QuantumBook', label: 'QuantumBook' },
  { value: 'Vision', label: 'Vision' },
];

export default function ToneSelect() {
  const [selectedTones, setSelectedTones] = React.useState([]);

  const handleChange = (event) => {
    setSelectedTones(event.target.value);
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
      <FormControl sx={{ m: 1, width: '25ch' }}>
        <InputLabel id="multiple-checkbox-label">Select Products</InputLabel>
        <Select
          labelId="multiple-checkbox-label"
          id="multiple-checkbox"
          multiple
          value={selectedTones}
          onChange={handleChange}
          renderValue={(selected) => selected.join(', ')}
        >
          {tones.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox checked={selectedTones.indexOf(option.value) > -1} />
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
