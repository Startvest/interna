import { ChatHead } from "../../components/Chat"; 
import { Chats, ChatProps} from "../../services/enums/chats";
import {useState, useEffect, useRef} from 'react';
import styles from './messages.module.scss';
import {useRouter} from "next/router";
import {ChatMessage, AddChat} from "../../components/Chat"
const ChatPage: React.FC = () => {
    const { id } = useRouter().query;
    const [chat, setChat] = useState<ChatProps>();
    
    useEffect(() => {
        const curr = Chats.filter((c) => c.id === Number(id))[0];
        setChat(curr);
        console.log(new Date())
    },[])

    return(
        <main>
            {!chat && 
            <h2>This chat does not exist</h2>}

            {chat && <>
                <ChatHead image={chat.profileURL} name={chat.sender}/>
                {/* chats section */}
                <div className={styles.chatWindow}>
                    {/* {[...Array(50)].map(v => <h3>my name</h3>)} */}
                    {chat.messages.map(message => <ChatMessage key={message._id} message={message}/>)}
                    {/*  */}
                </div>
               
                <AddChat/>
            </>}
            
        </main>
    )
}

export default ChatPage;