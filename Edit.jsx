import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export default function Edit({ targetDescription, onTargetDescriptionChange, onSave, onRegenerate }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <TextField
                label="Chat to Edit"
                value={targetDescription}
                onChange={onTargetDescriptionChange}
                multiline
                rows={4}
                variant="outlined"
                fullWidth
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ml: 1 }}>
                <IconButton
                    onClick={onSave}
                    sx={{ mb: 1, color: 'black' }}
                >
                    <SaveIcon />
                </IconButton>
                <IconButton
                    onClick={onRegenerate}
                    sx={{ color: 'black' }}
                >
                    <AutorenewIcon />
                </IconButton>
            </Box>
        </Box>
    );
}
