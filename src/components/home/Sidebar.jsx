import React from 'react';
import { Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { LibraryBooks, Group, School } from '@mui/icons-material';

const Sidebar = ({ isMenuVisible }) => {
    const location = useLocation(); // Lấy đường dẫn hiện tại

    const menuItems = [
        { text: 'Tài liệu', icon: <LibraryBooks />, to: '/' },
        { text: 'Tổ tư vấn', icon: <Group />, to: '/consultant' },
        { text: 'Cộng đồng', icon: <School />, to: '/community' },
    ];

    if (!isMenuVisible) return null;

    return (
        <Box
            sx={{
                width: '200px',
                borderRight: '1px solid #ccc',
                padding: 2,
                position: 'sticky',
                top: '64px',
                height: 'calc(100vh - 64px)',
                backgroundColor: '#f4f4f4',
                zIndex: 100,
            }}
        >
            <List>
                {menuItems.map((item, index) => (
                    <ListItem
                        button
                        key={index}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: location.pathname === item.to ? '#e0f7fa' : 'transparent', // Màu nền sáng khi chọn
                            borderRadius: 1,
                            '&:hover': {
                                backgroundColor: location.pathname === item.to ? '#e0f7fa' : '#e0f7fa', // Màu nền khi hover
                            },
                        }}
                    >
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                            {item.icon}
                        </ListItemIcon>
                        <Link to={item.to} style={{ textDecoration: 'none' }}>
                            <ListItemText
                                primary={item.text}
                                sx={{
                                    whiteSpace: 'nowrap',
                                    color: location.pathname === item.to ? '#00796b' : 'inherit', // Màu chữ sáng khi chọn
                                }}
                            />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Sidebar;
