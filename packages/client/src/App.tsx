import type { FC, ReactNode } from 'react';
import { StrictMode } from 'react';

import type { PageContext } from 'hooks/usePageContext';
import { PageContextProvider } from 'hooks/usePageContext';

interface Props {
  children: ReactNode;
  pageContext: PageContext;
}

export const App: FC<Props> = ({ children, pageContext }) => {
  return (
    <StrictMode>
      <PageContextProvider pageContext={pageContext}>
        {children}
      </PageContextProvider>
    </StrictMode>
  );
};
