import { NavBar } from "../../components/FloatingNavbar";
import { AppHeader } from "../../components/header";
import { Notification } from "../../components/Notification";

const NotificationsPage: React.FC = () => {
    return(
    <main>
        <AppHeader pageName={'Your Notifications'}/>
        <div className="content">
            <h2>Notifications for you</h2>

            <Notification
                title="You just gained a new follower 1!"
                content="Fortune Alebiosu started following you."
                dateCreated={new Date().toUTCString()}
            />

            <Notification
                title="You just gained a new follower 2!"
                content="Fortune Alebiosu started following you."
                dateCreated={new Date().toUTCString()}
            />
            
            <Notification
                title="You just gained a new follower 3!"
                content="Fortune Alebiosu started following you."
                dateCreated={new Date().toUTCString()}
            />

        </div>
        <NavBar/>

    </main>
    )
}

export default NotificationsPage;