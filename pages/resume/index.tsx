import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { NavBar } from '../../components/FloatingNavbar';
import { AppHeader } from '../../components/header';
import {Button} from '../../components/Button';
import styles from '../../components/Resume/resume.module.scss';
import {
     IoDownload,
     IoCreate
}from 'react-icons/io5';

interface FeedProps{
  isMobile: boolean;
}

const Resume = ({isMobile}: FeedProps) => {
  console.log(isMobile);
   const otherResumes = [
     '/assets/images/resume2.svg', '/assets/images/resume3.svg', '/assets/images/resume4.svg'
   ]
  return (
    <>
      <AppHeader pageName={'Feed | Interna'} />
          <h2 className={styles.headText}>Top resume template for you</h2>

          {/* Top user resume */}
          <section className={styles.bigresume}>
               <div>
                    <span><IoCreate size={20}/></span>
                    <img src="/assets/images/resume1.svg" alt="resume"/>
               </div>
               <Button>Download <IoDownload size={15}/> </Button>
          </section>  

          <section>
               
          </section>        
      <NavBar />
    </>
  );
};

export default Resume;

import { GetServerSideProps } from 'next';
import { getDevice } from '../../server/getDevice';
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  return {
    props: {
      isMobile: Boolean(getDevice(req))
    }, // will be passed to the page component as props
  };
};
