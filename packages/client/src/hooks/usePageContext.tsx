import type { FC, ReactNode } from 'react';
import { useContext, createContext } from 'react';
import type { PageContextBuiltIn } from 'vite-plugin-ssr';
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client';

export type PageProps = {};

export interface PageContext {
  Page: (pageProps: PageProps) => React.ReactElement;
  pageProps: PageProps;
  urlPathname: string;
  documentProps?: {
    title?: string;
    description?: string;
  };
}

export type PageContextClient = Omit<PageContextBuiltInClient, 'Page'> &
  PageContext;

export type PageContextClientOutput = Partial<
  Omit<PageContextBuiltIn, 'Page'>
> &
  Pick<PageContextBuiltIn, 'pageExports'> & {
    isHydration: boolean;
  } & PageContextClient;

export type PageContextServer = Omit<PageContextBuiltIn, 'Page'> & PageContext;

interface Props {
  children: ReactNode;
  pageContext: PageContext;
}

const Context = createContext<PageContext>({
  Page: () => <></>,
  pageProps: {},
  urlPathname: '',
});

export const PageContextProvider: FC<Props> = ({ children, pageContext }) => {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
};

export const usePageContext = () => useContext(Context);
