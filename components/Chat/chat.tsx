import { IoEllipse } from "react-icons/io5";
import { Avatar } from "../Avatar";
import DisplayDate from "../DisplayDate";
import styles from './chat.module.scss';

type ChatProps = {
    id: string|number,
    dateCreated: any,
    profileURL: string,
    sender: string,
    message: string
}
export const Chat: React.FC<ChatProps> = (props) => {
    return(
        <div className={styles.chat}>
            <Avatar src={props.profileURL} size="small" className={styles.avatar} />
            <div>
                <span>
                    <h3>{props.sender}</h3>
                    <IoEllipse size={5}/>
                    <DisplayDate date={props.dateCreated} show={'ago'}/>
                </span>
                    <p>{props.message.substring(0, 45)+"..."}</p>
            </div>
        </div>
    )
}