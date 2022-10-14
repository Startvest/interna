import { IoImageOutline } from "react-icons/io5";
import { IoSend , IoCloseCircle} from "react-icons/io5";
import { ChatHead } from "../../components/Chat"; 
import { Chats, ChatProps} from "../../services/enums/chats";
import {useState, useEffect, useRef} from 'react';
import styles from './messages.module.scss';
import {useRouter} from "next/router";

const ChatPage: React.FC = () => {
    const { id } = useRouter().query;
    const [chat, setChat] = useState<ChatProps>();
    const imageInputRef = useRef<HTMLInputElement>(null);
    const [media, setMedia] = useState("");

    useEffect(() => {
        const curr = Chats.filter((c) => c.id === Number(id))[0];
        setChat(curr);
    },[])

    return(
        <main>
            {!chat && 
            <h2>This chat does not exist</h2>}

            {chat && <>
                <ChatHead image={chat.profileURL} name={chat.sender}/>
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
            </>}
            
        </main>
    )
}

export default ChatPage;