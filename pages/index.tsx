import type { NextPage } from 'next'
import Image from 'next/image';
import {useEffect, useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {getdata} from '../services/getTestData';
import {IHello} from '../server/hello/hello.model';

const Home: NextPage = () => {

  // Destructure every information passed as props
  const [data, setData] = useState<any>({});

  useEffect(() => {

    ((async () => {
      setData(await getdata());

      console.log(data);
    }))();
    
  } , []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Connect with interns | Connect with opportunities | Interna</title>
        <meta name="description" content="Interna is a community social platform that connect interns and opportunities, as well as a medium to share experiences among themselves" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Interna!</a>
        </h1>

      <h2>Data from Server</h2>
      <div>{data.name}, {data.desc}</div>
      {/* <div>{serverData.name}, {serverData.desc}</div> */}
      </main>

    </div>
  )
}

export default Home

// export async function getServerSideProps() {
//   const serverData = await getdata();

//   return {
//     serverData, // will be passed to the page component as props
//   }
// }
