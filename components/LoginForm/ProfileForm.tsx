import {useRef, useState} from 'react';
import styles from './login.module.scss';
import {Input} from '../../components/Input';
import { Swiper } from 'swiper/types'

interface ProfileFormProps {
     image: string;
     setImage: Function;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ image, setImage }) =>{
     const imageInputRef = useRef<HTMLInputElement>(null);
     return(
          <section className={styles.formContainer}>
          <h2>Personal Information</h2>
          <div className={styles.imageContainer}>
               <img className={styles.pickImage} src={image} alt="profile"/>
                    <button
                    onClick={(e) => {e.preventDefault(); imageInputRef.current?.click()}}
                    className={styles.imageBtn}>
                    Upload
                    </button>
                    <input
                         title='Profile Picture Upload'  
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
               labelName={'Your full name'}
               />

               <Input
                    type="text"
                    name="username"
                    onChange={(e: any) => console.log(e.target.value)}
                    placeholder="@username"
                    labelName={'Username'}
               />

               <Input
                    className={styles.profileInput}
                    type="email"
                    name="email"
                    onChange={(e: any) => console.log(e.target.value)}
                    placeholder="example@getinterna.com"
                    labelName={'Email Address'}
               />
          </section>
     )
}