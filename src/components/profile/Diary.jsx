import React, {useState} from "react";
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    Divider, Grid,
} from "@mui/material";
import Sidebar from "./Sidebar";

const diaryData = [
    {
        id: 1,
        date: "2025-01-01",
        consultant: "Nguyen Van B",
        topic: "Chọn ngành học",
        status: "Completed",
        details: "Thông tin chi tiết về buổi tư vấn 1.",
    },
    {
        id: 2,
        date: "2025-01-05",
        consultant: "Tran Thi C",
        topic: "Học bổng và tài chính",
        status: "Pending",
        details: "Thông tin chi tiết về buổi tư vấn 2.",
    },
    {
        id: 3,
        date: "2025-01-10",
        consultant: "Le Van D",
        topic: "Kỹ năng mềm",
        status: "Completed",
        details: "Thông tin chi tiết về buổi tư vấn 3.",
    },
];

const Diary = () => {
    const [logs] = useState(diaryData);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedLog, setSelectedLog] = useState(null);

    const handleViewDetails = (log) => {
        setSelectedLog(log);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedLog(null);
    };

    return (
        <Box sx={{display: "flex", height: "100vh"}}>
            <Sidebar/>
            <Box sx={{flexGrow: 1, p: 3}}>
                <Typography variant="h5" gutterBottom sx={{mb: 3}}>
                    Nhật ký tư vấn
                </Typography>
                <TableContainer component={Paper} sx={{mt: 2}}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{backgroundColor: "#f5f5f5"}}>
                                <TableCell sx={{color: "#1976d2", fontWeight: "bold"}}>ID</TableCell>
                                <TableCell sx={{color: "#1976d2", fontWeight: "bold"}}>Ngày</TableCell>
                                <TableCell sx={{color: "#1976d2", fontWeight: "bold"}}>Chuyên gia tư vấn</TableCell>
                                <TableCell sx={{color: "#1976d2", fontWeight: "bold"}}>Chủ đề</TableCell>
                                <TableCell sx={{color: "#1976d2", fontWeight: "bold"}}>Trạng thái</TableCell>
                                <TableCell sx={{color: "#1976d2", fontWeight: "bold"}}>Hành động</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {logs.map((log) => (
                                <TableRow key={log.id}>
                                    <TableCell>{log.id}</TableCell>
                                    <TableCell>{log.date}</TableCell>
                                    <TableCell>{log.consultant}</TableCell>
                                    <TableCell>{log.topic}</TableCell>
                                    <TableCell>{log.status}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            sx={{
                                                backgroundColor: "#4caf50",
                                                textTransform: "none",
                                                "&:hover": {
                                                    backgroundColor: "#45a049",
                                                },
                                            }}
                                            onClick={() => handleViewDetails(log)}
                                        >
                                            Xem chi tiết
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
                    <DialogTitle>Thông tin chi tiết</DialogTitle>
                    <DialogContent>
                        {selectedLog && (
                            <Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            ID:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>{selectedLog.id}</Typography>
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            Ngày:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>{selectedLog.date}</Typography>
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            Chuyên gia:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>{selectedLog.consultant}</Typography>
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            Chủ đề:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>{selectedLog.topic}</Typography>
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            Trạng thái:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>{selectedLog.status}</Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{my: 2}}/>
                                <Typography variant="subtitle1" fontWeight="bold">
                                    Chi tiết:
                                </Typography>
                                <Typography>{selectedLog.details}</Typography>
                            </Box>
                        )}
                    </DialogContent>
                </Dialog>
            </Box>
        </Box>
    );
};

export default Diary;
