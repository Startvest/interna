import {useRef, useState} from 'react';
import type { NextPage } from 'next';
import { Header } from '../components/header';
import styles from '../components/LoginForm/login.module.scss';
import {Input} from '../components/Input';
import {ThemeIcon} from '../components/ThemeIcon';
import { useRouter } from 'next/router';
import {ProfileForm} from '../components/LoginForm/ProfileForm';
import {WorkExperienceForm} from '../components/LoginForm/ExperienceForm';

interface FeedProps{
  isMobile: boolean;
}
const CompleteSignup = ({isMobile}: FeedProps) => {
     const [image, setImage] = useState<string>('/assets/illustrations/avatar.png');
     const router = useRouter();
     return(
         <div className={styles.container}>
             <Header pageName='Login to interna' head/>
             <ThemeIcon/>
             {/* <img className={styles.headImage} src='/assets/illustrations/welcome.svg'/> */}
             <h1 className={styles.header}>Complete your Profile</h1>
             <div className={styles.subtext}>
               We would like to know more about you!
             </div>

             <form className={styles.form}>
               

                <ProfileForm image={image} setImage={setImage}/>
                <WorkExperienceForm/>

               <button className={styles.btnPrimary} onClick={(e) => {e.preventDefault(); router.push('/feed')}}>Submit</button>
             </form>         
         </div>
     )
}

export default CompleteSignup;