import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { AppHeader } from '../components/header';
import { useSession, signIn, signOut } from "next-auth/react"

const Help: NextPage = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (<>
    <AppHeader pageName={"Get help | Interna"}/>
      <div className={styles.main}>
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      </div>
    </>
  );
};

export default Help;

import { GetServerSideProps } from 'next';
import {addlog} from "../server/db/Logs";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
    // console.log(await addlog("A test error", "pages/help390.tsx", "info"))
  return {
    props: {
    }, // will be passed to the page component as props
  };
};
