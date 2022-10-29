import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <Analytics />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
