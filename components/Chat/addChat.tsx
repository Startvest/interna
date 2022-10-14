import { IoSend , IoCloseCircle} from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";
import {useRef, useState} from 'react';
import styles from './chat.module.scss';

export const AddChat = () => {
     const imageInputRef = useRef<HTMLInputElement>(null);
    const [media, setMedia] = useState("");
     return(
     <>
          {media.length>0 && <div className={styles.pickImg}><IoCloseCircle className={styles.closeIcon} size={20} onClick={() => setMedia("")}/><img src={media}  alt="Pick image"/></div>}
          <div className={styles.input}>
          <span className={styles.imgSpan}>
               <IoImageOutline size={30} onClick={(e) => {
                    e.preventDefault(); 
                    imageInputRef.current?.click()
               }}/>
               <input  
               type="file"
               accept="image/*"
               className={styles.hidden}
               onChange={e => {
                    const fileList = e.target.files;
                    if (!fileList) return;
                    setMedia(URL.createObjectURL(fileList[0]));
                    }}
               id="chat_image"
               name="chat_image"
               ref={imageInputRef}/>
          </span>
          <input placeholder="Enter a message"/>
          <span className={styles.sendBtn}>
               <img src="/assets/icons/send.svg" alt="Send icon"/>
          </span>
          </div>
     </>  
     )

}