import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Navbar from '../Home/Navbar'; // Import Navbar
import Sidebar from '../Home/Sidebar'; // Import Sidebar
import postsData from '../../api/postDetail.json';
import Footer from '../Home/Footer'; // Import Footer

const PostDetail = () => {
    const { id } = useParams(); // Lấy id từ URL
    const post = postsData.find((post) => post.id === parseInt(id)); // Tìm bài viết theo id

    const [isMenuVisible, setIsMenuVisible] = useState(true); // Quản lý trạng thái menu

    // Hàm để toggle menu
    const toggleCategoryVisibility = () => {
        setIsMenuVisible((prevState) => !prevState);
    };

    if (!post) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography variant="h5" color="error">
                    Bài viết không tồn tại!
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Navbar */}
            <Navbar toggleCategoryVisibility={toggleCategoryVisibility} />

            {/* Sidebar và nội dung chính */}
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Sidebar isMenuVisible={isMenuVisible} />

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
                            <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 1 }}>
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

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default PostDetail;
