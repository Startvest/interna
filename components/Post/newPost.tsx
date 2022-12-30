import styles from './post.module.scss';
import {
     IoImageOutline,
     IoVideocamOutline,
     IoCloseCircle
} from 'react-icons/io5';
import { IPost } from '../../server/db/Feed';
import {useState, useRef} from 'react';
import Image from 'next/image';

export const NewPost = ({addPost}:{addPost : (post:IPost) => void}) =>{
     const [newPost, setNewPost] = useState("");
     const imageInputRef = useRef<HTMLInputElement>(null);
     const [media, setMedia] = useState("");
     const videoInputRef = useRef<HTMLInputElement>(null);
     const handlePost = () => {
          const data = {           
          //   _id: `testId${Math.floor(Math.random() * 100)}`,
            authorId: "test",
            content: newPost,
            createdAt: Date(),
            image: media,
            likes: ["test"],
            comments: [
               {
                    authorId: "test",
                    content: "This is a test comment on a test post",
                    createdAt: Date().toString(),
                    likes:[]
               }
            ],
          }
          addPost(data);
          setNewPost("");
          setMedia("");
        }
     return(
          <div className={styles.post}>
               <input type="text" placeholder="Write a post.." value={newPost} onChange={(e) => setNewPost(e.target.value)}/>
               {media.length>0 && <div className={styles.pickImg}><IoCloseCircle className={styles.closeIcon} size={20} onClick={() => setMedia("")}/><img src={media}  alt="Pick image"/></div>}
               <div className={styles.newPost}>
                    <div className={styles.newPostIcon}>
                         <span><IoImageOutline size={30} onClick={(e) => {
                              e.preventDefault(); 
                              imageInputRef.current?.click()
                         }}/>
                         <input  
                         type="file"
                         accept="image/*"
                         className={styles.hidden}
                         onChange={e => {
                              const fileList = e.target.files;
                              if (!fileList) return;
                              setMedia(URL.createObjectURL(fileList[0]));
                            }}
                         id="user_image"
                         name="user_image"
                         ref={imageInputRef}/>
                         </span>
                         <span><IoVideocamOutline size={30}/></span>
                    </div>

                    <div className={styles.buttonContainer}>
                         <button onClick={() => handlePost()}>Post</button>
                    </div>
               </div>
          </div>
     )
}
