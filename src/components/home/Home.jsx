import React, { useState } from 'react';
import { Box } from '@mui/material';
import Post from '../post/PostList'; // Import PostList

const Home = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Post />
        </Box>
    );
};

export default Home;
