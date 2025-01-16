import './App.css';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {whiteTheme} from "./assets/theme/WhiteTheme";
import HeaderImage from "./assets/HeaderImage";
import {Box} from '@mui/material';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DocumentDetail from "./components/document/DocumentDetail";
import SchoolCounselor from "./components/consultant/SchoolCounselor";
import SchoolCounselorDetail from "./components/consultant/SchoolCounselorDetail";
import Sidebar from "./components/home/Sidebar";
import Navbar from './components/home/Navbar';
import Footer from './components/home/Footer';
import Home from './components/home/Home';
import React, {useState} from 'react';
import Profile from "./components/profile/Profile";
import Diary from "./components/profile/Diary";
import Document from "./components/document/Document";

function App() {
    const [isMenuVisible, setIsMenuVisible] = useState(true);

    const toggleSidebar = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <Router>
            <ThemeProvider theme={whiteTheme}>
                <CssBaseline/>
                <HeaderImage/>

                <Box sx={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
                    <Navbar onToggleSidebar={toggleSidebar}/>

                    <Box sx={{display: 'flex', flexGrow: 1, overflow: 'hidden'}}>
                        <Sidebar isMenuVisible={isMenuVisible}/>

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
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/consultant" element={<SchoolCounselor/>}/>
                                <Route path="/consultant/:id" element={<SchoolCounselorDetail/>}/>
                                <Route path="/documents" element={<Document/>}/>
                                <Route path="/documents/:id" element={<DocumentDetail/>}/>
                                <Route path="/profile" element={<Profile/>}/>
                                <Route path="/consultation-log" element={<Diary/>}/>
                            </Routes>
                        </Box>
                    </Box>
                    <Footer/>
                </Box>

            </ThemeProvider>

        </Router>
    );
}

export default App;
