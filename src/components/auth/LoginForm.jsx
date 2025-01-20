import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Sử dụng để điều hướng

    const handleSubmit = (e) => {
        e.preventDefault();
        // Kiểm tra thông tin đăng nhập
        if (email === "user@example.com" && password === "password") {
            // Nếu thông tin đúng, điều hướng đến trang Home
            navigate("/");
        } else {
            alert("Invalid email or password!");
        }
    };

    return (
        <Box sx={{ maxWidth: 400, margin: '50px auto', padding: 2, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Sign In
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Sign In
                </Button>
            </form>
        </Box>
    );
};

export default LoginForm;
