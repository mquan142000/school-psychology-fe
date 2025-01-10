import './App.css';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { whiteTheme } from "./assets/Theme/WhiteTheme";
import HeaderImage from "./assets/HeaderImage";
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from "./components/Post/PostList";
import PostDetail from "./components/Post/PostDetail";  // Import Router và Route

function App() {
    return (
        <Router> {/* Bao bọc ứng dụng với BrowserRouter */}
            <ThemeProvider theme={whiteTheme}>
                <CssBaseline />

                <HeaderImage height="200px"/>

                <Routes>
                    <Route path="/" element={<Home />} /> {/* Trang chủ */}
                    <Route path="/posts" element={<Post/>}/>
                    <Route path="/post/:id" element={<PostDetail />} /> {/* Trang chi tiết bài viết */}
                </Routes>

            </ThemeProvider>
        </Router>
    );
}

export default App;
