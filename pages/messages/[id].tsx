import { ChatHead } from "../../components/Chat"; 
import { Chats, ChatProps} from "../../services/enums/chats";
import {useState, useEffect, useRef} from 'react';
import styles from './messages.module.scss';
import {useRouter} from "next/router";
import {ChatMessage, AddChat,} from "../../components/Chat"
interface IChats{
    _id: string,
    content: string,
    createdAt: string,
    me?: boolean,
}
const ChatPage: React.FC = () => {
    const { id } = useRouter().query;
    const [chat, setChat] = useState<ChatProps>();
    
    useEffect(() => {
        const curr = Chats.filter((c) => c.id === Number(id))[0];
        setChat(curr);
    },[])

    const addChat=(data: IChats)=>{
        const newChats = chat; 
        newChats?.messages.push(data);
        setChat(newChats);
      }
    return(
        <main>
            {!chat && 
            <h2>This chat does not exist</h2>}

            {chat && <>
                <ChatHead image={chat.profileURL} name={chat.sender}/>
                {/* chats section */}
                <div className={styles.chatWindow}>
                    {chat.messages.map(message => <ChatMessage key={message._id} message={message}/>)}
                </div>
                <AddChat addChat={addChat}/>
            </>}
            
        </main>
    )
}

export default ChatPage;