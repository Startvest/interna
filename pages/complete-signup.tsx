import {useRef, useState} from 'react';
import type { NextPage } from 'next';
import { Header } from '../components/header';
import styles from '../components/LoginForm/login.module.scss';
import {Input} from '../components/Input';
import {ThemeIcon} from '../components/ThemeIcon';
import { useRouter } from 'next/router';
import {ProfileForm} from '../components/LoginForm/ProfileForm';
import {WorkExperienceForm} from '../components/LoginForm/ExperienceForm';
import { SwiperRef } from 'swiper/react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { PaginationOptions } from 'swiper/types'
import 'swiper/css';
import 'swiper/css/pagination';
import { ResumeForm } from '../components/LoginForm/ResumeForm';
interface FeedProps{
  isMobile: boolean;
}
const CompleteSignup = ({isMobile}: FeedProps) => {
    const [image, setImage] = useState<string>('/assets/illustrations/avatar.png');
    const router = useRouter();
    const swiper = useSwiper();

    const pagination: PaginationOptions = {
      clickable: true,
      bulletClass: 'swiper-pagination-bullet',
    }

     return(
         <div className={styles.container}>
             <Header pageName='Login to interna' head/>
             <ThemeIcon/>
             {/* 
             <img className={styles.headImage} src='/assets/illustrations/welcome.svg'/> 
             <h1 className={styles.header}>Complete your Profile</h1>
             <div className={styles.subtext}>
               We would like to know more about you!
             </div>
             
             */}

               <Swiper 
                navigation={true}
                className={styles.swiper}
                pagination={pagination}
                modules={[Pagination, Navigation]}
                spaceBetween={0}
                style={{ width: '100vw'}}
                slidesPerView={1}
                >
                <SwiperSlide className={styles.swiperSlide}>
                  <ProfileForm image={image} setImage={setImage}/>

                  <div className={styles.buttonContainer}>
                    <button 
                      title='Move to Next Slide'
                      disabled={false}
                      onClick={() => swiper.slideNext()} 
                      className={`${styles.nextBtn} primary`}>
                      Previous
                    </button>

                    <button 
                      title='Move to Next Slide'
                      onClick={() => console.log('hi')} 
                      className={`${styles.nextBtn} primary`}>
                      Next
                    </button>
                  </div>
                
                </SwiperSlide>

                <SwiperSlide className={styles.swiperSlide}>
                  <WorkExperienceForm/>
                </SwiperSlide>

                <SwiperSlide className={styles.swiperSlide}>
                  <ResumeForm/>
                </SwiperSlide>
               </Swiper>
         </div>
     )
}

export default CompleteSignup;