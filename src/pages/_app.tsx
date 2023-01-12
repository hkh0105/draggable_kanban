import '@src/styles/global.css';

import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DefaultSeo } from 'next-seo';
import { RecoilRoot } from 'recoil';
import Layout from '@src/components/layout/layout';

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  // if (process.env.NODE_ENV === 'development') {
  // import('../mocks');
  // }
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <DefaultSeo />
          <Component {...pageProps} />
        </RecoilRoot>
      </QueryClientProvider>
    </Layout>
  );
};

export default App;
