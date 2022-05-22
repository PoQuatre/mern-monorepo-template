import { renderToString } from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr';

import { App } from 'App';
import type { PageContextServer } from 'hooks/usePageContext';

export { render };

export const passToClient = ['pageProps'];

function render(pageContext: PageContextServer) {
  const { Page, pageProps, documentProps } = pageContext;
  const pageHtml = renderToString(
    <App pageContext={pageContext}>
      <Page {...pageProps} />
    </App>,
  );

  const title = documentProps?.title || 'Vite SSR app';
  const desc = documentProps?.description || 'App using Vite + vite-plugin-ssr';

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
}
