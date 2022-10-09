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

type PostProps =  {
    postData: IPost;
    isMobile: boolean;
}
export const Post: React.FC<PostProps> = ({postData, isMobile}) => {
  const { _id, author, content, createdAt, image, likes , comments} = postData;
  const [showMore, setShowText] = useState(false);
  const router = useRouter();
  const [liked, setLiked] = useState(likes.includes("12d999hj"));
  const [noLikes, setNoLikes] = useState(likes.length);
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
  
  const handleLike = () =>{
    setLiked(!liked);
    (liked) ? setNoLikes(noLikes-1) : setNoLikes(noLikes+1);
  }
  return (
    <div className={styles.post} >
        {shareModal && <ShareModal isOpen={shareModal} closeModal={() => setShareModal(!shareModal)} postId={_id}/>}
      <div onClick={() => router.push(`/feed/${_id}`)}>
      <div className={styles.userInfo}>
        <Avatar size="small" src={author.image} />

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
        {content.length < 100 && <span>{content}</span>}
        {content.length >= 100 && 
        <>
        {(showMore) ? content : content.substring(0, 70) + '...'}
        <span className={styles.showMoreBtn} onClick={(e) => {e.stopPropagation(); setShowText(!showMore)}}>
        {showMore ? ' see less' : 'see more'}
        </span>
        </>}
      </div>

      {image && image.length > 1 &&
      <div
        className={styles.imageHolder}
      >
         <img src={image} alt={`a post`} />
      </div>
      }
    </div>
      <div className={styles.postActions}>
        <span onClick={() => handleLike()}>
            {heartIcon}
            <p>{noLikes}</p>
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
