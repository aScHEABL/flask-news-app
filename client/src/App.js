import './global.css'
import { Container, Box, CardBody, Flex, Card, CardHeader, Avatar, Heading, Text, IconButton,
  Icon ,Image, CardFooter, Button } from "@chakra-ui/react";
// import { BsThreeDotsVertical } from '@chakra-ui/icons';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { newsIcon } from './newsIcon';
import MainContent from './MainContent';

function App() {

  const [headlines, setHeadlines] = useState({articles: []});

  useEffect(() => {
    fetch("/headlines")
    .then((response) => response.json()
    .then((data) => {
      setHeadlines(data);
      console.log(data);
    })
    )
  }, [])
  
  // const headlineNodes = headlines.articles.map((news) => <div>{news.title}</div>)
  const headlineNodes = headlines.articles.map((news) => 
        <Card maxW='md'>
          <CardHeader>
            <Flex spacing='4'>
              <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar name={news.source.name} src={newsIcon[news.source.name]} />

                <Box>
                  <Heading size='sm'>{news.source.name}</Heading>
                  <Text>{news.author}</Text>
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
            src={news.urlToImage}
            alt='新聞連結圖片'
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
              Like
            </Button>
            <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
              Comment
            </Button>
            <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
              Share
            </Button>
          </CardFooter>
        </Card>
  )
  
  return (
    <Container maxW='120ch' centerContent
    w={{ 
      sm: '30em', // 480px
      md: '48em', // 768px
      lg: '62em', // 992px
      xl: '80em', // 1280px
      '2xl': '96em', // 1536px
     }}>
      <Navbar />
      <Flex wrap='wrap' gap='6' justify='center'>
        { headlineNodes }
      </Flex>
      {/* <MainContent data={headlines} /> */}
    </Container>
  )
}

export default App;