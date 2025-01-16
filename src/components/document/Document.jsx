import React, {useState, useEffect} from 'react';
import {Box, List, ListItem, Card, CardContent, CardMedia, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const Document = () => {
    const [documents, setDocuments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const documentsData = [
            {
                id: 1,
                title: "Tâm lý học và sức khỏe tinh thần",
                content: "Bài viết này khám phá cách tâm lý học ảnh hưởng đến sức khỏe tinh thần...",
                category: "Tâm lý",
                image: "https://cdn.pixabay.com/photo/2016/03/09/15/29/books-1246674_640.jpg"
            },
            {
                id: 2,
                title: "Kỹ năng đối phó với căng thẳng",
                content: "Căng thẳng là một phần của cuộc sống, nhưng chúng ta có thể học cách đối phó với nó...",
                category: "Tâm lý",
                image: "https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809_640.jpg"
            },
            {
                id: 3,
                title: "Kỹ năng đối phó với căng thẳng",
                content: "Căng thẳng là một phần của cuộc sống, nhưng chúng ta có thể học cách đối phó với nó...",
                category: "Tâm lý",
                image: "https://cdn.pixabay.com/photo/2016/11/18/16/56/book-1835799_1280.jpg"
            }
        ];

        setDocuments(documentsData);
    }, []);

    const handleViewDocument = (id) => {
        navigate(`/documents/${id}`);
    };

    return (
        <Box sx={{padding: 2}}>
            <List>
                {documents.map((document) => (
                    <ListItem key={document.id} sx={{marginBottom: 4}}>
                        <Card sx={{display: 'flex', width: '100%'}}>
                            <CardMedia
                                component="img"
                                sx={{width: 150, height: 150}}
                                image={document.image}
                                alt={document.title}
                            />
                            <CardContent sx={{flex: 1, paddingTop: '16px'}}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        cursor: 'pointer',
                                        color: 'black',
                                        '&:hover': {
                                            color: '#1E90FF',
                                        },
                                    }}
                                    onClick={() => handleViewDocument(document.id)}
                                >
                                    {document.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{marginBottom: 2}}>
                                    {document.content.substring(0, 100)}...
                                </Typography>
                            </CardContent>
                        </Card>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Document;
