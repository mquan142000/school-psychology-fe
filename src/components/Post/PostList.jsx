import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import postsData from '../../api/postList.json'; // Import file JSON chứa các bài viết

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate(); // Để điều hướng khi nhấn vào nút "Xem chi tiết"

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
                                <Typography variant="h5">{post.title}</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                                    {post.content.substring(0, 100)}...
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#1E90FF', // Màu nền
                                        color: '#fff', // Màu chữ
                                        fontSize: '0.8rem', // Kích thước chữ nhỏ hơn
                                        padding: '6px 8px', // Padding nhỏ hơn
                                        minWidth: 'unset', // Gỡ bỏ chiều rộng tối thiểu mặc định
                                        '&:hover': {
                                            backgroundColor: '#00BFFF', // Màu nền khi hover
                                        },
                                    }}
                                    onClick={() => handleViewPost(post.id)} // Điều hướng tới chi tiết bài viết
                                >
                                    Xem chi tiết
                                </Button>


                            </CardContent>
                        </Card>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default PostsList;
