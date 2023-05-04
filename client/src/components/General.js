import React, { useEffect, useState } from "react";
import { Flex, Card, CardHeader, Avatar, Box, Heading
, Text, IconButton, CardBody, Image, CardFooter, Button,
Stack, Skeleton, SkeletonCircle, SkeletonText, useMediaQuery } from '@chakra-ui/react';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import {v4 as uuidv4} from "uuid";

let ifFetchSucceed = true;

function General() {
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const [news, setNews] = useState({articles: []});
    const [loading, setLoading] = useState(true);

    
    const desktopDevice = 
    <Box>
            <Box padding='6' boxShadow='lg' bg='white' height='80vh'
            w={{
            sm: '30em', // 480px
            md: '48em', // 768px
            lg: '62em', // 992px
            xl: '80em', // 1280px
            '2xl': '96em', // 1536px
        }}>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={12} spacing='4' skeletonHeight='8' />
            </Box>
    </Box>

    const mobileDevice =
    <Box>
            <Box padding='6' boxShadow='lg' bg='white' height='80vh' w='70vw'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={12} spacing='4' skeletonHeight='6' />
            </Box>
    </Box>

const loadingDisplay = isMobile ? mobileDevice : desktopDevice;

    useEffect(() => {
      fetch("https://flash-griffin-385502.df.r.appspot.com/general")
      .then((response) => response.json()
      .then((data) => {
          if (data.status !== "ok") {
            ifFetchSucceed = false
            return;
        }
        setNews(data);
        setLoading(false);
        // console.log(data);
    })
    )
}, [])

const nodes = news.articles.map((news) => 
<Card key={uuidv4()} maxW='md'>
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
                <a href={news.url} target="_blank" rel="noopener noreferrer">
                <Image
                objectFit='cover'
                src={news.urlToImage}
                alt='新聞圖片'
                />
                </a>
            
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
        loadingDisplay :
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