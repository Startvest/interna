import { useState } from "react";
import { IoEllipse, IoCloseCircleOutline } from "react-icons/io5"
import DisplayDate from "../DisplayDate";
import styles from "./notification.module.scss";


type NotificationProps = {
    title: string,
    content: string,
    dateCreated: any
}

export const Notification: React.FC<NotificationProps> = ({ title, dateCreated, content }) => {
    
    const [cancelled, setCancelled] = useState(false);
    
    return(
        <div className={`${styles.notification} ${cancelled ? styles.cancelled : null}`}>
            <span>
                <h3>{title}</h3>
                <IoEllipse size={5}/>
                <DisplayDate date={dateCreated} show={'ago'}/>
                
                <span onClick={() => setCancelled(true)} className={styles.end}>
                    <IoCloseCircleOutline size={20}/>
                </span>
            </span>
            <div>
                <p>{content}</p>
            </div>
        </div>
    )
} 