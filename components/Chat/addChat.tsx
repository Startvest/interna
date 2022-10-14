import { IoSend , IoCloseCircle} from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";
import {useRef, useState} from 'react';
import styles from './chat.module.scss';
import {SendLogo} from '../../public/assets/icons/send.js';
import { useTheme } from 'next-themes';

export const AddChat = ({addChat}:{addChat: Function}) => {
     const { resolvedTheme } = useTheme();
     const imageInputRef = useRef<HTMLInputElement>(null);
    const [media, setMedia] = useState("");
    const [chat, setChat] = useState("");

    const handleChat = () => {
     const data = {           
          _id: `testId${Math.floor(Math.random() * 100)}`,
          content: chat,
          createdAt: Date(),
          me: true,
     }
     addChat(data);
     setChat("");
     setMedia("");
   }
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
          <input placeholder="Enter a message" value={chat} onChange={(e) => setChat(e.target.value)}/>
          <span className={styles.sendBtn} onClick={handleChat}>
               <SendLogo fill={(resolvedTheme === 'light') ? '#21295c': '#04de00'}/>
          </span>
          </div>
     </>  
     )

}