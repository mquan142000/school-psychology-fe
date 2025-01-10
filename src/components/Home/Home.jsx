import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, ListItemIcon, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
import Navbar from './Navbar'; // Import Navbar
import Post from "../Post/PostList"; // Import PsychologyPosts
import { School, Group, LibraryBooks } from '@mui/icons-material'; // Các icon bạn muốn sử dụng
import Footer from "./Footer"; // Import Footer

const Home = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(true); // Quản lý trạng thái menu

    const menuItems = [
        { text: 'Tài liệu', icon: <LibraryBooks />, to: '/' }, // Đường dẫn trang chủ
        { text: 'Tổ tư vấn', icon: <Group />, to: '/consulting' },
        { text: 'Cộng đồng', icon: <School />, to: '/community' },
    ];

    // Hàm để toggle menu
    const toggleCategoryVisibility = () => {
        setIsMenuVisible((prevState) => !prevState);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Navbar */}
            <Navbar toggleCategoryVisibility={toggleCategoryVisibility} />

            {/* Sidebar hiển thị/ẩn */}
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                {isMenuVisible && (
                    <Box
                        sx={{
                            width: '200px',
                            borderRight: '1px solid #ccc',
                            padding: 2,
                            position: 'sticky', // Sidebar di chuyển theo khi cuộn trang
                            top: '64px', // Sidebar sẽ bắt đầu cách Navbar một khoảng nhất định (64px là chiều cao của Navbar)
                            height: 'calc(100vh - 64px)', // Chiều cao của Sidebar bằng chiều cao màn hình trừ chiều cao Navbar
                            backgroundColor: '#f4f4f4',
                            zIndex: 100, // Đảm bảo Sidebar luôn trên các thành phần khác
                        }}
                    >
                        <List>
                            {menuItems.map((item, index) => (
                                <ListItem button key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <ListItemIcon sx={{ minWidth: '35px' }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    {/* Dùng Link để điều hướng */}
                                    <Link to={item.to} style={{ textDecoration: 'none' }}>
                                        <ListItemText
                                            primary={item.text}
                                            sx={{ whiteSpace: 'nowrap' }} // Prevent line break
                                        />
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                )}

                {/* Nội dung chính */}
                <Box sx={{ flexGrow: 1, paddingLeft: isMenuVisible ? '220px' : '0px', padding: 2 }}>
                    {/* Hiển thị bài viết tâm lý */}
                    <Post />
                </Box>
            </Box>

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default Home;