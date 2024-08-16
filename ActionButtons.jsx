import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ActionButtons() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button sx={{ color: '#fff', backgroundColor: 'black', '&:hover': { backgroundColor: 'gray' }, mr: 1 }}>
                Send
            </Button>
            <Button sx={{ color: '#fff', backgroundColor: 'black', '&:hover': { backgroundColor: 'gray' }, mr: 1 }}>
                Schedule
            </Button>
            <Button sx={{ color: '#fff', backgroundColor: 'black', '&:hover': { backgroundColor: 'gray' }, mr: 1 }}>
                Copy
            </Button>
        </Box>
    );
}
