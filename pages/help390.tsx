import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { AppHeader } from '../components/header';
import { useSession, signIn, signOut } from "next-auth/react"
import { useMutation } from 'react-query';
import {LocationLookup} from '../services/external/ip';

const Help: NextPage = () => {
  const IpMutation = useMutation(LocationLookup);
  const { data: session } = useSession();
  const [ipdata, setIpdata] = useState<any>({});

  useEffect(()=>{
    IpMutation.mutate()
  },[])
  useEffect(() =>{
    console.log(IpMutation.data);
    setIpdata(IpMutation.data);
  },[IpMutation.isSuccess])

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
        {(ipdata) && 
        <p>Your ip address is {ipdata.ip}, from {ipdata.city}, {ipdata.country}</p>
}

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
