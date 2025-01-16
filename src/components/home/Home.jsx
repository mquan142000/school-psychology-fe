import React from 'react';
import {Box} from '@mui/material';
import Document from "../document/Document";

const Home = () => {
    return (
        <Box sx={{flexGrow: 1, padding: 2}}>
            <Document/>
        </Box>
    );
};

export default Home;
