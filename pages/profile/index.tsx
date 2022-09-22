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

const ProfilePage: React.FC = () => {
    const profileHeaderStyle = {
        backgroundImage: `url('/assets/images/post.png')`,
    }
    return(
    <main>
        <Header pageName={"John Doe's Profile"}/>
        <section className={styles.profileIntro}>
            <div style={profileHeaderStyle} className={styles.profileHeader}>
                <span className={styles.arrowBack}>
                    <MdArrowBack size={25}/>
                </span>
            </div>
            <div className={styles.actions}>
                <IoMailOutline size={30}/>
                <Button className={styles.connectBtn}>
                    Connect
                </Button>
            </div>
            <div className={styles.avatar}>
                <Avatar src="/assets/images/user2.png"/>
            </div>
        </section>
        <section className={styles.profile}>
            <div className={styles.profileNames}>
                <h3>John Doe</h3>
                <p>@johndoe</p>
            </div>
            <div className={styles.detailsRow}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aliquam nulla urna, gravida adipiscing odio.                
                </p>
            </div>
            <div className={styles.detailsRow}>
                <span>
                    <BiBuildings/>
                    <p>Google</p>
                </span>
                <span>
                    <MdOutlineSchool/>
                    <p>Nile University of Nigeria</p>
                </span>
            </div>
            <div className={styles.detailsRow}>
                <span>
                    <MdOutlineLink/>
                    <a href='https://portfolio.com' className='secondary'>
                        portfolio.com
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
        <section className={styles.userPosts}>
        {
            post.map(post => (
                <Post key={post._id} {...post} />
            ))
        }
        </section>
        <NavBar/>
    </main>
    )
}

export default ProfilePage;