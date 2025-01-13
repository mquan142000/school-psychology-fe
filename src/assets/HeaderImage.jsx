import React from 'react';
import { Box } from '@mui/material';

const HeaderImage = ({ height }) => {
    const imageUrl = require('./layout/background.jpg'); // Đường dẫn ảnh nền
    const logoUrl = require('./layout/logo.png'); // Đường dẫn logo

    return (
        <Box
            sx={{
                position: 'relative',
                height: height || '200px',
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center', // Hoặc 'top' nếu ưu tiên phần trên
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Logo */}
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
