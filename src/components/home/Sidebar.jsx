import React from 'react';
import { Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { NavLink } from 'react-router-dom'; // Sử dụng NavLink thay vì Link
import { LibraryBooks, Group, School } from '@mui/icons-material';

const Sidebar = ({ isMenuVisible }) => {
    const menuItems = [
        { text: 'Tài liệu', icon: <LibraryBooks />, to: '/' },
        { text: 'Tổ tư vấn', icon: <Group />, to: '/consultant' },
        { text: 'Cộng đồng', icon: <School />, to: '/community' },
    ];

    if (!isMenuVisible) return null; // Nếu isMenuVisible là false, không hiển thị Sidebar

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
                            justifyContent: 'center', // Căn giữa nội dung
                            height: '60px', // Đặt chiều cao cố định cho các ô
                            borderRadius: 1,
                        }}
                    >
                        <NavLink
                            to={item.to}
                            style={({ isActive }) => ({
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center', // Căn giữa cả icon và text
                                padding: '8px 20px', // Mở rộng padding để ô lớn hơn
                                borderRadius: '8px', // Bo tròn góc cho cả ô
                                backgroundColor: isActive ? '#00BFFF' : 'transparent', // Màu nền xanh nước biển khi chọn
                                color: isActive ? '#ffffff' : '#696969', // Chữ trắng khi chọn, chữ nhạt khi không chọn
                            })}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                                <ListItemIcon
                                    sx={{
                                        minWidth: '35px',
                                        color: 'inherit', // Để màu icon kế thừa từ color của NavLink
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    sx={{
                                        whiteSpace: 'nowrap',
                                        color: 'inherit', // Để không bị ghi đè
                                        flexGrow: 1, // Tạo không gian giữa icon và text
                                        textAlign: 'center', // Căn giữa chữ
                                    }}
                                />
                            </Box>
                        </NavLink>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Sidebar;
