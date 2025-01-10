import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    Avatar,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import Navbar from "../Home/Navbar";
import {Group, LibraryBooks, School} from "@mui/icons-material";
import Footer from "../Home/Footer";

// Dữ liệu mẫu các consultant
const consultantData = [
    {
        id: 1,
        name: 'Nguyễn Văn A',
        avatarUrl: 'https://cdn.pixabay.com/photo/2024/12/06/12/23/ai-generated-9248643_640.jpg',
        specialization: 'Tâm lý học',
    },
    {
        id: 2,
        name: 'Trần Thị B',
        avatarUrl: 'https://cdn.pixabay.com/photo/2024/11/04/21/39/kingfisher-9174586_640.jpg',
        specialization: 'Tâm lý học',
    },
    {
        id: 3,
        name: 'Lê Minh C',
        avatarUrl: 'https://via.placeholder.com/150',
        specialization: 'Tư vấn sức khỏe',
    },
    {
        id: 4,
        name: 'Lê Minh C',
        avatarUrl: 'https://via.placeholder.com/150',
        specialization: 'Tư vấn sức khỏe',
    },
    // Thêm các consultant khác ở đây
];

const ConsultantList = () => {
    // State lưu trữ consultant đã được chọn để đặt lịch
    const [selectedConsultant, setSelectedConsultant] = useState(null);
    const [isMenuVisible, setIsMenuVisible] = useState(true); // Điều khiển sidebar hiển thị
    const navigate = useNavigate();

    // Dữ liệu cho menu
    const menuItems = [
        { text: 'Tài liệu', icon: <LibraryBooks />, to: '/' },
        { text: 'Tổ tư vấn', icon: <Group />, to: '/consultant' },  // Giả sử "Tổ tư vấn" dẫn đến '/advisor'
        { text: 'Cộng đồng', icon: <School />, to: '/community' },
    ];

    const handleViewConsultant = (id) => {
        navigate(`/consultant/${id}`);
    };

    // Hàm để đặt lịch
    const handleBookAppointment = (consultant) => {
        setSelectedConsultant(consultant);
        alert(`Bạn đã chọn ${consultant.name} để đặt lịch!`);
    };

    // Hàm để chuyển đổi hiển thị/ẩn menu
    const toggleCategoryVisibility = () => {
        setIsMenuVisible((prevState) => !prevState);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Navbar */}
            <Navbar toggleCategoryVisibility={toggleCategoryVisibility} />

            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                {/* Sidebar hiển thị/ẩn */}
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

                {/* Hiển thị danh sách các consultant */}
                <Box sx={{ flexGrow: 1, padding: 3 }}>
                    {/*<Typography variant="h4" gutterBottom>*/}
                    {/*    Danh sách các Consultant*/}
                    {/*</Typography>*/}

                    <Grid container spacing={3}>
                        {consultantData.map((consultant) => (
                            <Grid item xs={12} sm={6} md={3} key={consultant.id}>
                                <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    {/* Avatar */}
                                    <Avatar
                                        alt={consultant.name}
                                        src={consultant.avatarUrl}
                                        sx={{ width: 100, height: 100, marginTop: 2 }}
                                    />
                                    <CardContent>
                                        {/* Tên và lĩnh vực chuyên môn */}
                                        <Typography variant="h6" align="center" component={Link} to={`/consultant/${consultant.id}`}>{consultant.name}</Typography>
                                        <Typography variant="body2" color="text.secondary" align="center">
                                            {consultant.specialization}
                                        </Typography>
                                    </CardContent>
                                    {/* Nút để đặt lịch */}
                                    <Button
                                        variant="contained"
                                        sx={{
                                            mt: 2, mb: 3,
                                            backgroundColor: '#1E90FF',
                                            textTransform: 'none',
                                            color: '#fff',
                                            fontWeight: 'bold',
                                            fontSize:'14px',
                                            padding: '6px 8px',
                                            minWidth: 'unset',
                                            '&:hover': {
                                                backgroundColor: '#00BFFF',
                                            },
                                        }}
                                        onClick={() => handleBookAppointment(consultant)}
                                    >
                                        Đặt lịch hẹn
                                    </Button>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            <Footer/>
        </Box>
    );
};

export default ConsultantList;
