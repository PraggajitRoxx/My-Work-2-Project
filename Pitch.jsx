import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function Pitch({ offer, onOfferChange }) {
    return (
        <TextField
            label="Pitch"
            value={offer}
            onChange={onOfferChange}
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            sx={{ mb: 1 }}
        />
    );
}
