import {useRef, useState, useEffect} from 'react';
import styles from './login.module.scss';
import {Input} from '../../components/Input';
import { UseFormRegister } from 'react-hook-form';
import { CompleteSignup } from '../../types';
import {useMutation} from 'react-query';
import {getProfile} from '../../services/profile';


interface ProfileFormProps {
     image: string;
     setImage: Function;
     formRegister: UseFormRegister<CompleteSignup>
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ formRegister, image, setImage }) =>{
     const imageInputRef = useRef<HTMLInputElement>(null);
     const profileMutation = useMutation(getProfile);
     const [username, setUsername] = useState({text: '', good: false});

     const uploadImage = (e:any) => {
          e.preventDefault(); 
          imageInputRef.current?.click();
     }
     const checkUsername = (s:string) =>{
          profileMutation.mutate(s);
     }

     useEffect(() => {
          if(profileMutation.isSuccess){
            console.log(profileMutation.data);
            if(profileMutation.data){
              setUsername({text: "Username exists", good:false})
            }else{
               setUsername({text: "Username Good", good:true})
            }
          }
        }, [profileMutation.isError, profileMutation.isSuccess])

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
                    onChange={(e: any) => {console.log(e.target.value); checkUsername(e.target.value)}}
                    placeholder="@username"
                    labelName={'Username'}
                    reg={formRegister('username')}
               />
               <span className={styles.subtext}>{(profileMutation.isLoading) ? 'Loading...' : <span className={(username.good) ? styles.subtext : styles.errorText}>{username.text}</span>}</span>

               <Input
                    inputClassName={styles.profileInput}
                    type="email"
                    name="email"
                    onChange={(e: any) => console.log(e.target.value)}
                    placeholder="example@getinterna.com"
                    labelName={'Email Address'}
                    reg={formRegister('email')}
                    isDisabled
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