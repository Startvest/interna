import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { Input } from '../../components/Input';
import { storage } from '../../services/firebase';
import { getProfile } from '../../services/profile';
import { LoadingIcon } from '../loadScreen';
import { ErrorModal } from "../Modal";
import { ProgressBar } from '../progressBar';
import styles from './login.module.scss';

interface ProfileFormProps {
     image: string;
     setImage: Function;
     formRegister: any//UseFormRegister<ICreateProfile>;
     errors:  any,
     handleInputSave: Function
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ formRegister, image, setImage, errors , handleInputSave}) =>{
     const imageInputRef = useRef<HTMLInputElement>(null);
     const profileMutation = useMutation(getProfile);
     const [username, setUsername] = useState({text: '', good: false});
     const [progresspercent, setProgresspercent] = useState(0);
     const [errorModal, setErrorModal] = useState(false);

     const pickImage = (e:any) => {
          e.preventDefault(); 
          imageInputRef.current?.click();
     }
     const checkUsername = (s:string) =>{
          profileMutation.mutate(s);
     }
     const uploadImage = (e:any, file:File) =>{
          e.preventDefault()
          if (!file) return;

          const storageRef = ref(storage, `profile-image/${file.name}`);
          const uploadTask = uploadBytesResumable(storageRef, file);

          uploadTask.on("state_changed",
               (snapshot:any) => {
               const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgresspercent(progress);
               },
               (error) => {
               //    alert(error);
               console.log(error);
               setErrorModal(true);
               },
               () => {
               getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImage(downloadURL);
               });
               }
          );
     }
     

     useEffect(() => {
          if(profileMutation.isSuccess){
            if(profileMutation.data){
              setUsername({text: "Username exists", good:false})
            }else{
               setUsername({text: "Username Good", good:true})
            }
          }
        }, [profileMutation.isError, profileMutation.isSuccess])

     return(
     <>
          <ErrorModal message="Could not Upload Image" isOpen={errorModal} closeModal={() => setErrorModal(false)}/>
          <section className={styles.formContainer}>
               <h2>Personal Information</h2>
               <div className={styles.imageContainer}>
                    <img className={styles.pickImage} src={image} alt="profile"/>
                    <button onClick={pickImage} className={styles.imageBtn}>
                         Pick image
                    </button>
               </div>
               {progresspercent > 0 && <span className={styles.progresspercent}>
                         <ProgressBar completed={progresspercent}/> 
                         <span>{progresspercent}% uploaded</span>   
               </span>  }
                    <input
                         title='Profile Picture Upload'  
                         type="file"
                         accept="image/*"
                         className={styles.hidden}
                         onChange={async (e) => {
                              const fileList = e.target.files;
                              if (!fileList) return;
                              setImage(URL.createObjectURL(fileList[0]));
                              uploadImage(e, fileList[0])
                              handleInputSave();
                         }}
                         id="user_image"
                         name="user_image"
                         ref={imageInputRef}
                    />   
               <Input
                    reg={formRegister('name', {
                         required: `Full name is required`,
                       })}
                    inputClassName={styles.profileInput}
                    type="text"
                    name="name"
                    onChange={(e: any) => handleInputSave()}
                    placeholder="Enter your full name"
                    labelName={'Your full name'}
                    error={errors.name?.message}
               />

               <Input
                    inputClassName={styles.profileInput}
                    type="text"
                    name="username"
                    onChange={(e: any) => {console.log(e.target.value); handleInputSave(); checkUsername(e.target.value)}}
                    placeholder="@username"
                    labelName={'Username'}
                    reg={formRegister('username', {
                         required: "Username is required",
                         pattern: '@'
                    })}
                    error={errors.username?.message}
               />
               <p className={styles.subtext}>{(profileMutation.isLoading) ? <LoadingIcon size={"15"}/> : <span className={(username.good) ? styles.goodText : styles.errorText}>{username.text}</span>}</p>

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
                              onChange={() => handleInputSave()}
                         />
                         <input 
                              className='chip contrast' 
                              {...formRegister('gender', {required: true})} 
                              title='Male' type="radio" name="gender" 
                              value="male" 
                              onChange={() => handleInputSave()}
                         />
                         <input 
                              className='chip contrast'
                              {...formRegister('gender', {required: true})}  
                              title='Prefer not to say' type="radio" name="gender" 
                              value="none" 
                              onChange={() => handleInputSave()}
                         />
                    </div>
               </div>
          </section>
          </>
     )
}