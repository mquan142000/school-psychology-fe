import './App.css';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { whiteTheme } from "./assets/Theme/WhiteTheme";
import HeaderImage from "./assets/HeaderImage";
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from "./components/Post/PostList";
import PostDetail from "./components/Post/PostDetail";
import SchoolCounselor from "./components/Consultant/SchoolCounselor";
import SchoolCounselorDetail from "./components/Consultant/SchoolCounselorDetail";
import Sidebar from "./components/Home/Sidebar"; // Sidebar
import Navbar from './components/Home/Navbar'; // Navbar
import Footer from './components/Home/Footer'; // Footer
import Home from './components/Home/Home'; // Home content

function App() {
    return (
        <Router>
            <ThemeProvider theme={whiteTheme}>
                <CssBaseline />
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
