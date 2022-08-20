import Head from 'next/head';

export function Header({ pageName }: { pageName?: string }) {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <title>
        {pageName ||
          'Interna | Connect with interns | Connect with opportunities'}
      </title>
    </Head>
  );
}
