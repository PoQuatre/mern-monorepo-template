import type { FC } from 'react';
import type { Root } from 'react-dom/client';
import { hydrateRoot } from 'react-dom/client';
import { useClientRouter } from 'vite-plugin-ssr/client/router';

import { App } from 'App';
import type { PageContextClientOutput } from 'hooks/usePageContext';

const getApp: FC<PageContextClientOutput> = (pageContext) => {
  const { Page, pageProps } = pageContext;
  return (
    <App pageContext={pageContext}>
      <Page {...pageProps} />
    </App>
  );
};

let root: Root;

// eslint-disable-next-line react-hooks/rules-of-hooks
useClientRouter({
  render(pageContext: PageContextClientOutput) {
    const rootElement = document.getElementById('root');
    if (!rootElement) throw new Error('There is no #root element in the DOM');

    if (pageContext.isHydration) {
      root = hydrateRoot(rootElement, getApp(pageContext));
    } else {
      root.render(getApp(pageContext));
    }
  },
});
