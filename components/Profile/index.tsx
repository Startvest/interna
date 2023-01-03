import { MdOutlineSchool, MdOutlineLocationOn, MdOutlineLink, MdArrowBack } from 'react-icons/md';
import { IoMailOutline, IoCalendarOutline } from 'react-icons/io5';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { BiBuildings } from 'react-icons/bi';
import styles from './profile.module.scss';
import {useState} from 'react';
import { useRouter } from 'next/router'
import { IProfile } from '../../server/db';
import DisplayDate from '../DisplayDate';


export const Profile = ({profileData}:{ profileData: IProfile}) =>{
     const router = useRouter();
     const { _id, name, username, headline, link, banner, image, connections, position, location, createdAt} = profileData;
     const isLoggedinUser = username === "@hanif"; //Use session to get if it is the logged in users account

     const profileHeaderStyle = {
          // backgroundImage: `url('/assets/images/post.png')`,
          backgroundImage: `url(${banner})`,
      }
      const [connected, setConnected] = useState(connections.includes("63b030c13a37647b2079a2ce")); //useSession to get logged in user id 
     return(
          <section className={styles.profileContainer}>
          <section className={styles.profileIntro}>
              <div style={profileHeaderStyle} className={styles.profileHeader}>
                  <span className={styles.arrowBack} onClick={() => router.back()}>
                      <MdArrowBack size={25}/>
                  </span>
              </div>
              {(isLoggedinUser) ?  
              <div className={styles.actions} onClick={() => router.push('/settings')}>
                  {/* <IoMailOutline size={30}/> */}
                  <Button className={`${styles.connectBtn}`}>
                      Edit profile
                  </Button>
              </div>
              :
              <div className={styles.actions}>
                  <IoMailOutline size={30}/>
                  <Button className={`${(connected) ? styles.connectedBtn:styles.connectBtn}`} onClick={() => setConnected(!connected)}>
                      {(connected) ? "Connected": "Connect"}
                  </Button>
              </div>
              }
              <div className={styles.avatar}>
                  <Avatar src={image}/>
              </div>
          </section>
          <section className={styles.profile}>
              <div className={styles.profileNames}>
                  <h3>{name}</h3>
                  <p>{username}</p>
              </div>
              <div className={styles.detailsRow}>
                  <p>{headline}
                      {/* Fullstack Developer with the MERN stack. Looking to connect with like 
                      minds and build great things. */}
                  </p>
              </div>
              {position[0] && 
              <div className={`${styles.detailsRow} ${styles.light}`}>
                  {position[0].company_name &&
                  <span>
                      <BiBuildings/>
                      <p>{position[0].company_name}</p>
                  </span>
                  }
                  {/* <span>
                      <MdOutlineSchool/>
                      <p>Nile University of Nigeria</p>
                  </span> */}
              </div>
              }
              <div className={`${styles.detailsRow} ${styles.light}`}>
                  <span>
                      <MdOutlineLink/>
                      <a href={link} className='secondary'>
                          {link}
                      </a>
                  </span>
  
                  <span>
                      <MdOutlineLocationOn/>
                      <p>{location}</p>
                  </span>
  
                  <span>
                      <IoCalendarOutline/>
                      <p>Joined <DisplayDate date={createdAt} show={"date"}/></p>
                  </span>
  
              </div>

              {connections.length > 0 &&
               <div className={`${styles.detailsRow} ${styles.light}`}>
                    <span>
                         {connections.length} connections
                    </span>
               </div>
              }
          </section>
          </section>
  
     )
}