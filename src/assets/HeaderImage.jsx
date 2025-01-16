import React from 'react';
import {Box} from '@mui/material';

const HeaderImage = ({height}) => {
    const imageUrl = require('./layout/background.jpg');
    const logoUrl = require('./layout/logo.png');

    return (
        <Box
            sx={{
                position: 'relative',
                height: height || '200px',
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '55px',
                    transform: 'translateY(-50%)',
                }}
            >
                <img
                    src={logoUrl}
                    alt="Logo"
                    style={{
                        width: '100px',
                        height: 'auto',
                    }}
                />
            </Box>
        </Box>
    );
};

export default HeaderImage;
