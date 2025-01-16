import React from 'react';
import {Box, Typography, Button, Avatar, Divider, Stack} from '@mui/material';
import {useParams} from 'react-router-dom';

const consultantData = [
    {
        "id": 1,
        "name": "Nguyễn Văn A",
        "specialization": "Tư vấn tâm lý",
        "bio": "Nguyễn Văn A là chuyên gia tâm lý học có hơn 10 năm kinh nghiệm.",
        "email": "vana@example.com",
        "phone": "0123456789",
        "image": "https://cdn.pixabay.com/photo/2024/12/06/12/23/ai-generated-9248643_640.jpg",
        "experience": "10 năm",
        "qualifications": "Thạc sĩ tâm lý học, Giảng viên Đại học",
        "workingHours": "Từ 8:00 đến 18:00"
    },
    {
        "id": 2,
        "name": "Trần Thị B",
        "specialization": "Tư vấn giáo dục",
        "bio": "Trần Thị B chuyên tư vấn giáo dục và định hướng nghề nghiệp.",
        "email": "thib@example.com",
        "phone": "0987654321",
        "image": "https://cdn.pixabay.com/photo/2024/11/04/21/39/kingfisher-9174586_640.jpg",
        "experience": "5 năm",
        "qualifications": "Cử nhân Giáo dục, Chuyên gia tư vấn hướng nghiệp",
        "workingHours": "Từ 9:00 đến 17:00"
    }
];

const SchoolCounselorDetail = () => {
    const {id} = useParams();
    const consultant = consultantData.find((consultant) => consultant.id === parseInt(id));

    if (!consultant) {
        return <Typography variant="h6" color="error" textAlign="center" mt={4}>
            Tư vấn viên không tồn tại!
        </Typography>;
    }

    return (
        <Box
            sx={{
                maxWidth: '800px',
                margin: 'auto',
                mt: 2,
                p: 3,
                border: '1px solid #ddd',
                borderRadius: 2,
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                backgroundColor: '#fff',
            }}
        >
            <Box sx={{textAlign: 'center', mb: 3}}>
                {consultant.image && (
                    <Avatar
                        src={consultant.image}
                        alt={consultant.name}
                        sx={{
                            width: 120,
                            height: 120,
                            margin: 'auto',
                            mb: 1,
                        }}
                    />
                )}
                <Typography variant="h5" fontWeight="bold" sx={{mt: 1}}>
                    {consultant.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {consultant.specialization}
                </Typography>
            </Box>

            <Divider sx={{mb: 2}}/>

            <Stack spacing={2}>
                <Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Tiểu sử
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {consultant.bio}
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Kinh nghiệm
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {consultant.experience}
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Chứng chỉ
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {consultant.qualifications}
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Giờ làm việc
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {consultant.workingHours}
                    </Typography>
                </Box>
            </Stack>

            <Divider sx={{my: 2}}/>

            <Box>
                <Typography variant="body2" color="text.secondary">
                    Email: {consultant.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Số điện thoại: {consultant.phone}
                </Typography>
            </Box>

            <Box sx={{textAlign: 'center', mt: 3}}>
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        textTransform: 'none',
                        backgroundColor: '#1E90FF',
                        '&:hover': {
                            backgroundColor: '#007FFF',
                        },
                    }}
                >
                    Đặt lịch hẹn
                </Button>
            </Box>
        </Box>
    );
};

export default SchoolCounselorDetail;
