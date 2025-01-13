import React from 'react';
import {Box, Typography} from '@mui/material';
import {useParams} from 'react-router-dom';
import postsData from '../../api/postDetail.json';

const PostDetail = () => {
    const {id} = useParams(); // Lấy id từ URL
    const post = postsData.find((post) => post.id === parseInt(id)); // Tìm bài viết theo id

    if (!post) {
        return (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <Typography variant="h5" color="error">
                    Bài viết không tồn tại!
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{flexGrow: 1, padding: 2, maxWidth: '800px', margin: 'auto'}}>
            {/* Tiêu đề bài viết */}
            <Typography variant="h3" sx={{marginBottom: 2}}>
                {post.sections[0]?.title || post.title}
            </Typography>

            {/* Các phần nội dung */}
            {post.sections.map((section, index) => (
                <Box key={index} sx={{marginBottom: 3}}>
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
                    <Typography variant="h5" sx={{fontWeight: 'bold', marginTop: 2, marginBottom: 1}}>
                        {section.title}
                    </Typography>
                    <Typography variant="body1" sx={{lineHeight: 1.8}}>
                        {section.content}
                    </Typography>
                </Box>
            ))}

            {/* Thông tin bài viết */}
            <Typography variant="body2" color="text.secondary" sx={{marginTop: 4}}>
                Tác giả: {post.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Ngày đăng: {post.publishedDate}
            </Typography>
        </Box>

    );
};

export default PostDetail;
