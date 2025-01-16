import React from 'react';
import {Box, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <Box sx={{
            backgroundColor: '#1E90FF',
            color: '#fff',
            padding: '20px',
            textAlign: 'center',
            marginTop: 'auto',
        }}>
            <Typography variant="body2">
                &copy; 2025 Tâm lý học đường.
            </Typography>
            <Typography variant="body2">
                <Link to="/" style={{textDecoration: 'none', color: '#fff'}}>Trang chủ</Link> |
                <Link to="/contact" style={{textDecoration: 'none', color: '#fff'}}> Liên hệ</Link>
            </Typography>
        </Box>
    );
};

export default Footer;
