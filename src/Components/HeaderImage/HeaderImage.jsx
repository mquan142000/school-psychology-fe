import React from 'react';
import { Box, Typography } from '@mui/material';

const HeaderImage = ({ imageUrl, logoUrl, height }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                height: height || '200px',
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Logo */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <img
                    src={logoUrl}
                    alt="Logo"
                    style={{
                        width: '150px', // Đặt kích thước cho logo
                        height: 'auto',
                    }}
                />
            </Box>
        </Box>
    );
};

export default HeaderImage;
