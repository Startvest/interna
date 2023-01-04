import { useState } from "react";
import { NavBar } from "../../components/FloatingNavbar";
import { AppHeader } from "../../components/header";
import { Notification } from "../../components/Notification";
import styles from "../../components/Notification/notification.module.scss";

const NotificationsPage: React.FC = () => {
    const notification = {
        title: "You just gained a new follower!",
        content: "Fortune Alebiosu started following you.",
        dateCreated: "Tue, 11 Oct 2022 15:43:35 GMT"
    }

    const [notifications, setNotifications] = useState([
        notification, notification, notification
    ])

    return(
    <main>
        <AppHeader pageName={'Your Notifications'}/>
        <div className="content">
            <h2 className={styles.headText}>Notifications for you</h2>
            {
                notifications.length === 0 ? <EmptyNotifications/>
                : notifications.map((notification) => (
                    <Notification {...notification}/>
                ))
            }            
        </div>
        <NavBar/>

    </main>
    )
}

const EmptyNotifications: React.FC = () => (
    <div className={styles.emptyNotification}>
        <img src="/assets/notification.svg" alt="empty-notifications"/>
        <h3>Oops, looks like you are a silent mover....</h3>
    </div>
)

export default NotificationsPage;