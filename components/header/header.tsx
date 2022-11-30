import Head from 'next/head';
import Image from "next/image";
import styles from './header.module.css';
import Link from 'next/link';

export function Header({ pageName, head }: { pageName?: string , head? : boolean}) {
  return (<>
    <Head>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <title>
        {pageName ||
          'Interna | Discover internship opportunities'}
      </title>
    </Head>

    {head && <header className={styles.header}>
      <Link href={'/'}>
        <>
          <Image src="/fav.ico" width={'70px'} height={'70px'}/>
          <h2 className={styles.h2}>Interna</h2>
        </>
      </Link>
    </header>}
    </>
  );
}
