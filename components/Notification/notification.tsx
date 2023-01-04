import { useState } from "react";
import { IoEllipse, IoCloseCircleOutline } from "react-icons/io5"
import { INotification } from "../../server/db/Notification";
import DisplayDate from "../DisplayDate";
import styles from "./notification.module.scss";


type NotificationProps = {
    data: INotification
}

export const Notification: React.FC<NotificationProps> = ({data}) => {
    const {_id, title, link, read, content, authorId, createdAt} = data    
    const [cancelled, setCancelled] = useState(false);
    const [cancelAnimation, setCancelAnimation] = useState(false);
    const handleClose = () =>{
        setCancelAnimation(true);
        setTimeout(() => {
            setCancelled(true);
        },1000)
    }
    return(
        <>
        <div key={_id.toString()} className={`${styles.notification} ${cancelAnimation ? styles.cancelled : null}`}>
            <span>
                <h3>{title}</h3>
                <IoEllipse size={5}/>
                <DisplayDate date={createdAt} show={'ago'}/>
                
                <span onClick={handleClose} className={styles.end}>
                    <IoCloseCircleOutline size={25}/>
                </span>
            </span>
            <div>
                <p>{content}</p>
            </div>
        </div>
    </>
    )
} 