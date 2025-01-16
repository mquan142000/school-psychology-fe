import React, {useState} from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    Avatar,
    Grid,
} from '@mui/material';
import {Link} from 'react-router-dom';

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
        name: 'Phạm Anh D',
        avatarUrl: 'https://via.placeholder.com/150',
        specialization: 'Tư vấn sức khỏe',
    },
];

const SchoolCounselor = () => {
    const [selectedConsultant, setSelectedConsultant] = useState(null);

    const handleBookAppointment = (consultant) => {
        setSelectedConsultant(consultant);
        alert(`Bạn đã chọn ${consultant.name} để đặt lịch!`);
    };

    return (
        <Box sx={{flexGrow: 1, padding: 3}}>
            <Typography variant="h4" align="center" gutterBottom sx={{mb: 4}}>
                Tổ tư vấn
            </Typography>

            <Grid container spacing={3}>
                {consultantData.map((consultant) => (
                    <Grid item xs={12} sm={6} md={3} key={consultant.id}>
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: 2,
                            }}
                        >
                            <Avatar
                                alt={consultant.name}
                                src={consultant.avatarUrl}
                                sx={{width: 100, height: 100, mb: 2}}
                            />
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    align="center"
                                    component={Link}
                                    to={`/consultant/${consultant.id}`}
                                    sx={{
                                        textDecoration: 'none',
                                        color: 'inherit',
                                        '&:hover': {
                                            textDecoration: 'underline',
                                        },
                                    }}
                                >
                                    {consultant.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" align="center">
                                    {consultant.specialization}
                                </Typography>
                            </CardContent>
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 2,
                                    backgroundColor: '#1E90FF',
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    padding: '6px 12px',
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
    );
};

export default SchoolCounselor;
