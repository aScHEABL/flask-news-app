import React, { useEffect, useState } from "react";
import { Flex, Card, CardHeader, Avatar, Box, Heading
, Text, IconButton, CardBody, Image, CardFooter, Button, } from '@chakra-ui/react';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';

let ifFetchSucceed = true;

function General() {
    const [generalNews, setGeneralNews] = useState({articles: []});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch("/general")
      .then((response) => response.json()
      .then((data) => {
          if (data.status !== 'ok') {
            ifFetchSucceed = false
            return;
        }
        setGeneralNews(data);
        setLoading(false);
        console.log(data);
      })
      )
    }, [])
  
    const nodes = generalNews.articles.map((news) => 
            <Card maxW='md'>
                <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar alt='新聞媒體Logo' src={news.news_provider_logo} />
            
                    <Box>
                        <Heading size='sm'>{news.author}</Heading>
                        <Text>{news.publishedAt}</Text>
                    </Box>
                    </Flex>
                    <IconButton
                    variant='ghost'
                    colorScheme='gray'
                    aria-label='See menu'
                    icon={<BsThreeDotsVertical />}
                    />
                </Flex>
                </CardHeader>
                <CardBody>
                <Text>
                    {news.title}
                </Text>
                </CardBody>
                <Image
                objectFit='cover'
                src={news.urlToImage}
                alt='新聞圖片'
                />
            
                <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                    '& > button': {
                    minW: '136px',
                    },
                }}
                >
                <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
                    讚
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                    留言
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                    分享
                </Button>
            </CardFooter>
        </Card>
    )

    return (
        (loading) ? 
        <Box>
            <h1>Loading...please wait a while...</h1>
            <h1>資源加載中...請稍後</h1>
        </Box> :
        (ifFetchSucceed) ? 
        <Flex wrap='wrap' justify='center' gap='6'>
            { nodes }
        </Flex> :
         <Box>
            <h1>Fetch data from api failed!</h1>
            <h1>無法從API獲取資料!</h1>
        </Box>
    )
}

export default General;