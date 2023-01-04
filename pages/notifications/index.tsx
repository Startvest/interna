import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { NavBar } from '../../components/FloatingNavbar';
import { AppHeader } from '../../components/header';
import { LoadingIcon } from '../../components/loadScreen';
import { Notification } from '../../components/Notification';
import styles from '../../components/Notification/notification.module.scss';
import { INotification } from '../../server/db/Notification';
import { getUnreadNotification } from '../../services/notification';

const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const notificationMutation = useMutation(getUnreadNotification);

  useEffect(() => {
    notificationMutation.mutate('63b030c13a37647b2079a2ce');
  }, []);

  useEffect(() => {
    if (notificationMutation.isSuccess) {
        console.log(notificationMutation.data);
        setNotifications(notificationMutation.data);
    } else {
      console.log(notificationMutation.error);
    }
  }, [notificationMutation.isError, notificationMutation.isSuccess]);
  return (
    <main>
      <AppHeader pageName={'Your Notifications'} />
      <div className="content">
        <h2 className={styles.headText}>Notifications for you</h2>
        {notificationMutation.isLoading && <LoadingIcon size="35" />}
        {notificationMutation.isSuccess && notifications.length == 0 && (
          <p>You have no unread notifications</p>
        )}
        {notifications &&
          notifications.length == 0 ? <EmptyNotification/> :
          notifications.map((notification) => (
            <Notification key={notification._id.toString()} data={notification} />
          ))}

        {/*
            <Notification
                title="You just gained a new follower 2!"
                content="Fortune Alebiosu started following you."
                dateCreated={'Tue, 11 Oct 2022 16:43:35 GMT'}
            />
            
            <Notification
                title="You just gained a new follower 3!"
                content="Fortune Alebiosu started following you."
                dateCreated={'Tue, 11 Oct 2022 12:43:35 GMT'}
            /> */}
      </div>
      <NavBar />
    </main>
  );
};

const EmptyNotification: React.FC = () => (
    <div className={styles.emptyNotification}>
        <img src="/assets/notification.svg" alt='empty-notification'/>
        <h3>Oops, looks like you are a silent mover....</h3>
    </div>
)

export default NotificationsPage;
