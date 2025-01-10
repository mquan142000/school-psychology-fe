import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import counselorDetail from '../../api/consultant/counselorDetail.json';
import { Group, LibraryBooks, School } from '@mui/icons-material';
import Footer from "../Home/Footer";

const ConsultantDetail = () => {
    const { id } = useParams();
    const consultant = counselorDetail.find((consultant) => consultant.id === parseInt(id));

    const [isMenuVisible, setIsMenuVisible] = useState(true);

    const menuItems = [
        { text: 'Tài liệu', icon: <LibraryBooks />, to: '/' },
        { text: 'Tổ tư vấn', icon: <Group />, to: '/consultant' },
        { text: 'Cộng đồng', icon: <School />, to: '/community' },
    ];

    const toggleCategoryVisibility = () => {
        setIsMenuVisible((prevState) => !prevState);
    };

    if (!consultant) {
        return <Typography>Tư vấn viên không tồn tại!</Typography>;
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar toggleCategoryVisibility={toggleCategoryVisibility} />

            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                {isMenuVisible && (
                    <Box sx={{
                        width: '250px',
                        borderRight: '1px solid #ccc',
                        padding: 2,
                        backgroundColor: '#f4f4f4',
                    }}>
                        <List>
                            {menuItems.map((item, index) => (
                                <ListItem button key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <ListItemIcon sx={{ minWidth: '35px' }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <Link to={item.to} style={{ textDecoration: 'none' }}>
                                        <ListItemText
                                            primary={item.text}
                                            sx={{ whiteSpace: 'nowrap' }}
                                        />
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                )}

                <Box sx={{
                    flexGrow: 1,
                    padding: 2,
                    display: 'flex',
                    gap: 4,
                    maxWidth: '1200px',
                    margin: 'auto',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'flex-start',
                    marginTop: 2,
                }}>
                    <Box sx={{
                        flex: 1,
                        maxWidth: '300px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                    }}>
                        {consultant.image && (
                            <Box
                                component="img"
                                src={consultant.image}
                                alt={consultant.name}
                                sx={{
                                    width: '200px',
                                    height: '200px',
                                    borderRadius: '50%',
                                    marginBottom: 2,
                                    objectFit: 'cover',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                }}
                            />
                        )}

                        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 1, textAlign: 'center' }}>
                            Lĩnh vực chuyên môn
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8, marginBottom: 2, textAlign: 'center' }}>
                            {consultant.specialization}
                        </Typography>

                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: '#1E90FF',
                                textTransform: 'none',
                                padding: 1.5,
                                fontWeight: 'bold',
                                fontSize: '14px',
                                width: 'auto',
                                '&:hover': {
                                    backgroundColor: '#00BFFF',
                                },
                            }}
                        >
                            Đặt lịch hẹn
                        </Button>
                    </Box>

                    <Box sx={{ flex: 2 }}>
                        <Typography variant="h3" sx={{ marginBottom: 2 }}>
                            {consultant.name}
                        </Typography>

                        <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 1 }}>
                            Tiểu sử
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                            {consultant.bio}
                        </Typography>

                        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 1 }}>
                            Kinh nghiệm
                        </Typography>
                        <Typography variant="body1">
                            {consultant.experience}
                        </Typography>

                        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 1 }}>
                            Chứng chỉ
                        </Typography>
                        <Typography variant="body1">
                            {consultant.qualifications}
                        </Typography>

                        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 1 }}>
                            Giờ làm việc
                        </Typography>
                        <Typography variant="body1">
                            {consultant.workingHours}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 4 }}>
                            Email: {consultant.email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Số điện thoại: {consultant.phone}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Footer />
        </Box>
    );
};

export default ConsultantDetail;
