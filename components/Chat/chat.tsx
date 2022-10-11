import { useState } from "react";
import { IoEllipse } from "react-icons/io5";
import { Avatar } from "../Avatar";
import DisplayDate from "../DisplayDate";
import styles from './chat.module.scss';

type ChatProps = {
    id: string|number,
    dateCreated: any,
    profileURL: string,
    sender: string,
    message: string,
    opened: boolean
}
export const Chat: React.FC<ChatProps> = (props) => {
    const [opened, setOpened] = useState(props.opened);

    return(
        <div onClick={() => setOpened(true)} className={styles.chat}>
            <Avatar src={props.profileURL} size="small" className={styles.avatar} />
            <div className={styles.details}>
                <span>
                    <h3>{props.sender}</h3>
                    <IoEllipse size={5}/>
                    <DisplayDate date={props.dateCreated} show={'ago'}/>
                </span>
                <p>{props.message.substring(0, 28)+"..."}</p>
            </div>
            {
                !opened ? <span className={styles.openedIndicator}/> : null
            }
        </div>
    )
}