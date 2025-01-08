import React from 'react';
import { Box, IconButton, Typography, Badge, Avatar } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingCart } from '@mui/icons-material';

export const Navbar = ({ toggleCategoryVisibility }) => {
    return (
        <Box
            sx={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                backgroundColor: '#e91e63',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 1.5,
                px: { xs: 2, lg: 10 },
            }}
        >
            {/* Icon để toggle sidebar */}
            <div>
                <IconButton onClick={toggleCategoryVisibility} sx={{ color: '#ffffff' }}>
                    <FormatListBulletedIcon />
                </IconButton>
            </div>

            {/* Các thành phần bên phải của Navbar */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, lg: 4 } }}>
                <IconButton>
                    <SearchIcon sx={{ fontSize: '1.8rem', color: '#ffffff' }} />
                </IconButton>

                <Avatar sx={{ bgcolor: '#ffffff', color: '#e91e63', fontWeight: 'bold' }}>
                    A
                </Avatar>

                <IconButton>
                    <Badge color="primary" badgeContent={3}>
                        <ShoppingCart sx={{ fontSize: '1.8rem', color: '#ffffff' }} />
                    </Badge>
                </IconButton>

                <IconButton sx={{ color: '#ffffff' }}>
                    <Typography variant="h6" sx={{ color: '#ffffff' }}>
                        Menu
                    </Typography>
                </IconButton>
            </Box>
        </Box>
    );
};

export default Navbar;
