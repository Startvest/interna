import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { Bullets } from '../../components/Bullets';
import { Header } from '../../components/header';
import { WorkExperienceForm } from '../../components/LoginForm/ExperienceForm';
import styles from '../../components/LoginForm/login.module.scss';
import { ProfileForm } from '../../components/LoginForm/ProfileForm';
import { ResumeForm } from '../../components/LoginForm/ResumeForm';
import { ThemeIcon } from '../../components/ThemeIcon';
import Styles from './complete-signup.module.scss';
// import { CompleteSignup } from '../../types';
import { useSession } from 'next-auth/react';
import { ICreateProfile } from '../../server/db';

interface FeedProps {
  isMobile: boolean;
}

const CompleteSignup = ({ isMobile }: FeedProps) => {
  const [image, setImage] = useState<string>(
    '/assets/illustrations/avatar.svg'
  );
  const router = useRouter();
  const [swiper, setSwiper] = useState<SwiperType>();
  const [activeTab, setActiveTab] = useState<number>(0);
  const { data: session } = useSession();

  const goNext = async (e: any, s: number) => {
    e.preventDefault();
    if (s === 0) await trigger(['name', 'username', 'gender']);
    if (s === 1) await trigger(['headline', 'skills', 'link']);
    if (Object.keys(errors).length === 0) {
      swiper?.slideNext();
    }
  };

  const handleInputSave = () => {
    // localStorage.setItem(session?.userId, JSON.stringify(getValues()));
    localStorage.setItem(
      '63b030c13a37647b2079a2ce',
      JSON.stringify(getValues())
    );
  };

  useEffect(() => {
    setValue('image', image);
  },[image])

  useEffect(() => {
    if (session?.user) {
      setValue('name', session?.user?.name || '');
      setValue('email', session?.user?.email || '');
    }
    if(localStorage.getItem('63b030c13a37647b2079a2ce')){
      const form = JSON.parse(localStorage.getItem('63b030c13a37647b2079a2ce') as string); //session?.userId
      reset(form);
    }
    
  }, [session?.user]);

  const goBack = (e: any) => {
    e.preventDefault();
    swiper?.slidePrev();
  };

  const { register,trigger,setValue,reset,formState: { errors },getValues,} = useForm<ICreateProfile>({
    defaultValues: {
      name: '',
      username: '@',
      email: 'hanif.adedotun@gmail.com',
      gender: 'none',
      headline: '',
      skills: [],
      link: 'www.',
      position: [],
      image: '',
    },
    mode: 'onChange',
  });

  return (
    <div className={styles.container}>
      <Header pageName="Login to interna" head />
      <ThemeIcon />
      <form
        method="POST"
        onSubmit={(e: any) => {
          e.preventDefault();
          console.log(getValues());
        }}
      >
        <Bullets value={activeTab} />
        <Swiper
          //navigation={true}
          className={styles.swiper}
          //pagination={pagination}
          modules={[Pagination, Navigation]}
          spaceBetween={0}
          style={{ width: '100vw' }}
          slidesPerView={1}
          onSwiper={(e) => setSwiper(e)}
          onSlideChange={(e) => setActiveTab(e.activeIndex)}
          allowTouchMove={false}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <ProfileForm
              formRegister={register}
              errors={errors}
              image={image}
              setImage={setImage}
              handleInputSave={handleInputSave}
            />

            <div
              className={`${Styles.container} flex items-center justify-end`}
            >
              <button
                title="Move to Next Slide"
                onClick={(e) => goNext(e, 0)}
                className={`${styles.nextBtn} primary`}
              >
                Next
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.swiperSlide}>
            <WorkExperienceForm
              formRegister={register}
              errors={errors}
              setFormValue={setValue}
              handleInputSave={handleInputSave}
            />

            <div className={styles.buttonContainer}>
              <button
                title="Move to Next Slide"
                disabled={false}
                onClick={goBack}
                className={`${styles.nextBtn} outline-primary`}
              >
                Previous
              </button>

              <button
                title="Move to Next Slide"
                onClick={(e) => goNext(e, 1)}
                className={`${styles.nextBtn} primary`}
              >
                Next
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.swiperSlide}>
            <ResumeForm 
            formRegister={register} 
            setFormValue={setValue} 
            handleInputSave={handleInputSave}/>

            <div className={styles.buttonContainer}>
              <button
                title="Move to Next Slide"
                onClick={goBack}
                className={`${styles.nextBtn} outline-primary`}
              >
                Previous
              </button>

              <button
                title="Submit"
                type="submit"
                className={`${styles.nextBtn} primary`}
              >
                Submit
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </form>
    </div>
  );
};

export default CompleteSignup;
