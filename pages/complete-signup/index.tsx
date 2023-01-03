import { useRef, useState } from 'react';
import type { NextPage } from 'next';
import { Header } from '../../components/header';
import styles from '../../components/LoginForm/login.module.scss';
import {ThemeIcon} from '../../components/ThemeIcon';
import { useRouter } from 'next/router';
import {ProfileForm} from '../../components/LoginForm/ProfileForm';
import {WorkExperienceForm} from '../../components/LoginForm/ExperienceForm';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { PaginationOptions, Swiper as SwiperType } from 'swiper/types'
import 'swiper/css';
import 'swiper/css/pagination';
import { ResumeForm } from '../../components/LoginForm/ResumeForm';
import { Bullets } from '../../components/Bullets';
import Styles from "./complete-signup.module.scss";
import { useForm } from 'react-hook-form';
import { CompleteSignup } from '../../types';

interface FeedProps{
  isMobile: boolean;
}



const CompleteSignup = ({isMobile}: FeedProps) => {
  const [image, setImage] = useState<string>('/assets/illustrations/avatar.png');
  const router = useRouter();
  const [swiper, setSwiper] = useState<SwiperType>();
  const [activeTab, setActiveTab] = useState<number>(0);


  const goNext = (e:any) => {
    e.preventDefault();
    swiper?.slideNext();
  }

  const goBack = (e:any) => {
    e.preventDefault();
    swiper?.slidePrev();
  }

  const { register, setValue, getValues } = useForm<CompleteSignup>({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      gender: undefined,
      headline: "",
      skills: [],
      link: "",
      resume: []
    }
  })

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
        
        */
      }
      <form 
        method='POST'
        onSubmit={(e:any) => {
          e.preventDefault()
          console.log(getValues())
        }}
      >

        <Bullets value={activeTab}/>
          <Swiper 
            //navigation={true}
            className={styles.swiper}
            //pagination={pagination}
            modules={[Pagination, Navigation]}
            spaceBetween={0}
            style={{ width: '100vw'}}
            slidesPerView={1}
            onSwiper={(e) => setSwiper(e)}
            onSlideChange={(e) => setActiveTab(e.activeIndex)}
            allowTouchMove={false}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <ProfileForm formRegister={register} image={image} setImage={setImage}/>
              
              <div className={`${Styles.container} flex items-center justify-end`}>
                <button 
                  title='Move to Next Slide'
                  onClick={goNext} 
                  className={`${styles.nextBtn} primary`}>
                  Next
                </button>
              </div>
            
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlide}>
              <WorkExperienceForm formRegister={register} setFormValue={setValue}/>

              <div className={styles.buttonContainer}>
                <button 
                  title='Move to Next Slide'
                  disabled={false}
                  onClick={goBack} 
                  className={`${styles.nextBtn} outline-primary`}>
                  Previous
                </button>

                <button 
                  title='Move to Next Slide'
                  onClick={goNext} 
                  className={`${styles.nextBtn} primary`}>
                  Next
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlide}>
              <ResumeForm formRegister={register} setFormValue={setValue}/>

              <div className={styles.buttonContainer}>
                <button 
                  title='Move to Next Slide'
                  onClick={goBack} 
                  className={`${styles.nextBtn} outline-primary`}>
                  Previous
                </button>

                <button 
                  title='Submit'
                  type='submit'
                  className={`${styles.nextBtn} primary`}>
                  Submit
                </button>

              </div>
            </SwiperSlide>
          </Swiper>
        </form>
    </div>
  )
}

export default CompleteSignup;