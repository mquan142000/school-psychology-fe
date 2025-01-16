import React from 'react';
import {Box, List, ListItem, ListItemText, ListItemIcon} from '@mui/material';
import {Link, useLocation} from 'react-router-dom';
import {LibraryBooks, Group, School} from '@mui/icons-material';

const Sidebar = ({isMenuVisible}) => {
    const location = useLocation();

    const menuItems = [
        {text: 'Tài liệu', icon: <LibraryBooks/>, to: '/documents'},
        {text: 'Tổ tư vấn', icon: <Group/>, to: '/consultant'},
        {text: 'Cộng đồng', icon: <School/>, to: '/community'},
    ];

    if (!isMenuVisible) return null;

    return (
        <Box
            sx={{
                width: 200,
                borderRight: '1px solid #ccc',
                padding: 2,
                position: 'sticky',
                top: 64,
                height: 'calc(100vh - 64px)',
                backgroundColor: '#f4f4f4',
                zIndex: 100,
            }}
        >
            <List>
                {menuItems.map(({text, icon, to}, index) => {
                    const isActive = location.pathname.startsWith(to);
                    return (
                        <Link
                            key={index}
                            to={to}
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                            }}
                        >
                            <ListItem
                                button
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '12px 16px',
                                    backgroundColor: isActive ? '#1E90FF' : 'transparent',
                                    borderRadius: 2,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 35,
                                        color: isActive ? '#fff' : '#696969',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={text}
                                    sx={{
                                        marginLeft: 1,
                                        textAlign: 'left',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                        color: isActive ? '#fff' : '#696969',
                                    }}
                                />
                            </ListItem>
                        </Link>
                    );
                })}
            </List>
        </Box>
    );
};

export default Sidebar;
