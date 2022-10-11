import { IoMailOutline, IoCalendarOutline } from 'react-icons/io5';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { NavBar } from '../../components/FloatingNavbar'
import styles from './profile.module.scss';
import { BiBuildings } from 'react-icons/bi';
import { Post } from "../../components/Post";
import { post } from "../../services/enums/post";
import { MdOutlineSchool, MdOutlineLocationOn, MdOutlineLink, MdArrowBack } from 'react-icons/md';
import { Header } from '../../components/header';
import { useRouter } from 'next/router'
import {useState} from 'react';

type ProfileProps = {
    isMobile: boolean,
  }

const ProfilePage: React.FC<ProfileProps> = ({isMobile}) => {
    const profileHeaderStyle = {
        backgroundImage: `url('/assets/images/post.png')`,
    }
    const [connected, setConnected] = useState(false);
    const router = useRouter()
    return(
    <main>
        <Header pageName={"John Doe's Profile"}/>
        <section className={styles.profileContainer}>
        <section className={styles.profileIntro}>
            <div style={profileHeaderStyle} className={styles.profileHeader}>
                <span className={styles.arrowBack} onClick={() => router.back()}>
                    <MdArrowBack size={25}/>
                </span>
            </div>
            <div className={styles.actions}>
                <IoMailOutline size={30}/>
                <Button className={`${(connected) ? styles.connectedBtn:styles.connectBtn}`} onClick={() => setConnected(!connected)}>
                    {(connected) ? "Connected": "Connect"}
                </Button>
            </div>
            <div className={styles.avatar}>
                <Avatar src="/assets/images/user2.svg"/>
            </div>
        </section>
        <section className={styles.profile}>
            <div className={styles.profileNames}>
                <h3>John Doe</h3>
                <p>@johndoe</p>
            </div>
            <div className={styles.detailsRow}>
                <p>
                    Fullstack Developer with the MERN stack. Looking to connect with like 
                    minds and build great things.
                </p>
            </div>
            <div className={`${styles.detailsRow} ${styles.light}`}>
                <span>
                    <BiBuildings/>
                    <p>Google</p>
                </span>
                <span>
                    <MdOutlineSchool/>
                    <p>Nile University of Nigeria</p>
                </span>
            </div>
            <div className={`${styles.detailsRow} ${styles.light}`}>
                <span>
                    <MdOutlineLink/>
                    <a href='https://portfolio.com' className='secondary'>
                        johndoe.me
                    </a>
                </span>

                <span>
                    <MdOutlineLocationOn/>
                    <p>Abuja</p>
                </span>

                <span>
                    <IoCalendarOutline/>
                    <p>Joined June 2022</p>
                </span>

            </div>
        </section>
        </section>
        <section className={styles.userPosts}>
        {
            post.map(post => (
                <Post key={post._id} postData={post} isMobile={isMobile}/>
            ))
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