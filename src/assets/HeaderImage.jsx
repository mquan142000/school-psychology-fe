import React from 'react';
import { Box } from '@mui/material';

const HeaderImage = ({ height }) => {
    const imageUrl = require('./layout/background.jpg'); // Đường dẫn ảnh nền
    const logoUrl = require('./layout/logo.png') // Đường dẫn logo

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
                    top: '50%', // Đặt logo vào giữa chiều cao
                    left: '55px', // Đặt logo cách trái một khoảng
                    transform: 'translateY(-50%)', // Đảm bảo logo luôn căn giữa theo chiều dọc
                }}
            >
                <img
                    src={logoUrl}
                    alt="Logo"
                    style={{
                        width: '100px', // Đặt kích thước cho logo
                        height: 'auto',
                    }}
                />
            </Box>
        </Box>
    );
};

export default HeaderImage;
