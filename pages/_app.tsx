import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();

export default function App({ Component, 
  pageProps: { session, ...pageProps },
 }: AppProps) {
  return (
    <>
     <SessionProvider session={session}>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          <Analytics />
        </QueryClientProvider>
      </ThemeProvider>
      </SessionProvider>
    </>
  );
}
