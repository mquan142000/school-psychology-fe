import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    const [isBoxVisible, setIsBoxVisible] = useState(true); // State để điều khiển việc hiển thị Box

    // Hàm toggle ẩn/hiện Box
    const toggleBoxVisibility = () => {
        setIsBoxVisible(!isBoxVisible); // Đảo ngược trạng thái hiển thị
    };

    return (
        <Box sx={{ padding: 2 }}>
            {/* Truyền hàm toggle xuống Navbar */}
            <Navbar toggleBoxVisibility={toggleBoxVisibility} />

            {/* Hiển thị Box chỉ khi isBoxVisible là true */}
            {isBoxVisible && (
                <Box>
                    <Typography variant="h4">Danh Mục</Typography>
                    <Typography>Thông tin về các danh mục sản phẩm sẽ được hiển thị ở đây...</Typography>
                </Box>
            )}

            {/* Nội dung khác */}
            <Box>
                <Typography variant="h4" component="h1">
                    Chào mừng đến với trang chủ!
                </Typography>
                <Typography variant="body1" paragraph>
                    Đây là nơi bạn có thể tìm thấy các sản phẩm và dịch vụ mà chúng tôi cung cấp.
                </Typography>
            </Box>
        </Box>
    );
};

export default Home;
