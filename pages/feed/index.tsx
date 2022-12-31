import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { NavBar } from '../../components/FloatingNavbar';
import { AppHeader } from '../../components/header';
import { NewPost, Post } from '../../components/Post';
import { post } from '../../services/enums/post';
import { useMutation } from 'react-query';
import { ICreatePost, ICompletePost } from '../../server/db/Feed';
import {useSession} from "next-auth/react";
import {LoadingIcon} from '../../components/loadScreen';
import {getPosts, addPost} from '../../services/feed';

interface FeedProps{
  isMobile: boolean;
}
const Feed = ({isMobile}:FeedProps) => {
  const [showToast, setShowToast] = useState(false);
  const [posts, setPosts] = useState<ICompletePost[]>([]);
  const postsMutation = useMutation(getPosts);
  const addPostMutation = useMutation(addPost);
  const [toastData, setToastData] = useState<Itoast>({
                                      message: "", 
                                      type: 'primary'
                                    })
  
  const {status, data:session} = useSession();
  
  useEffect(() => {
    // if(status === "unauthenticated") Router.replace("/login");
    console.log(status);
    console.log(session);
  }, [status])

  useEffect(() => {
    postsMutation.mutate();
  }, [])

  useEffect(() => {
    if(postsMutation.isSuccess){
      setPosts(postsMutation.data);
    }
  }, [postsMutation.isError, postsMutation.isSuccess])

  const addPostHandler=(data: ICreatePost)=>{
    // setPosts([data, ...posts]);
    addPostMutation.mutate(data);

  }

  useEffect(() => {
    if(addPostMutation.isSuccess){
      postsMutation.mutate();
      setToastData({
        message: "Post addedd successfully",
        type: toastData.type
      });
      setShowToast(true);
    }else{
      console.log(addPostMutation.error);
    }
  }, [addPostMutation.isError, addPostMutation.isSuccess])

  return (
    <>
      <AppHeader pageName={'Feed | Interna'} />
      <NewPost addPost={addPostHandler}/>
      {showToast && <Toast data={toastData} setToast={setShowToast} position='top-right'/>}
      {postsMutation.isLoading && <LoadingIcon size="35"/>}
      {posts && posts.length > 0 &&
        <div>
          {posts.map((post) => (
            <Post key={post._id.toString()} postData={post} isMobile={isMobile}/>
          ))}
        </div>
      }
      {posts.length <= 0 && <div>Sorry no posts to show...</div>}
      <NavBar />
    </>
  );
};

export default Feed;

import { GetServerSideProps } from 'next';
import { getDevice } from '../../server/getDevice';
import Router from 'next/router';
import { Itoast, Toast } from '../../components/toast';
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  return {
    props: {
      isMobile: Boolean(getDevice(req))
    }, // will be passed to the page component as props
  };
};
