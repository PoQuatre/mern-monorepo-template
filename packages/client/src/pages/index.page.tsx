import fetch from 'cross-fetch';
import type { FC } from 'react';

export const onBeforeRender = async () => {
  return {
    pageContext: {
      pageProps: {
        response: await fetch('http://localhost:8080/api/hello').then((res) =>
          res.text(),
        ),
      },
    },
  };
};

const Index: FC<{ response: string }> = ({ response }) => {
  return (
    <>
      <p>Hello from the client!</p>
      {response && <p>{response}</p>}
      <a href="/about">About</a>
    </>
  );
};

export default Index;
