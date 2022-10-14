import { useState } from "react";
import { IoEllipse } from "react-icons/io5";
import { Avatar } from "../Avatar";
import DisplayDate from "../DisplayDate";
import styles from './chat.module.scss';
import {useRouter} from 'next/router';
import {ChatProps} from '../../services/enums/chats';

export const Chat: React.FC<ChatProps> = (props) => {
    const {id, dateCreated, profileURL, sender, messages, opened} = props;
    const [openedState, setOpened] = useState(opened);
    const router = useRouter();
    const handleChatClick =  () =>{
        setOpened(true);
        router.push(`/messages/${id}`)
    }
    return(
        <div onClick={handleChatClick} className={styles.chat}>
            <Avatar src={profileURL} size="small" className={styles.avatar} />
            <div className={styles.details}>
                <span>
                    <h3>{sender}</h3>
                    <IoEllipse size={5}/>
                    <DisplayDate date={dateCreated} show={'ago'}/>
                </span>
                {messages[0] && <p>{(messages[0].content.length > 28) ? messages[0].content.substring(0, 28)+" ...": messages[0].content}</p>}
            </div>
            {
                !openedState ? <span className={styles.openedIndicator}/> : null
            }
        </div>
    )
}