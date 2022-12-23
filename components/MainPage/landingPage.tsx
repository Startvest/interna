import React, {useRef, useState } from "react";
// import { isMobile } from "../../services/isMobile";
import { Modal } from "../Modal";
import Image from "next/image";
import { ThemeIcon } from "../ThemeIcon";
import styles from '../../styles/waitlist.module.scss';
import { Button } from "../Button";
import { useTheme } from "next-themes"
import { useRouter } from "next/router";
import Footer from "../Footer";
import {uniqueSellingPoints} from '../../services/enums/usp';
import {WaitlistForm} from '.';
import {Testimonial} from '../Testimonial';
import {ErrorModal} from '../Modal';
import { useInView, useScroll } from "framer-motion";
import { ScrollAnimationWrapper } from "../ScrollAnimationWrapper";
import {tools} from "../../services/enums/tools";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,} from "swiper";
import "swiper/css/bundle";
import 'swiper/css/autoplay';

type Props = {
    isWaitlist: boolean,
    // isMobile: boolean,
}
const sponsors =[
    "/assets/nile-logo.svg",
    "/assets/gdsc_logo.svg",
    "/assets/sc_logo.png",
    "/assets/companies/paadc2.jpg"
]

const services: Array<{ icon: string, title: string }> = [
    {
        icon: '/assets/tools-icons/file-light.svg',
        title: 'CV Generator'
    },
    {
        icon: '/assets/tools-icons/breifcase-light.svg',
        title: 'Remote Jobs'
    },
    {
        icon: '/assets/tools-icons/mentorship-light.svg',
        title: 'Mentorship Sessions'
    },
    {
        icon: '/assets/tools-icons/interview-light.svg',
        title: 'Interview Prep'
    },
    {
        icon: '/assets/tools-icons/jobs-light.svg',
        title: 'Jobs with our partner firms'
    },
    {
        icon: '/assets/tools-icons/messaging-light.svg',
        title: 'Secure Private Messaging'
    },

]
export const LandingPage: React.FC<Props> = ({ isWaitlist }) => {
    const [modalOpen, setModal] = useState<boolean>(isWaitlist);
    const [errorModal, setErrorModal] = useState<boolean>(false);
    const [hasSubmittedForm, setHasSubmitted] = useState(false);
    const [submitCount, setSubmitCount] = useState<number>(0);
    const { resolvedTheme } = useTheme();
    const router = useRouter();

    const joinWaitlistButtonRef = useRef<HTMLDivElement>(null);

    const isInView = useInView(joinWaitlistButtonRef);
    
    const illustration = resolvedTheme === 'light' ? '/assets/illustration.svg' : '/assets/illustration-dark.svg';
    
    return(
    <div className={styles.waitlistPage}>
         <Modal isOpen={modalOpen} closeModal={() => setModal(!modalOpen)}>
            <WaitlistForm 
                setHasSubmitted={(val) => setHasSubmitted(val)} 
                hasSubmittedForm={hasSubmittedForm} 
                submitCount={submitCount}
                setSubmitCount={(count) => setSubmitCount(count)}
                setModal={() => setModal(!modalOpen)}
                setError={() => {setModal(false); setErrorModal(true)}}
            /> 
        </Modal>

        <ErrorModal isOpen={errorModal} closeModal={() => setErrorModal(!errorModal)}/>

        <header className={styles.landingPageHeader}>
            <span className={styles.headerLogo}>
                <Image src="/fav.ico" width={'70px'} height={'70px'} alt="interna logo"/>
                <h2 className={styles.h2}>Interna</h2>
            </span>

            <span className={styles.headerCta}>
                <ThemeIcon size={30} absolute={false}/>
            </span>
        </header>
        
        {/* Second Header shows up when Join waitlist Button is out of View */}
        <header className={styles.secondHeader} style={{ display: isInView ? 'none' : 'flex' }}>
            <span 
                aria-label="Click here to join the waitlist"
                className={styles.headerCta}>
                <span className={styles.headerLogo}>
                <Image src="/fav.ico" width={'70px'} height={'70px'} alt="interna logo"/>
                </span>
                {
                    <>
                    <Button className={styles.altButton} onClick={() => router.push('/login')}>
                        Login
                    </Button>
                    <Button onClick={() => router.push('/signup')}>
                        Signup
                    </Button>
                    </>
                }
                <ThemeIcon size={30} absolute={false}/>
            </span>
        </header>

        <main className={styles.main}> 

            <img className={styles.blob} src="/assets/blob-with-ellipses.svg" alt="blob-with-ellipses" />
            {/* First Div Is Intro Container */}
            <section className={styles.mobileIntroContainer}>  
                

               <div className={styles.introduction}>
                    <h1>
                        The official platform for <span className="secondary">Interns</span>
                    </h1>

                    <p>Welcome to the community of students and interns!</p>
                    <div ref={joinWaitlistButtonRef} className={styles.buttonsCont}>
                        <a href={'#interna_description'}>
                            <Button className={styles.altButton}>
                                Learn More
                            </Button>
                        </a>
                        {
                            isWaitlist ?
                            <Button className={styles.primaryButton} onClick={() => setModal(true)}>
                                Join the waitlist
                            </Button>
                            :(
                            <Button className={styles.primaryButton} onClick={() => router.push('/signup')}>
                                Join the community
                            </Button>
                            )  

                        }
                    </div>
                </div> 
                <div className={styles.curve}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.fill}></path>
                    </svg>
                </div>
                <img className={styles.ellipses} src="/assets/ellipses-white.svg" alt="ellipses"/>
            </section>
            
            {/*
            
            <section className={styles.testimonialCont}>
                <h2 className={styles.h2}>Hear from our interns</h2>
                <div className={styles.testimonial}>
                <Swiper
                        spaceBetween={50}
                        grabCursor={true}
                        loop={true}
                        centeredSlides={true}
                        slidesOffsetBefore={0}
                        slidesPerView={1}
                        autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                        }}
                        modules={[Autoplay]}>

                        <SwiperSlide>
                            <Testimonial />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Testimonial />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Testimonial />
                        </SwiperSlide>

                </Swiper>
                </div>                
            </section>
                        
            */}

            <section id="interna_description" className={styles.landingPageWelcome}>
                <div className={styles.internaDescription}>
                    <ScrollAnimationWrapper
                        type="fade-in"
                        className={styles.descriptionGroup}
                        performOnce>
                        <h4>
                            What is <span className="secondary">Interna?</span>
                        </h4>
                        <p>
                            Interna is a solution designed to provide internship opportunities
                            to every student, equip them with professional tools and provide a community
                            of students who have undergone internships and students who are looking 
                            for internships. 
                        </p>
                    </ScrollAnimationWrapper>

                    <img className={styles.handFist} src="/assets/icons/hand_fist.svg" alt="hand-fist"/>
                    <img className={styles.handRock} src="/assets/icons/hand_rock.svg" alt="hand-rock"/>

                    <div className={styles.features}>
                        {
                            services.map(service => (
                                <div key={service.title} className={styles.internaFeature}>
                                    <div>
                                        <span className={styles.iconWrapper}>
                                            <Image 
                                                width={'30px'} height={'30px'}
                                                src={service.icon}
                                                alt={service.title}
                                            />
                                        </span>
                                        <h5>{service.title}</h5>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>

            <section className={styles.midSection}>
                <ScrollAnimationWrapper performOnce>
                    <img src="/assets/mid-section.png" className={styles.img}  alt="interna logo"/> 
                </ScrollAnimationWrapper>
                <h2>Join to gain acesss to a <span className="secondary">community</span> of like minded students! </h2>                   
            </section>


            {/* <h2 className={styles.h2}>You get these on Interna</h2> */}
            <section className={styles.mobileUsp}>
                <div className={styles.topLevel}>
                    <div className={styles.box}>
                            <div className={styles.container}>
                                <div className={styles.containerLevel1}>
                                    <img src="/assets/icons/tick.svg" alt="Icon"/>
                                    <h2>Connect with other interns</h2>
                                </div>
                                <p>You can connect with like minded people within your vicinity</p>
                            </div>
                            <h1 className={styles.number}>{1}</h1>
                    </div>


                    <div className={styles.box}>
                        <div className={styles.container}>
                            <div className={styles.containerLevel1}>
                                <img src="/assets/icons/share.svg" alt="Icon"/>
                                <h2>Share your experiences</h2>
                            </div>
                            <p>Share what you have gained from an internship to guide others</p>
                        </div>
                        <h1 className={styles.number}>{3}</h1>
                    </div>
                </div>
                
                <div className={styles.box}>
                    <div className={styles.container}>
                        <div className={styles.containerLevel1}>
                            <img src="/assets/icons/search.svg" alt="Icon"/>
                            <h2>See companies hiring near you</h2>
                        </div>
                        <p>See internship friendly companies aroud you, and make your choice</p>
                    </div>
                    <h1 className={styles.number}>{2}</h1>
                </div>
                
            </section>
                

            <section>
                <ScrollAnimationWrapper className={styles.designHolder} performOnce>
                    <img src={'/assets/feed-mockup.svg'} alt="Feed mockup"/>
                    <h2>Get access to our community of students</h2>
                </ScrollAnimationWrapper>

                
                {
                    /*
                    <ScrollAnimationWrapper performOnce>
                        <div className={`${styles.designHolder} ${styles.altHolder}`}>
                            <h2>See profiles of interns and <span className="primaryText">connect</span> with them easily</h2>
                            <img src={'/assets/profile-mockup.svg'} alt="Profile mockup"/>
                        </div>
                    </ScrollAnimationWrapper>
                    
                    <ScrollAnimationWrapper performOnce>
                        <div className={`${styles.designHolder} `}>
                            <h2>Prepare for your next <span className="secondary">interview!</span></h2>
                            <img src={'/assets/interview-mockup.svg'} alt="Profile mockup"/>
                        </div>
                    </ScrollAnimationWrapper>
                    
                    */
                }
            </section>

            <section className={styles.ourSponsors}>
                <h3>Supported by</h3>
                
                <div>
                    <Swiper
                        spaceBetween={50}
                        grabCursor={true}
                        loop={true}
                        centeredSlides={true}
                        slidesOffsetBefore={0}
                        slidesPerView={3}
                        autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                        }}
                        modules={[Autoplay]}>
                            {sponsors.map((v,i) =>
                                <SwiperSlide key={i}>
                                    <span  className={styles.carouselSlide}>
                                    <Image className={styles.carouselSlideImg} src={v} width={'200px'} height={'80px'} alt={v} objectFit="contain"/>
                                    </span>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>

                <ScrollAnimationWrapper 
                    className={styles.getStarted} 
                    performOnce>
                    <div className={styles.container}>
                        <h3>Gain experience early!</h3>
                        <p>
                            Join the community of <span className="secondary">forward thinking students</span> taking
                            a <span className="secondary">bold</span> step towards their career growth
                        </p>
                        <Button onClick={() => router.push('/signup')}>
                            Join waitlist
                        </Button>
                        <img src={'/assets/ellipses.svg'} alt="ellipses"/>
                    </div>
                </ScrollAnimationWrapper>
            </section> 
        </main>
        <Footer/>
    </div>
    )
}





