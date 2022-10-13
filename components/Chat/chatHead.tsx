import {Avatar} from '../Avatar';
import styles from './chat.module.scss';
import {useRouter} from 'next/router';
import { IoChevronBackOutline } from 'react-icons/io5';
interface props {
     image: string,
     name: string
}
export const ChatHead = ({image, name}:props) =>{
     const router = useRouter();
     return(
     <div className={styles.chathead}>
          <IoChevronBackOutline size={30} onClick={() => router.back()} className={styles.backIcon}/>
          <Avatar src={image} size="small" className={styles.avatar} />
          <h3>{name}</h3>
     </div>
     )
}