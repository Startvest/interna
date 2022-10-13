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
    const [cancelAnimation, setCancelAnimation] = useState(false);
    const handleClose = () =>{
        setCancelAnimation(true);
        setTimeout(() => {
            setCancelled(true);
        },1000)
    }
    return(
        <>
        {!cancelled &&
        <div className={`${styles.notification} ${cancelAnimation ? styles.cancelled : null}`}>
            <span>
                <h3>{title}</h3>
                <IoEllipse size={5}/>
                <DisplayDate date={dateCreated} show={'ago'}/>
                
                <span onClick={handleClose} className={styles.end}>
                    <IoCloseCircleOutline size={25}/>
                </span>
            </span>
            <div>
                <p>{content}</p>
            </div>
        </div>
    }
    </>
    )
} 