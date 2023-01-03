import { NavBar } from '../../components/FloatingNavbar'
import styles from './profile.module.scss';
import { Post } from "../../components/Post";
import { ICreatePost, ICompletePost } from '../../server/db/Feed';
import { Header } from '../../components/header';
import { useRouter } from 'next/router'
import {useState, useEffect} from 'react';
import {LoadingIcon} from '../../components/loadScreen';
import { useMutation } from 'react-query';
import {getPosts} from '../../services/feed';
import {getProfile} from '../../services/profile';

type ProfileProps = {
    isMobile: boolean,
  }

const ProfilePage: React.FC<ProfileProps> = ({isMobile}) => {
    const router = useRouter();
    const [posts, setPosts] = useState<ICompletePost[]>([]);
    const postsMutation = useMutation(getPosts);
    const profileMutation = useMutation(getProfile);
    const { username } = useRouter().query;

    useEffect(() => {
        profileMutation.mutate(username as string);
      }, [])

    useEffect(() => {
        if(postsMutation.isSuccess){
          setPosts(postsMutation.data);
        }
      }, [postsMutation.isError, postsMutation.isSuccess])
    return(
    <main>
        <Header pageName={"John Doe's Profile"}/>
        {profileMutation.isLoading && <LoadingIcon size="35"/>}
        
        <section className={styles.userPosts}>
        {posts && posts.length > 0 &&
            <div>
            {posts.map((post) => (
                <Post key={post._id.toString()} postData={post} isMobile={isMobile}/>
            ))}
            </div>
        }
        </section>
        <NavBar/>
    </main>
    )
}

export default ProfilePage;

import { GetServerSideProps } from 'next';
import { getDevice } from '../../server/getDevice';
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  return {
    props: {
      isMobile: Boolean(getDevice(req))
    }, // will be passed to the page component as props
  };
};