import React, { useState } from 'react';
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { whiteTheme } from "./assets/theme/WhiteTheme";
import HeaderImage from "./assets/HeaderImage";  // Import HeaderImage
import Sidebar from "./components/home/Sidebar";
import Navbar from './components/home/Navbar';
import Footer from './components/home/Footer';
import CustomerRoute from '../src/routers/CustomerRoute';  // Import CustomerRoute từ file tương ứng
import LoginForm from './components/auth/LoginForm';

function App() {
    const [isMenuVisible, setIsMenuVisible] = useState(true);

    const toggleSidebar = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <Router>
            <ThemeProvider theme={whiteTheme}>
                <CssBaseline />
                <HeaderImage />  {/* Đưa HeaderImage ra ngoài các route để nó hiển thị trên tất cả trang */}
                <Routes>
                    {/* Đường dẫn LoginForm không chứa bố cục chính */}
                    <Route path="/signin" element={<LoginForm />} />

                    {/* Các đường dẫn khác sẽ dùng CustomerRoute */}
                    <Route path="*" element={
                        <>
                            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                                <Navbar onToggleSidebar={toggleSidebar} />
                                <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
                                    <Sidebar isMenuVisible={isMenuVisible} />
                                    <Box
                                        sx={{
                                            flexGrow: 1,
                                            overflowY: 'auto',
                                            padding: 2,
                                            minHeight: 'calc(100vh - 64px)',
                                            '::-webkit-scrollbar': {
                                                display: 'none',
                                            },
                                        }}
                                    >
                                        <CustomerRoute />  {/* Sử dụng CustomerRoute trực tiếp */}
                                    </Box>
                                </Box>
                                <Footer />
                            </Box>
                        </>
                    } />
                </Routes>
            </ThemeProvider>
        </Router>
    );
}

export default App;
