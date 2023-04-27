import React from "react";
import { 
    Flex,

} from "@chakra-ui/react";

function MainContent(data) {
    const headlinesNodes = data.data.headlines.articles.map((news) => <div>{news.title}</div>)
    console.log(data.data.articles);
    return (
        <Flex>
            {headlinesNodes}
        </Flex>
    )
}

export default MainContent;