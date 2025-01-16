import React, {useState} from 'react';
import {Box, IconButton, TextField, Menu, MenuItem, ListItemIcon} from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchIcon from '@mui/icons-material/Search';
import {AccountCircle, Info, EventNote, Logout} from '@mui/icons-material';
import {Link} from 'react-router-dom';

export const Navbar = ({onToggleSidebar}) => {
    const [searchText, setSearchText] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);

    const handleAccountClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        console.log("Đăng xuất");
        handleMenuClose();
    };

    return (
        <Box
            sx={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                backgroundColor: '#1E90FF',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 1.5,
                px: {xs: 2, lg: 10},
            }}
        >
            <IconButton onClick={onToggleSidebar} sx={{color: '#ffffff'}} aria-label="Toggle categories">
                <FormatListBulletedIcon/>
            </IconButton>

            <Box sx={{display: 'flex', alignItems: 'center', gap: {xs: 1, lg: 4}}}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#ffffff',
                        borderRadius: '4px',
                        px: 1,
                    }}
                >
                    <TextField
                        variant="standard"
                        placeholder="Tra cứu..."
                        value={searchText}
                        onChange={(event) => setSearchText(event.target.value)}
                        InputProps={{
                            disableUnderline: true,
                        }}
                        sx={{
                            fontSize: '0.9rem',
                            flex: 1,
                            padding: '0 8px',
                        }}
                    />
                    <IconButton sx={{p: 0.5}} aria-label="Search">
                        <SearchIcon sx={{fontSize: '1.8rem', color: '#1E90FF'}}/>
                    </IconButton>
                </Box>

                <IconButton
                    aria-label="Account"
                    onClick={handleAccountClick}
                    aria-controls="account-menu"
                    aria-haspopup="true"
                >
                    <AccountCircle sx={{fontSize: '3rem', color: '#ffffff'}}/>
                </IconButton>

                <Menu
                    id="account-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>
                        <ListItemIcon>
                            <Info fontSize="small"/>
                        </ListItemIcon>
                        <Link to="/profile" style={{textDecoration: 'none', color: 'black'}}>
                            Thông tin tài khoản
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <ListItemIcon>
                            <EventNote fontSize="small"/>
                        </ListItemIcon>
                        <Link to="/consultation-log" style={{textDecoration: 'none', color: 'black'}}>
                            Nhật ký tư vấn
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                        <ListItemIcon>
                            <Logout fontSize="small"/>
                        </ListItemIcon>
                        Đăng xuất
                    </MenuItem>
                </Menu>
            </Box>
        </Box>
    );
};

export default Navbar;
