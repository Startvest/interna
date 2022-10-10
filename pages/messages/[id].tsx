import { BiImageAdd } from "react-icons/bi";
import { IoSend } from "react-icons/io5";

import styles from './messages.module.scss';
const ChatPage: React.FC = () => {
    return(
        <main>

            <div className={styles.input}>
                <span>
                    <BiImageAdd />
                </span>
                <input placeholder="Enter a message"/>
                <span className={styles.sendBtn}>
                    <IoSend />
                </span>
            </div>

        </main>
    )
}

export default ChatPage;