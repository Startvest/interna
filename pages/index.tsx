import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getdata } from '../services/getTestData';
import { IHello } from '../server/hello/hello.model';
import { useMutation } from 'react-query';
import {Toast, Itoast} from '../components/toast';

const Home: NextPage = () => {
  const [data, setData] = useState<any>({});
  const [toastData, setToastData] = useState<Itoast>({title: "", message: "", type: "success"});
  const [toast, setToast] = useState<boolean>(false);

  const dataMutation = useMutation(getdata, {
    onSuccess: (data) => {
      setData(data);
    },
    onError: (error) => {
      console.log(error);
      // Notification error component
    },
  });

  useEffect(() => {
    dataMutation.mutate();
  }, []);

  const handletoast = () => {
     setToast(true);
        setToastData({
            title: "Hello",
            message: "Hello this is a test",
            type: "primary"
        });
      
      setTimeout(() => {
        setToast(false);
      } , 4000);
  }

  return (
    <div className={styles.container}>
      {toast &&  <Toast data={toastData}/>}
      <Head>
        <title>
          Connect with interns | Connect with opportunities | Interna
        </title>
        <meta
          name="description"
          content="Interna is a community social platform that connect interns and opportunities, as well as a medium to share experiences among themselves"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Interna!</a>
        </h1>

        <h2>Data from Server</h2>
        {dataMutation.isLoading && <div>Loading....</div>}
        {dataMutation.isSuccess && data && (
          <div>
            {data.name}, {data.desc}
          </div>
        )}

        <button onClick={handletoast}>Toast</button>
       
      </main>
    </div>
  );
};

export default Home;

// export async function getServerSideProps() {
//   const serverData = await getdata();

//   return {
//     serverData, // will be passed to the page component as props
//   }
// }
