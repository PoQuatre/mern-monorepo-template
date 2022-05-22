import path from 'path';

import type { Express } from 'express';
import express from 'express';
import resolvePkg from 'resolve-package-path';
import { createServer } from 'vite';
import { createPageRenderer } from 'vite-plugin-ssr';

export const registerClient = async (app: Express) => {
  const clientPkg = resolvePkg('client', '.');
  if (!clientPkg) {
    throw new Error("Cannot find the 'client' package!");
  }

  const root = path.dirname(clientPkg);
  const resolve = (...p: string[]) => path.resolve(root, ...p);

  const isProduction = process.env.NODE_ENV === 'production';

  let viteDevServer;
  if (!isProduction) {
    viteDevServer = await createServer({
      root,
      server: { middlewareMode: 'ssr' },
    });

    app.use(viteDevServer.middlewares);
  } else {
    app.use(express.static(resolve('dist', 'client')));
  }

  const renderPage = createPageRenderer({ viteDevServer, isProduction, root });
  app.get('*', async (req, res, next) => {
    const { httpResponse } = await renderPage({ url: req.originalUrl });
    if (!httpResponse) return next();

    res
      .status(httpResponse.statusCode)
      .type(httpResponse.contentType)
      .send(httpResponse.body);
  });
};
