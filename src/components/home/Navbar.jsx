import React, { useState } from 'react';
import { Box, IconButton, Badge, TextField, Menu, MenuItem, ListItemIcon } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchIcon from '@mui/icons-material/Search';
import { AccountCircle, Info, EventNote, Logout } from '@mui/icons-material';

export const Navbar = ({ toggleCategoryVisibility, cartItemsCount = 0, onSearch }) => {
    const [searchText, setSearchText] = useState('');
    const [anchorEl, setAnchorEl] = useState(null); // State để điều khiển Menu

    // Hàm xử lý khi giá trị ô input thay đổi
    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
        if (onSearch) {
            onSearch(event.target.value); // Gọi hàm tìm kiếm từ props
        }
    };

    // Mở Menu
    const handleAccountClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Đóng Menu
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            sx={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                backgroundColor: '#1E90FF',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 1.5,
                px: { xs: 2, lg: 10 },
            }}
        >
            {/* Icon để toggle sidebar */}
            <IconButton onClick={toggleCategoryVisibility} sx={{ color: '#ffffff' }} aria-label="Toggle categories">
                <FormatListBulletedIcon />
            </IconButton>

            {/* Các thành phần bên phải của Navbar */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, lg: 4 } }}>
                {/* Box chứa icon và ô input */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#ffffff',
                        borderRadius: '4px',
                        px: 1,
                    }}
                >
                    <TextField
                        variant="standard"
                        placeholder="Tra cứu..."
                        value={searchText}
                        onChange={handleSearchChange}
                        InputProps={{
                            disableUnderline: true, // Bỏ gạch chân
                        }}
                        sx={{
                            fontSize: '0.9rem',
                            flex: 1,
                            padding: '0 8px',
                        }}
                    />
                    <IconButton sx={{ p: 0.5 }} aria-label="Search">
                        <SearchIcon sx={{ fontSize: '1.8rem', color: '#1E90FF' }} />
                    </IconButton>
                </Box>

                {/* AccountCircle Icon */}
                <IconButton
                    aria-label="Account"
                    onClick={handleAccountClick}
                    aria-controls="account-menu"
                    aria-haspopup="true"
                >
                    <AccountCircle sx={{ fontSize: '3rem', color: '#ffffff' }} />
                </IconButton>

                {/* Dropdown Menu */}
                <Menu
                    id="account-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>
                        <ListItemIcon>
                            <Info fontSize="small" />
                        </ListItemIcon>
                        Thông tin tài khoản
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <ListItemIcon>
                            <EventNote fontSize="small" />
                        </ListItemIcon>
                        Nhật ký tư vấn
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Đăng xuất
                    </MenuItem>
                </Menu>
            </Box>
        </Box>
    );
};

export default Navbar;