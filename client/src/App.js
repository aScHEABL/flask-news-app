import { Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function App() {

  const [headlines, setHeadlines] = useState();

  useEffect(() => {
    fetch("/defaultView")
    .then((response) => response.json()
    .then((data) => {
      setHeadlines(data);
    })
    )
  }, [])
  
  const headlinesNodes = headlines.articles.map((news) => <div>{news.title}</div>)

  return (
    <Container>
      {headlinesNodes}
    </Container>
  )
}

export default App;