import React from 'react';
import {Box, Typography} from '@mui/material';
import {useParams} from 'react-router-dom';

const DocumentDetail = () => {
    const {id} = useParams();
    const documentsData = [
        {
            id: 1,
            author: "Nguyễn Văn A",
            publishedDate: "2025-01-09",
            sections: [
                {
                    title: "Tổng quan về khái niệm tâm lý học đường",
                    content: "Nội dung dưới đây sẽ giúp chúng ta hiểu hơn về lĩnh vực tâm lý học đường thông qua các khái niệm và thực trạng hiện nay trong các trường học. Cụ thể:",
                    image: "https://cdn.pixabay.com/photo/2016/03/09/15/29/books-1246674_640.jpg"
                },
                {
                    title: "Khái niệm tâm lý học đường là gì?",
                    content: "Một trong những lầm tưởng phổ biến nhất về tâm lý học là nó chỉ là \"những lẽ thường\" quanh ta. Vấn đề là các nghiên cứu tâm lý đã chứng minh rằng nhiều điều mà chúng ta tin rằng là “hiển nhiên” thực sự không đúng chút nào. Nếu “những lẽ thường” ấy là phổ biến như mọi người vẫn nói, thì chúng ta sẽ không tham gia vào các hành vi mà ta biết là có hại, chẳng hạn như hút thuốc hoặc ăn đồ ăn nhanh.\n" +
                        "\n" +
                        "Bằng việc thách thức các quan niệm sai lầm về cách thức và lý do cho hành xử của con người, các nhà tâm lý có thể đưa ra câu trả lời giúp giải quyết các vấn đề thực tế trên thế giới.\n" +
                        "\n" +
                        "Dựa vào các phương pháp khoa học, Tâm lý học điều tra vấn đề và đi đến kết luận. Sử dụng phương pháp thực nghiệm, các nhà nghiên cứu có thể khám phá mối quan hệ giữa các biến khác nhau. Các nhà tâm lý còn sử dụng một loạt các kỹ thuật để nghiên cứu tâm trí và hành vi của con người, ví dụ như quan sát, thí nghiệm, nghiên cứu điển hình và bảng hỏi.",
                    image: "https://cdn.pixabay.com/photo/2020/05/23/20/08/books-5211309_640.jpg"
                }
            ]
        },
        {
            id: 2,
            title: "Bài viết về tâm lý 2",
            content: "Nội dung chi tiết của bài viết về tâm lý 2.",
            author: "Nguyễn Văn B",
            publishedDate: "2025-01-10",
            image: "https://example.com/image2.jpg"
        },
        {
            id: 3,
            title: "Bài viết về tâm lý 3",
            content: "Nội dung chi tiết của bài viết về tâm lý 3.",
            author: "Nguyễn Văn C",
            publishedDate: "2025-01-11",
            image: "https://example.com/image3.jpg"
        }
    ];

    const document = documentsData.find((document) => document.id === parseInt(id));

    if (!document) {
        return (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <Typography variant="h5" color="error">
                    Bài viết không tồn tại!
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            padding: 2,
            maxWidth: '800px',
            margin: 'auto'
        }}>
            <Typography variant="h4" sx={{marginBottom: 2}}>
                {document.sections ? document.sections[0]?.title : document.title}
            </Typography>

            <Box sx={{marginBottom: 2}}>
                <Typography variant="body2" color="text.secondary" sx={{fontStyle: 'italic'}}>
                    Nguồn: {document.author} | Ngày đăng: {document.publishedDate}
                </Typography>
            </Box>

            <Box sx={{flex: 1, overflowY: 'auto', marginBottom: 2}}>
                {document.sections ? (
                    document.sections.map((section, index) => (
                        <Box key={index} sx={{marginBottom: 3}}>
                            {section.image && (
                                <Box
                                    component="img"
                                    src={section.image}
                                    alt={section.title}
                                    sx={{
                                        width: '100%',
                                        maxHeight: '400px',
                                        objectFit: 'cover',
                                        marginBottom: 2,
                                        borderRadius: '8px',
                                    }}
                                />
                            )}
                            <Typography variant="h5" sx={{marginTop: 2, marginBottom: 1}}>
                                {section.title}
                            </Typography>
                            <Typography variant="body1" sx={{lineHeight: 1.8}}>
                                {section.content}
                            </Typography>
                        </Box>
                    ))
                ) : (
                    <Box sx={{marginBottom: 3}}>
                        {document.image && (
                            <Box
                                component="img"
                                src={document.image}
                                alt={document.title}
                                sx={{
                                    width: '100%',
                                    maxHeight: '400px',
                                    objectFit: 'cover',
                                    marginBottom: 2,
                                    borderRadius: '8px',
                                }}
                            />
                        )}
                        <Typography variant="body1" sx={{lineHeight: 1.8}}>
                            {document.content}
                        </Typography>
                    </Box>
                )}
            </Box>
            <Box sx={{paddingTop: 2, marginBottom: 3}}/>
        </Box>
    );
};

export default DocumentDetail;
