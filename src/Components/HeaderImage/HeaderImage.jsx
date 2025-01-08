// src/components/HeaderImage.jsx
import React from 'react';
import { Box } from '@mui/material';

const HeaderImage = ({ imageUrl, height = '200px', logoUrl }) => {
    return (
        <Box
            sx={{
                height: height,
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative', // Để định vị logo
                display: 'flex',
                justifyContent: 'space-between', // Đẩy logo sang bên phải
                alignItems: 'center', // Căn giữa logo theo chiều dọc
                px: 2, // Padding ngang để tạo khoảng cách
            }}
        >
            {/* Logo ở bên phải */}
            {logoUrl && (
                <Box
                    component="img"
                    src={logoUrl}
                    alt="Logo"
                    sx={{
                        height: '80px', // Chiều cao logo to hơn
                        width: 'auto', // Giữ tỷ lệ ảnh
                        cursor: 'pointer', // Thêm con trỏ để tạo cảm giác tương tác
                    }}
                />
            )}
        </Box>
    );
};

export default HeaderImage;
