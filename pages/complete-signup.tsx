import {useRef, useState} from 'react';
import type { NextPage } from 'next';
import { Header } from '../components/header';
import styles from '../components/LoginForm/login.module.scss';
import {Input} from '../components/Input';
import {ThemeIcon} from '../components/ThemeIcon';
import { useRouter } from 'next/router';
const CompleteSignup : NextPage = () => {
     const imageInputRef = useRef<HTMLInputElement>(null);
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
               <div className={styles.imageContainer}>
                    <img className={styles.pickImage} src={image} alt="profile"/>
                    <button
                    onClick={(e) => {e.preventDefault(); imageInputRef.current?.click()}}
                    className={styles.imageBtn}>
                    Upload
                    </button>
                    <input  
                         type="file"
                         accept="image/*"
                         className={styles.hidden}
                         onChange={e => {
                              const fileList = e.target.files;
                              if (!fileList) return;
                              setImage(URL.createObjectURL(fileList[0]));
                            }}
                         id="user_image"
                         name="user_image"
                         ref={imageInputRef}/>
                    
               </div>
             <Input
               type="text"
               name="name"
               onChange={(e: any) => console.log(e.target.value)}
               placeholder="Enter your full name"
               labelName={'Full name'}
               />

               <Input
               type="text"
               name="location"
               onChange={(e: any) => console.log(e.target.value)}
               placeholder="Enter your location"
               labelName={'Location'}
               />

               <Input
               type="text"
               name="school"
               onChange={(e: any) => console.log(e.target.value)}
               placeholder="Enter the name of your school"
               labelName={'School Name'}
               />

               <Input
               type="text"
               name="employment"
               onChange={(e: any) => console.log(e.target.value)}
               placeholder="Current place of employment"
               labelName={'Company name'}
               />
               {/* <div className={styles.searchContainer}>
               {['hanif', 'brother', 'sister'].map(c => <div className={styles.searchResult}>{c}</div>) }
               </div> */}

               <Input
               type="select"
               name="interest"
               onChange={(e: any) => console.log(e.target.value)}
               placeholder="Enter your fields of specialiazation"
               labelName={'Interests'}
               />

               <Input
               type="tel"
               name="description"
               onChange={(e: any) => console.log(e.target.value)}
               placeholder="Enter a brief description of yourself"
               labelName={'Description'}
               />

               <Input
               type="select"
               name="description"
               onChange={(e: any) => console.log(e.target.value)}
               placeholder="Pick one of the following"
               labelName={'How do you plan on using interna?'}
               />

               <button className={styles.btnPrimary} onClick={(e) => {e.preventDefault(); router.push('/feed')}}>Submit</button>
             </form>         
         </div>
     )
}

export default CompleteSignup;