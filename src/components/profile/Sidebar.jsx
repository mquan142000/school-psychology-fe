import React from "react";
import { Box, Avatar, Typography, List, ListItem, ListItemText, ListItemIcon, Divider } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Box
            sx={{
                width: 300,
                bgcolor: "#fff",
                p: 2,
                borderRight: "1px solid #ddd",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: 2,
            }}
        >
            <Avatar sx={{ width: 160, height: 160, mb: 2 }}>
            </Avatar>
            <Typography variant="h6" sx={{ mb: 1, textAlign: "center" }}>
                Nguyen Van A
            </Typography>

            <List sx={{ width: "100%" }}>
                <ListItem
                    button
                    onClick={() => navigate("/profile")}
                    selected={location.pathname === "/profile"}
                >
                    <ListItemIcon sx={{ minWidth: 60 }}>
                        <AccountCircleIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                        primary="Thông tin tài khoản"
                        secondary="Quản lý và cập nhật thông tin cá nhân"
                    />
                </ListItem>
                <Divider />
                <ListItem
                    button
                    onClick={() => navigate("/diary")}
                    selected={location.pathname === "/diary"}
                >
                    <ListItemIcon sx={{ minWidth: 60 }}>
                        <EventNoteIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                        primary="Nhật ký tư vấn"
                        secondary="Xem lại các cuộc tư vấn đã tham gia"
                    />
                </ListItem>
                <Divider />
                <ListItem
                    button
                    onClick={() => navigate("/")}
                    selected={location.pathname === "/"}
                >
                    <ListItemIcon sx={{ minWidth: 60 }}>
                        <LogoutIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                        primary="Đăng xuất"
                        secondary="Thoát khỏi tài khoản hiện tại"
                    />
                </ListItem>
            </List>
        </Box>
    );
};

export default Sidebar;
