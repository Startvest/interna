import {Avatar} from '../Avatar';
import styles from './chat.module.scss';
import {useRouter} from 'next/router';
import DisplayDate from '../DisplayDate';

interface IMessage {
     message: {
          _id: string,
          content: string,
          createdAt: string,
          me?: boolean,
      }
}
export const ChatMessage = ({message}:IMessage) =>{
     const {_id, content, createdAt, me} = message;
     const router = useRouter();
     const styleType = ((me) ? 'me' : 'you') || 'you';
     console.log(styleType);
     return(
     <div key={_id} className={`${styles.chatContainer} ${styles[styleType]}`}>
          <div className={styles.chatMessage}>{content}</div>
          <span className={styles.date}><DisplayDate date={createdAt} show={'calender'} /></span>
     </div>
     )
}