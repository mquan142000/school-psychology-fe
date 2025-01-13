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

    if (!isMenuVisible) return null; // Nếu isMenuVisible là false, không render Sidebar

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
                {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.to; // Kiểm tra mục đang được chọn
                    return (
                        <Link
                            key={index}
                            to={item.to}
                            style={{
                                textDecoration: 'none',
                                color: 'inherit', // Giữ nguyên màu chữ
                            }}
                        >
                            <ListItem
                                button
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center', // Căn giữa icon và chữ theo chiều dọc
                                    padding: '12px 16px',
                                    backgroundColor: isActive ? '#1E90FF' : 'transparent', // Màu nền xanh nước biển khi chọn
                                    borderRadius: '8px', // Bo góc
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: '35px', // Giữ khoảng cách nhất quán giữa icon và text
                                        display: 'flex',
                                        justifyContent: 'center',
                                        color: isActive ? '#fff' : '#696969', // Đổi màu icon thành trắng khi chọn
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    sx={{
                                        marginLeft: '10px', // Khoảng cách giữa icon và chữ
                                        textAlign: 'left', // Căn lề chữ bên trái
                                        fontWeight: isActive ? 'bold' : 'normal', // Tô đậm chữ nếu mục được chọn
                                        color: isActive ? '#fff' : '#696969', // Đổi màu chữ thành trắng khi chọn
                                    }}
                                />
                            </ListItem>
                        </Link>
                    );
                })}
            </List>
        </Box>
    );
};

export default Sidebar;
