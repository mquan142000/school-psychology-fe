import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import postsData from '../../api/postList.json'; // Import file JSON chứa các bài viết

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate(); // Để điều hướng khi nhấn vào tên bài viết

    useEffect(() => {
        // Giả sử bạn đang lấy dữ liệu từ file JSON (hoặc API)
        setPosts(postsData); // Đặt dữ liệu bài viết vào state
    }, []);

    const handleViewPost = (id) => {
        // Chuyển hướng tới trang chi tiết bài viết
        navigate(`/post/${id}`);
    };

    return (
        <Box sx={{ padding: 2 }}>
            {/* Danh sách các bài viết */}
            <List>
                {posts.map((post) => (
                    <ListItem key={post.id} sx={{ marginBottom: 4 }}>
                        <Card sx={{ display: 'flex', width: '100%' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 150, height: 150 }}
                                image={post.image}
                                alt={post.title}
                            />
                            <CardContent sx={{ flex: 1 }}>
                                {/* Chuyển title thành liên kết để nhấn vào xem chi tiết */}
                                <Typography
                                    variant="h5"
                                    sx={{
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => handleViewPost(post.id)} // Điều hướng tới chi tiết bài viết
                                >
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                                    {post.content.substring(0, 100)}...
                                </Typography>
                            </CardContent>
                        </Card>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default PostsList;
