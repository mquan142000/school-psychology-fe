import './App.css';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { whiteTheme } from "./assets/theme/WhiteTheme";
import HeaderImage from "./assets/HeaderImage";
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from "./components/post/PostList";
import PostDetail from "./components/post/PostDetail";
import SchoolCounselor from "./components/consultant/SchoolCounselor";
import SchoolCounselorDetail from "./components/consultant/SchoolCounselorDetail";
import Sidebar from "./components/home/Sidebar"; // Sidebar
import Navbar from './components/home/Navbar'; // Navbar
import Footer from './components/home/Footer'; // Footer
import Home from './components/home/Home'; // home content

function App() {
    return (
        <Router>
            <ThemeProvider theme={whiteTheme}>
                <CssBaseline />
                <HeaderImage/>

                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                    {/* Navbar */}
                    <Navbar />

                    {/* Sidebar và Nội dung chính */}
                    <Box sx={{ display: 'flex', flexGrow: 1 }}>
                        {/* Sidebar */}
                        <Sidebar isMenuVisible={true} />

                        {/* Nội dung chính */}
                        <Box sx={{ flexGrow: 1, paddingLeft: '220px', padding: 2 }}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/consultant" element={<SchoolCounselor />} />
                                <Route path="/consultant/:id" element={<SchoolCounselorDetail />} />
                                <Route path="/posts" element={<Post />} />
                                <Route path="/post/:id" element={<PostDetail />} />
                            </Routes>
                        </Box>
                    </Box>

                    {/* Footer */}
                    <Footer />
                </Box>
            </ThemeProvider>
        </Router>
    );
}

export default App;
