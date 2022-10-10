import { Chat } from "../../components/Chat";
import { FloatingActionButton } from "../../components/FloatingActionButton";
import { NavBar } from "../../components/FloatingNavbar";
import { AppHeader } from "../../components/header";
import { Searchbar } from "../../components/Searchbar";
import { Chats } from "../../services/enums/chats";

import { IoAdd } from "react-icons/io5";
import styles from './messages.module.scss';
const MessagesPage: React.FC = () => {
    return(
        <main>
            <AppHeader pageName="Messages"/>
            <Searchbar placeholder="Search for messages"/>
            <div>
            {
                Chats.map(chat => (
                    <Chat key={chat.id} {...chat} />
                ))
            }
            </div>
            <FloatingActionButton
                className={styles.addChatBtn} 
                icon={<IoAdd size={25}/>}
            />
            <NavBar/>
        </main>
    )
}

export default MessagesPage;