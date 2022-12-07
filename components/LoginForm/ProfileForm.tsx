import {useRef, useState} from 'react';
import styles from '../../components/LoginForm/login.module.scss';
import {Input} from '../../components/Input';

export const ProfileForm = ({image, setImage}:{image: string, setImage: Function}) =>{
     const imageInputRef = useRef<HTMLInputElement>(null);
     return(
          <>
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
               onChanged={(e: any) => console.log(e.target.value)}
               placeholder="Enter your full name"
               labelName={'Full name'}
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
          </>
     )
}