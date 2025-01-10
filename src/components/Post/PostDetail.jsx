import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Home/Navbar'; // Import Navbar từ Home
import postsData from '../../api/postDetail.json';
import { Group, LibraryBooks, School } from '@mui/icons-material'; // Import biểu tượng
import Footer from "../Home/Footer";

const PostDetail = () => {
    const { id } = useParams(); // Lấy id từ URL
    const post = postsData.find((post) => post.id === parseInt(id)); // Tìm bài viết theo id

    const [isMenuVisible, setIsMenuVisible] = useState(true); // Quản lý trạng thái menu

    const menuItems = [
        { text: 'Tài liệu', icon: <LibraryBooks />, to: '/' },
        { text: 'Tổ tư vấn', icon: <Group />, to: '/advisor' },  // Giả sử "Tổ tư vấn" dẫn đến '/advisor'
        { text: 'Cộng đồng', icon: <School />, to: '/community' },  // Giả sử "Cộng đồng" dẫn đến '/community'
    ];

    // Hàm để toggle menu
    const toggleCategoryVisibility = () => {
        setIsMenuVisible((prevState) => !prevState);
    };

    if (!post) {
        return <Typography>Bài viết không tồn tại!</Typography>;
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Navbar */}
            <Navbar toggleCategoryVisibility={toggleCategoryVisibility} />

            {/* Sidebar hiển thị/ẩn */}
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                {isMenuVisible && (
                    <Box sx={{ width: '200px', borderRight: '1px solid #ccc', padding: 2 }}>
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
                <Box sx={{ flexGrow: 1, padding: 2, maxWidth: '800px', margin: 'auto' }}>
                    {/* Tiêu đề bài viết */}
                    <Typography variant="h3" sx={{ marginBottom: 2 }}>
                        {post.sections[0]?.title || post.title}
                    </Typography>

                    {/* Các phần nội dung */}
                    {post.sections.map((section, index) => (
                        <Box key={index} sx={{ marginBottom: 3 }}>
                            {section.image && (
                                <Box
                                    component="img"
                                    src={section.image}
                                    alt={section.title}
                                    sx={{
                                        width: '100%',
                                        maxHeight: '400px',
                                        objectFit: 'cover',
                                        marginBottom: 2,
                                        borderRadius: '8px',
                                    }}
                                />
                            )}
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 1 }}
                            >
                                {section.title}
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                                {section.content}
                            </Typography>
                        </Box>
                    ))}

                    {/* Thông tin bài viết */}
                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: 4 }}>
                        Tác giả: {post.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Ngày đăng: {post.publishedDate}
                    </Typography>
                </Box>
            </Box>
            <Footer/>
        </Box>
    );
};

export default PostDetail;
