import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

const queryClient = new QueryClient();

export interface CustomSession extends Session {
  role: "Administrator" | "Basic User" | "Premium" | "Premium Plus";
}

export default function App({ Component, 
  pageProps
 }: AppProps) {
  return (
    <>
    
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
            <SessionProvider session={pageProps.session}>
              <Component {...pageProps} />
            </SessionProvider>
          <Analytics />
        </QueryClientProvider>
      </ThemeProvider>
      
    </>
  );
}
