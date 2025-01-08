import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import Navbar from '../Navbar/Navbar'; // Import Navbar để sử dụng

const Home = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(true); // Quản lý trạng thái menu

    const menuItems = [
        'Trang chủ',
        'Sản phẩm',
        'Dịch vụ',
        'Giới thiệu',
        'Liên hệ',
    ];

    // Hàm để toggle menu
    const toggleCategoryVisibility = () => {
        setIsMenuVisible(prevState => !prevState);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Navbar ở đây */}
            <Navbar toggleCategoryVisibility={toggleCategoryVisibility} />

            {/* Sidebar hiển thị/ẩn */}
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                {isMenuVisible && (
                    <Box sx={{ width: '200px', borderRight: '1px solid #ccc', padding: 2 }}>
                        <List>
                            {menuItems.map((text, index) => (
                                <ListItem button key={index}>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                )}

                {/* Nội dung chính */}
                <Box sx={{ flexGrow: 1, padding: 2 }}>
                    <Typography variant="h4" component="h1">
                        Chào mừng đến với trang chủ của chúng tôi!
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Đây là nơi bạn có thể tìm thấy các sản phẩm và dịch vụ mà chúng tôi cung cấp.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
