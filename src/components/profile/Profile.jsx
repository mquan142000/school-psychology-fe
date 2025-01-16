import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import AccountInfo from "./AccountInfo";
import PersonalInfo from "./PersonalInfo";

const ProfilePage = () => {
    const [personalInfo, setPersonalInfo] = useState({
        fullName: "Nguyễn Văn A",
        avatarUrl: "https://cdn.pixabay.com/photo/2024/12/06/12/23/ai-generated-9248643_640.jpg",
    });

    return (
        <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f9f9f9" }}>
            <Sidebar personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />

            <Box sx={{ flex: 1, p: 3 }}>
                <AccountInfo />
                <PersonalInfo />
            </Box>
        </Box>
    );
};

export default ProfilePage;
