import React, { useEffect, useState } from "react";
import { Flex, Card, CardHeader, Avatar, Box, Heading
, Text, IconButton, CardBody, Image, CardFooter, Button, } from '@chakra-ui/react';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';

function Headline() {
    const [headlines, setHeadlines] = useState({results: []});

    useEffect(() => {
      fetch("/headlines")
      .then((response) => response.json()
      .then((data) => {
        setHeadlines(data);
        console.log(data);
      })
      )
    }, [])
  
    const headlineNodes = headlines.results.map((news) => 
            <Card maxW='md'>
                <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar alt='新聞媒體Logo' src='https://bit.ly/sage-adebayo' />
            
                    <Box>
                        <Heading size='sm'>{news.source_id}</Heading>
                        <Text>{news.pubDate}</Text>
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
                    {news.description}
                </Text>
                </CardBody>
                <Image
                objectFit='cover'
                src={news.image_url}
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
        <Flex wrap='wrap' justify='center' gap='6'>
            { headlineNodes }
        </Flex>
    )
}

export default Headline;