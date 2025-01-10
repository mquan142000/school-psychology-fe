import './App.css';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { whiteTheme } from "./assets/Theme/WhiteTheme";
import HeaderImage from "./assets/HeaderImage";
import Home from '../src/Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from "./components/Post/PostList";
import PostDetail from "./components/Post/PostDetail";
import SchoolCounselor from "./components/Consultant/SchoolCounselor";
import SchoolCounselorDetail from "./components/Consultant/SchoolCounselorDetail";  // Import Router và Route


function App() {
    return (
        <Router> {/* Bao bọc ứng dụng với BrowserRouter */}
            <ThemeProvider theme={whiteTheme}>
                <CssBaseline />

                <HeaderImage height="200px"/>

                <Routes>
                    <Route path="/" element={<Home />} /> {/* Trang chủ */}
                    <Route path="/consultant" element={<SchoolCounselor/>}/>
                    <Route path="/consultant/:id" element={<SchoolCounselorDetail/>}/>
                    <Route path="/posts" element={<Post/>}/>
                    <Route path="/post/:id" element={<PostDetail />} /> {/* Trang chi tiết bài viết */}
                </Routes>

            </ThemeProvider>
        </Router>
    );
}

export default App;
