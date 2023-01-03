import {useRef, useState} from 'react';
import styles from './login.module.scss';
import {Input} from '../../components/Input';
import { UseFormRegister } from 'react-hook-form';
import { CompleteSignup } from '../../types';

interface ProfileFormProps {
     image: string;
     setImage: Function;
     formRegister: UseFormRegister<CompleteSignup>
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ formRegister, image, setImage }) =>{
     const imageInputRef = useRef<HTMLInputElement>(null);
     
     const uploadImage = (e:any) => {
          e.preventDefault(); 
          imageInputRef.current?.click();
     }
     
     return(
          <section className={styles.formContainer}>
               <h2>Personal Information</h2>
               <div className={styles.imageContainer}>
                    <img className={styles.pickImage} src={image} alt="profile"/>
                    <button onClick={uploadImage} className={styles.imageBtn}>
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
                         ref={imageInputRef}
                    />       
               </div>
               <Input
                    reg={formRegister('name')}
                    inputClassName={styles.profileInput}
                    type="text"
                    name="name"
                    onChange={(e: any) => console.log(e.target.value)}
                    placeholder="Enter your full name"
                    labelName={'Your full name'}
               />

               <Input
                    inputClassName={styles.profileInput}
                    type="text"
                    name="username"
                    onChange={(e: any) => console.log(e.target.value)}
                    placeholder="@username"
                    labelName={'Username'}
                    reg={formRegister('username')}
               />

               <Input
                    inputClassName={styles.profileInput}
                    type="email"
                    name="email"
                    onChange={(e: any) => console.log(e.target.value)}
                    placeholder="example@getinterna.com"
                    labelName={'Email Address'}
                    reg={formRegister('email')}
               />

               <div className={styles.gender}>
                    <label htmlFor="gender">Gender</label>
                    <div className={styles.radioButtonContainer}>
                         <input 
                              className='chip contrast' 
                              {...formRegister('gender', {required: true})} 
                              title='Female' type="radio" name="gender" 
                              value="female"
                         />
                         <input 
                              className='chip contrast' 
                              {...formRegister('gender', {required: true})} 
                              title='Male' type="radio" name="gender" 
                              value="male" 
                         />
                         <input 
                              className='chip contrast'
                              {...formRegister('gender', {required: true})}  
                              title='Prefer not to say' type="radio" name="gender" 
                              value="unspecified" 
                         />
                    </div>
               </div>
          </section>
     )
}