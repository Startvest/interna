import Head from 'next/head';
import Image from "next/image";
import styles from './header.module.css';
import {useState, useEffect, useLayoutEffect} from 'react';
import { useTheme } from 'next-themes';
import {useRouter} from 'next/router';
import {
  IoSunnyOutline,
  IoMoonOutline
} from 'react-icons/io5';
import { SideMenu } from '../SideMenu';

export function AppHeader({pageName}:{ pageName? : string}) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleTheme = () => {
       setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if(window.innerWidth >= 768){
      setMenuOpen(true)
      document.body.removeAttribute('class')
    }

  }, [])
  useEffect(() => {
      setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
  <>
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

    <header className={styles.headContainer}>
      <img onClick={() => setMenuOpen(true)} className={styles['icon-user']} src="/assets/images/user2.svg" alt='Your profile picture'/>
      <img onClick={() => router.push("/")} className={styles['icon-logo']} src="/icons/icon-256x256.png" alt='Interna Logo' />
      {(resolvedTheme === 'light') ? 
          <IoMoonOutline size={35} className={styles.icon} onClick={handleTheme}/>
          :
          <IoSunnyOutline size={35} className={styles.icon} onClick={handleTheme}/>
          }
    </header>
    <SideMenu 
      isOpen={menuOpen} 
      hasBeenDismissed={() => setMenuOpen(false)}
    />
  </>
  );
}
