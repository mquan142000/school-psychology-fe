import React, { useState } from 'react';
import { Avatar, Badge, Box, IconButton, Menu, MenuItem, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingCart } from '@mui/icons-material';

export const Navbar = ({ toggleCategoryVisibility }) => { // Nhận hàm toggle từ Home
    // State quản lý menu dropdown và Drawer (sidebar)
    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Mở menu dropdown
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Đóng menu dropdown
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Mở/Đóng Drawer (sidebar)
    const toggleDrawer = (open) => {
        setDrawerOpen(open);
    };

    return (
        <>
            {/* Navbar */}
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
                    px: { xs: 2, lg: 10 }, // Padding cho màn hình nhỏ và lớn
                }}
            >
                {/* Dropdown danh mục */}
                <div>
                    <IconButton onClick={() => toggleCategoryVisibility()} sx={{ color: '#ffffff' }}>
                        <FormatListBulletedIcon/>
                    </IconButton>

                    {/* Menu Dropdown */}
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        sx={{ mt: 2 }} // Thêm khoảng cách dưới menu
                    >
                        <MenuItem onClick={handleClose}>Danh Mục 1</MenuItem>
                        <MenuItem onClick={handleClose}>Danh Mục 2</MenuItem>
                        <MenuItem onClick={handleClose}>Danh Mục 3</MenuItem>
                    </Menu>
                </div>

                {/* Các thành phần bên phải */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, lg: 4 } }}>
                    {/* Nút tìm kiếm */}
                    <IconButton>
                        <SearchIcon sx={{ fontSize: '1.8rem', color: '#ffffff' }} />
                    </IconButton>

                    {/* Avatar */}
                    <Avatar sx={{ bgcolor: '#ffffff', color: '#e91e63', fontWeight: 'bold' }}>
                        A
                    </Avatar>

                    {/* Giỏ hàng */}
                    <IconButton>
                        <Badge color="primary" badgeContent={3}>
                            <ShoppingCart sx={{ fontSize: '1.8rem', color: '#ffffff' }} />
                        </Badge>
                    </IconButton>

                    {/* Nút để mở Drawer */}
                    <IconButton onClick={() => toggleDrawer(true)} sx={{ color: '#ffffff' }}>
                        <Typography variant="h6" sx={{ color: '#ffffff' }}>
                            Menu
                        </Typography>
                    </IconButton>
                </Box>
            </Box>

            {/* Drawer (Sidebar) nằm bên trái */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => toggleDrawer(false)} // Đóng Drawer khi click ra ngoài
            >
                <Box sx={{ width: 250 }} role="presentation">
                    <List>
                        <ListItem button>
                            <ListItemText primary="Danh Mục 1" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Danh Mục 2" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Danh Mục 3" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;
