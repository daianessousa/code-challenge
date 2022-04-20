import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { HeadingSM } from "./components/Heading";

import { Container } from "./styles";
interface IDataProps {
  title: string;
  description: string;
  url: string;
  source: { name: string };
}
function App() {
  const [data, setData] = useState<IDataProps[]>([]);

  useEffect(() => {
    const publications = async () => {
      const response = await axios(
        `https://newsapi.org/v2/everything?q=anitta&apiKey=${process.env.API_KEY}`
      );
      setData(response.data.articles);
    };
    publications();
  }, []);
  return (
    <>
      <HeadingSM title="a-news" primary={false} />
      <Container>
        {data.map((publication) => (
          <Card
            key={publication.title}
            title={publication.title}
            description={publication.description}
            source={publication.source.name}
            url={publication.url}
          />
        ))}
      </Container>
    </>
  );
}

export default App;
