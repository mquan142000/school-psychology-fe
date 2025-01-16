import React, {useState} from "react";
import {Typography, Grid, TextField, Box, Button} from "@mui/material";

const AccountInfo = () => {
    const [accountInfo, setAccountInfo] = useState({
        username: "nguyenvana",
        email: "nguyenvana@example.com",
        password: "********",
    });

    const [editingField, setEditingField] = useState(null);
    const [tempEmail, setTempEmail] = useState(accountInfo.email);
    const [passwordForm, setPasswordForm] = useState({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });

    const handleUpdateField = (field) => {
        if (field === "password") {
            setAccountInfo((prev) => ({
                ...prev,
                [field]: passwordForm.newPassword,
            }));
        } else if (field === "email") {
            setAccountInfo((prev) => ({
                ...prev,
                email: tempEmail,
            }));
        }
        setEditingField(null);
    };

    const handlePasswordChange = (key, value) => {
        setPasswordForm((prev) => ({...prev, [key]: value}));
    };

    return (
        <Box sx={{p: 3, bgcolor: "#fff", borderRadius: 2, boxShadow: 2, mb: 4}}>
            <Typography variant="h5" gutterBottom mb={3}>
                Thông tin tài khoản
            </Typography>
            <Grid container spacing={3}>
                {["username", "email", "password"].map((field) => (
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        key={field}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                            mb: 2,
                        }}
                    >
                        <Typography variant="body1" sx={{fontWeight: "bold", mb: 1}}>
                            {field === "username"
                                ? "Tên tài khoản"
                                : field === "email"
                                    ? "Email"
                                    : "Mật khẩu"}
                        </Typography>
                        {field === "username" ? (
                            <Typography variant="body2">{accountInfo.username}</Typography>
                        ) : editingField === field ? (
                            field === "password" ? (
                                <Box>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        type="password"
                                        label="Mật khẩu hiện tại"
                                        sx={{mb: 2}}
                                        value={passwordForm.currentPassword}
                                        onChange={(e) =>
                                            handlePasswordChange("currentPassword", e.target.value)
                                        }
                                    />
                                    <TextField
                                        fullWidth
                                        size="small"
                                        type="password"
                                        label="Mật khẩu mới"
                                        sx={{mb: 2}}
                                        value={passwordForm.newPassword}
                                        onChange={(e) =>
                                            handlePasswordChange("newPassword", e.target.value)
                                        }
                                    />
                                    <TextField
                                        fullWidth
                                        size="small"
                                        type="password"
                                        label="Xác nhận mật khẩu mới"
                                        sx={{mb: 2}}
                                        value={passwordForm.confirmNewPassword}
                                        onChange={(e) =>
                                            handlePasswordChange("confirmNewPassword", e.target.value)
                                        }
                                    />
                                    <Box sx={{display: "flex", gap: 1}}>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                borderColor: "#1E90FF",
                                                color: "#1E90FF",
                                                textTransform: "none",
                                                "&:hover": {
                                                    color: "#fff",
                                                    backgroundColor: "#1E90FF",
                                                },
                                            }}
                                            onClick={() => handleUpdateField("password")}
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
                                                    color: "#fff",
                                                    backgroundColor: "#DC143C",
                                                },
                                            }}
                                            onClick={() => setEditingField(null)}
                                        >
                                            Hủy
                                        </Button>
                                    </Box>
                                </Box>
                            ) : (
                                <Box>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        type="text"
                                        label="Email mới"
                                        sx={{mb: 2}}
                                        value={tempEmail}
                                        onChange={(e) => setTempEmail(e.target.value)}
                                    />
                                    <Box sx={{display: "flex", gap: 1}}>
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
                                            onClick={() => handleUpdateField("email")}
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
                                                    color: "#fff",
                                                    backgroundColor: "#DC143C",
                                                },
                                            }}
                                            onClick={() => setEditingField(null)}
                                        >
                                            Hủy
                                        </Button>
                                    </Box>
                                </Box>
                            )
                        ) : (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Typography variant="body2">
                                    {field === "password" ? "********" : accountInfo[field]}
                                </Typography>
                                <Typography
                                    onClick={() => setEditingField(field)}
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
                            </Box>
                        )}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AccountInfo;
