import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { NavBar } from '../../components/FloatingNavbar';
import { AppHeader } from '../../components/header';
import { NewPost, Post } from '../../components/Post';
import { post } from '../../services/enums/post';
import { RefreshIcon } from '../../components/RefreshIcon';
import { IPost } from '../../services/enums/types';
import {useSession} from "next-auth/react";

interface FeedProps{
  isMobile: boolean;
}
const Feed = ({isMobile}:FeedProps) => {
  const [showToast, setShowToast] = useState(true);
  const [posts, setPosts] = useState<IPost[]>(post);
  const addPost=(data: IPost)=>{
    setPosts([data, ...posts]);
  }
  const {status, data:session} = useSession();
  
  useEffect(() => {
    // if(status === "unauthenticated") Router.replace("/login");
    console.log(status);
    console.log(session);
  }, [status])
  return (
    <>
      <AppHeader pageName={'Feed | Interna'} />
      <NewPost addPost={addPost}/>
      {/* {showToast && <RefreshIcon setToast={setShowToast}/>} */}
      <div>
        {posts.map((post) => (
          <Post key={post._id} postData={post} isMobile={isMobile}/>
        ))}
      </div>

      <NavBar />
    </>
  );
};

export default Feed;

import { GetServerSideProps } from 'next';
import { getDevice } from '../../server/getDevice';
import Router from 'next/router';
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  return {
    props: {
      isMobile: Boolean(getDevice(req))
    }, // will be passed to the page component as props
  };
};
