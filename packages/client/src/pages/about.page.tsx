import type { FC } from 'react';

const Index: FC<{ response: string }> = ({ response }) => {
  return (
    <>
      <p>Hello from the client!</p>
      {response && <p>{response}</p>}
      <a href="/">Index</a>
    </>
  );
};

export default Index;
