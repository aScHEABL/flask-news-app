import React, { useEffect, useState } from "react";
import { 
    Flex, Card, CardHeader, Avatar, Heading, Text, IconButton,
    Icon ,Image, CardFooter, Button, Box, CardBody
} from "@chakra-ui/react";
import { BiLike, BiChat, BiShare } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';

function Headline() {

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

    const headlineNodes = headlines.articles.map((news) => 
        <Card maxW='md' as='main'>
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
        <Flex>
            { headlineNodes }
        </Flex>
    )
}

export default Headline;