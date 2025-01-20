import React from 'react';
import HeaderImage from "../assets/HeaderImage";
import {Route, Routes} from "react-router-dom";
import Home from "../components/home/Home";
import LoginForm from "../components/auth/LoginForm";
import SchoolCounselor from "../components/consultant/SchoolCounselor";
import Document from "../components/document/Document";
import Profile from "../components/profile/Profile";
import SchoolCounselorDetail from "../components/consultant/SchoolCounselorDetail";
import DocumentDetail from "../components/document/DocumentDetail";
import Diary from "../components/profile/Diary";

const CustomerRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/consultant' element={<SchoolCounselor/>}/>
                <Route path='/consultant/:id' element={<SchoolCounselorDetail/>}/>
                <Route path='/documents' element={<Document/>}/>
                <Route path='/documents/:id' element={<DocumentDetail/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/diary' element={<Diary/>}/>
            </Routes>
        </div>
    );
};

export default CustomerRoute;