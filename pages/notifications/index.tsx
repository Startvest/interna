import { NavBar } from "../../components/FloatingNavbar";
import { AppHeader } from "../../components/header";
import { Notification } from "../../components/Notification";
import styles from "../../components/Notification/notification.module.scss";

const NotificationsPage: React.FC = () => {
    return(
    <main>
        <AppHeader pageName={'Your Notifications'}/>
        <div className="content">
            <h2 className={styles.headText}>Notifications for you</h2>

            <Notification
                title="You just gained a new follower!"
                content="Fortune Alebiosu started following you."
                dateCreated={'Tue, 11 Oct 2022 15:43:35 GMT'}
            />

            <Notification
                title="You just gained a new follower 2!"
                content="Fortune Alebiosu started following you."
                dateCreated={'Tue, 11 Oct 2022 16:43:35 GMT'}
            />
            
            <Notification
                title="You just gained a new follower 3!"
                content="Fortune Alebiosu started following you."
                dateCreated={'Tue, 11 Oct 2022 12:43:35 GMT'}
            />

        </div>
        <NavBar/>

    </main>
    )
}

export default NotificationsPage;