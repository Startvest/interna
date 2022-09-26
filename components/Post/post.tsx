import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  IoChatboxOutline,
  IoEllipse,
  IoHeart,
  IoHeartOutline,
  IoSendOutline,
  IoShareSocialOutline,
} from 'react-icons/io5';
import { Avatar } from '../Avatar';
import DisplayDate from '../DisplayDate';
import styles from './post.module.scss';
import {IPost} from '../../services/enums/types';
import { ShareModal } from '../../components/Modal/ShareModal';

interface IPostExtended extends IPost{
    isMobile: boolean;
}
export const Post: React.FC<IPostExtended> = (props) => {
const { _id, author, content, createdAt, image, likes , comments, isMobile} = props;
const [showMore, setShowText] = useState(false);
  const router = useRouter();
  const [liked, setLiked] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  let heartIcon = (liked) ? <IoHeart size={25}/> : <IoHeartOutline size={25} />; 

  const sharePost = () => {
    (!isMobile) ? 
    setShareModal(true)
    : navigator.share({
     title: `Check out this post by ${author.name}`,
     text: content,
     url: `https://getinterna.com/feed/${_id}`,
   }); 
  };
  
  return (
    <div className={styles.post} >
        {shareModal && <ShareModal isOpen={shareModal} closeModal={() => setShareModal(!shareModal)} postId={_id}/>}
      <div className={styles.userInfo}>
        <Avatar size="small" src="/assets/images/user.png" />

        <div>
          <span>
            <h3>{author.name}</h3>
            <IoEllipse size={5} />
            <DisplayDate date={createdAt} show={'ago'} />
          </span>
          <p>{author.position}</p>
        </div>
      </div>

      <div className={styles.postContent}>
        {showMore ? content : content.substring(0, 70) + '...'}
        <span
          className={styles.showMoreBtn}
          onClick={() => setShowText(!showMore)}
        >
          {showMore ? ' see less' : 'see more'}
        </span>
      </div>

      <div
        className={styles.imageHolder}
        onClick={() => router.push(`/feed/${_id}`)}
      >
        <img src={image} alt={`a post`} />
      </div>

      <div className={styles.postActions}>
        <span onClick={() => setLiked(!liked)}>
            {heartIcon}
            <p>{likes.length}</p>
        </span>
        <span>
          <IoChatboxOutline size={25} />
          <p>{comments.length}</p>
        </span>
        <span>
          <IoSendOutline size={25} />
          <p>Send</p>
        </span>
        <span onClick={sharePost}>
          <IoShareSocialOutline size={25} className={styles.icon} />
          <p>Share</p>
        </span>
      </div>
    </div>
  );
};
