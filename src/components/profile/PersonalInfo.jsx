import React, { useState } from "react";
import { Typography, Grid, TextField, Box, Button } from "@mui/material";

const PersonalInfo = () => {
    const [personalInfo, setPersonalInfo] = useState({
        fullName: "Nguyễn Văn A",
        gender: "Nam",
        birthdate: "2000-01-01",
        school: "Trường Đại học XYZ",
        class: "Công nghệ thông tin K15",
        phone: "0123456789",
        address: "123 Đường ABC, TP. Hồ Chí Minh",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [tempInfo, setTempInfo] = useState({ ...personalInfo });

    const handleFieldChange = (field, value) => {
        setTempInfo((prev) => ({ ...prev, [field]: value }));
    };

    const toggleEditing = () => {
        if (isEditing) {
            setPersonalInfo(tempInfo);
        } else {
            setTempInfo(personalInfo);
        }
        setIsEditing((prev) => !prev);
    };

    const handleCancel = () => {
        setTempInfo(personalInfo);
        setIsEditing(false);
    };

    return (
        <Box sx={{ p: 3, backgroundColor: "#fff", borderRadius: 2, boxShadow: 2 }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 3,
                }}
            >
                <Typography variant="h5" gutterBottom>
                    Thông tin cá nhân
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                    {!isEditing && (
                        <Typography
                            onClick={toggleEditing}
                            sx={{
                                cursor: "pointer",
                                color: "#00BFFF",
                                textDecoration: "underline",
                                "&:hover": {
                                    color: "#1E90FF",
                                },
                            }}
                        >
                            Thay đổi
                        </Typography>
                    )}
                    {isEditing && (
                        <>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: "#1E90FF",
                                    borderColor: "#1E90FF",
                                    textTransform: "none",
                                    "&:hover": {
                                        color: "#fff",
                                        backgroundColor: "#1E90FF",
                                    },
                                }}
                                onClick={toggleEditing}
                            >
                                Cập nhật
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: "#FF0000",
                                    borderColor: "#FF0000",
                                    textTransform: "none",
                                    "&:hover": {
                                        backgroundColor: "#DC143C",
                                        color: "#fff",
                                    },
                                }}
                                onClick={handleCancel}
                            >
                                Hủy
                            </Button>
                        </>
                    )}
                </Box>
            </Box>
            <Grid container spacing={3}>
                {Object.entries(personalInfo).map(([key, value]) => (
                    <Grid item xs={12} sm={6} key={key}>
                        <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
                            {key === "fullName"
                                ? "Họ và tên"
                                : key === "gender"
                                    ? "Giới tính"
                                    : key === "birthdate"
                                        ? "Ngày sinh"
                                        : key === "school"
                                            ? "Trường"
                                            : key === "class"
                                                ? "Lớp"
                                                : key === "phone"
                                                    ? "Số điện thoại"
                                                    : "Địa chỉ"}
                        </Typography>
                        {isEditing ? (
                            <TextField
                                fullWidth
                                size="small"
                                type={key === "birthdate" ? "date" : "text"}
                                value={tempInfo[key]}
                                onChange={(e) => handleFieldChange(key, e.target.value)}
                            />
                        ) : (
                            <Typography variant="body2">{value}</Typography>
                        )}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PersonalInfo;
