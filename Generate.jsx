import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Pitch from './Pitch';
import Edit from './Edit';
import ActionButtons from './ActionButtons';

export default function Generator() {
    const [offer, setOffer] = React.useState('');
    const [targetDescription, setTargetDescription] = React.useState('');

    const handleOfferChange = (event) => {
        setOffer(event.target.value);
    };

    const handleTargetDescriptionChange = (event) => {
        setTargetDescription(event.target.value);
    };

    const handleRegenerate = () => {
        // Logic to regenerate or refresh the chat input box content
        console.log('Regenerate button clicked');
    };

    const handleSave = () => {
        // Logic to save the chat input box content
        console.log('Save button clicked');
    };

    return (
        <Box >
            <Container sx={{  bgcolor: '#fff', height: 'auto', width: '100%', maxWidth: '600px'   }}>
                
                <Pitch offer={offer} onOfferChange={handleOfferChange} />
                <Edit
                    targetDescription={targetDescription}
                    onTargetDescriptionChange={handleTargetDescriptionChange}
                    onSave={handleSave}
                    onRegenerate={handleRegenerate}
                />
                <ActionButtons />
            </Container>
        </Box>
    );
}
