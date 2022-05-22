export const onBeforeRender = async () => {
  return {
    pageContext: {
      pageProps: {
        response: await fetch('/api/hello').then((res) => res.text()),
      },
    },
  };
};
