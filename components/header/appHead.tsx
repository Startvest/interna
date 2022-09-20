import Head from 'next/head';
import Image from "next/image";
import styles from './header.module.css';
import {ThemeIcon} from '../ThemeIcon';

export function AppHeader({pageName}:{ pageName? : string}) {
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

    <header>
      <img className={styles['icon-user']} src="/assets/images/user2.png" />
      <img className={styles['icon-logo']} src="/fav.ico" />
      <ThemeIcon/>
    </header>
    </>
  );
}
