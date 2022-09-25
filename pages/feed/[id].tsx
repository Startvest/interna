import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  IoChatboxOutline,
  IoEllipse,
  IoHeart,
  IoHeartOutline,
  IoSendOutline,
  IoShareSocialOutline,
} from 'react-icons/io5';
import { MdChevronLeft } from 'react-icons/md';
import { Avatar } from '../../components/Avatar';
import { CommentList } from '../../components/Comment/commentList';
import DisplayDate from '../../components/DisplayDate';
import styles from '../../components/Post/post.module.scss';
import { Toolbar } from '../../components/Toolbar';
import { post } from '../../services/enums/post';
import { IPost } from '../../services/enums/types';

export const PostDetail: React.FC = () => {
  const { id } = useRouter().query;
  const [currentPost, setPost] = useState<IPost>();
  const [liked, setLiked] = useState(false);
  const router = useRouter();

  let heartIcon = liked ? <IoHeart size={20} /> : <IoHeartOutline size={20} />;

  const sharePost = () => {
    if (!currentPost) return;
    navigator.share({
      title: `Check out this post by ${currentPost.author}`,
      text: currentPost.content,
      url: `https://getinterna.com/post/${currentPost._id}`,
    });
  };

  useEffect(() => {
    const curr = post.find((post) => post._id === id);
    setPost(curr);
  }, []);

  return (
    <>
    {!currentPost && (
     <div className={styles.noPost}>
          Sorry, this post does not exist
     </div>
    )}
      {currentPost && (
        <div className={styles.largePost}>
          <Toolbar>
            <MdChevronLeft size={30} onClick={() => router.back()} className={styles.backIcon}/>
            <h4>Post</h4>
          </Toolbar>
          <div className={styles.userInfo}>
            <Avatar src="/assets/images/user.png" size="small" />

            <div>
              <span>
                <h3>{currentPost.author.name}</h3>
                <IoEllipse size={7} />
                <DisplayDate date={currentPost.createdAt} show={'ago'} />
              </span>
              <p>{currentPost.author.position}</p>
            </div>
          </div>

          <div className={styles.postContent}>{currentPost.content}</div>

          <div className={styles.largeimageHolder}>
            <img src={currentPost.image} alt={`a post`} />
          </div>

          <div className={styles.postActions}>
            <span onClick={() => setLiked(!liked)}>
              {heartIcon}
              <p>{currentPost.likes.length}</p>
            </span>
            <span>
              <IoChatboxOutline size={20} />
              <p>{currentPost.comments.length}</p>
            </span>
            <span>
              <IoSendOutline size={20} />
              <p>Send</p>
            </span>
            <span onClick={sharePost}>
              <IoShareSocialOutline size={20} className={styles.icon} />
              <p>Share</p>
            </span>
          </div>
          <div className={styles.comments}>
            <span>Comments</span>
            <CommentList comments={currentPost.comments} />
          </div>
        </div>
      )}
    </>
  );
};

export default PostDetail;
