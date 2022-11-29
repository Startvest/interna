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
import 'swiper/css';
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
export const LandingPage: React.FC<Props> = ({ isWaitlist }) => {
    const [modalOpen, setModal] = useState<boolean>(false);
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
                    isWaitlist ? (<>
                    <Button onClick={() => setModal(true)}>
                        Join the waitlist
                    </Button>
                    </>
                    ) : (
                    <>
                    <Button className={styles.altButton} onClick={() => router.push('/login')}>
                        Login
                    </Button>
                    <Button onClick={() => router.push('/signup')}>
                        Signup
                    </Button>
                    </>
                    
                    )
                }
                <ThemeIcon size={30} absolute={false}/>
            </span>
        </header>

        <main> 
            <div className={styles.mobileIntroContainer}>  
                <section className={styles.illustrationHolder}>
                    <Image 
                        alt="3-students" 
                        src={illustration} 
                        width="500px" height={'250px'}
                        priority={true}
                    />
                </section>

               <section className={styles.introduction}>
                    <h1>
                        The <span className="secondary">Official</span> platform for <span className="secondary">Interns</span>
                    </h1>

                    <p>Welcome to the community of students and interns!</p>
                    <div ref={joinWaitlistButtonRef} className={styles.buttonsCont}>
                        <a href={'#interna_description'}>
                            <Button className={styles.altButton}>
                                Learn More
                            </Button>
                        </a>
                        {
                            isWaitlist ? (
                            <Button className={styles.primaryButton} onClick={() => setModal(true)}>
                                Join the waitlist
                            </Button>
                            ) : (
                            <Button className={styles.primaryButton} onClick={() => router.push('/signup')}>
                                Join the community
                            </Button>
                            )
                        }
                    </div>
                </section> 
            </div>

            {!isWaitlist && 
            <section className={styles.testimonialCont}>
                <h2 className={styles.h2}>Hear from our interns</h2>
                <div className={styles.testimonial}>
                    <Testimonial />
                    <Testimonial />
                    <Testimonial />
                </div>
            </section>}

                <section className={styles.landingPageWelcome}>
                    <ScrollAnimationWrapper type="fade-in" performOnce>
                        <a id="interna_description">
                            <div className={styles.descriptionGroup}>
                                <h4>What is Interna?</h4>
                                <p>
                                    Interna is a solution designed to provide internship opportunities
                                    to every student, equip them with professional tools and provide a community
                                    of students who have undergone internships and students who are looking 
                                    for internships. 
                                </p>
                            </div>

                            <div className={styles.imgLogo}>
                                <Image src="/icons/white.svg" width={'80px'} height={'80px'} alt="interna logo"/>
                            </div>

                        </a>

                        <div className={styles.features}>
                            <div>
                                {tools.slice(0,tools.length/2).map((tool, i) => 
                                <div className={styles.featureCover} key={i}>
                                    <span className={styles.featureIcon}></span> 
                                    <span className={styles.featureText}>{tool.text}</span>
                                </div>
                                )}
                            </div>

                            <div>
                                {tools.slice(tools.length/2,tools.length).map((tool, i) => 
                                <div className={styles.featureCover} key={i}>
                                    <span className={styles.featureIcon}></span> 
                                    <span className={styles.featureText}>{tool.text}</span>
                                </div>
                                )}
                            </div>
                        </div>
                    </ScrollAnimationWrapper>
                </section>

                <section className={styles.midSection}>
                    <ScrollAnimationWrapper type="horizontal-slide-in" performOnce>
                        <img src="/assets/mid-section.png" className={styles.img}  alt="interna logo"/> 
                    </ScrollAnimationWrapper>
                    <h2>Join to gain acesss to a <span className="secondary">community</span> of like minded students! </h2>                   
                </section>
                


                {/* <h2 className={styles.h2}>You get these on Interna</h2> */}
                <section className={styles.mobileUsp}>
                    {uniqueSellingPoints.map((usp, k) => 
                    <ScrollAnimationWrapper key={k} performOnce type="horizontal-slide-in">
                        <div className={`${styles.box}`}>
                            <div  className={styles.iconCont}>
                                <img src={usp.icon} alt="Icon"/>
                            </div>
                            <h2>{usp.title}</h2>
                            <p>{usp.desc}</p>
                        </div>
                    </ScrollAnimationWrapper>
                    )}
                </section>

            <section>
                <ScrollAnimationWrapper performOnce>
                    <div className={`${styles.designHolder}`}>
                        <h2>Get access to our <span className="secondary">community</span> of students</h2>
                        <img src={'/assets/feed-mockup.svg'} alt="Feed mockup"/>
                    </div>
                </ScrollAnimationWrapper>

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
                                    <Image src={v} width={'200px'} height={'80px'} alt={v}/>
                                    </span>
                                </SwiperSlide>
                            )}
                         
                            {/* <SwiperSlide>
                            <span                         
                            className={styles.carouselSlide}>
                            <Image src="/assets/nile-logo.svg" width={'200px'} height={'60px'} alt="Nile University of Nigeria"/>
                            </span>
                            </SwiperSlide>

                            <SwiperSlide>
                            <span className={styles.carouselSlide}>
                                <Image src="/assets/gdsc_logo.svg" width={'200px'} height={'60px'} alt="GDSC logo"/>
                            </span>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                            <span className={styles.carouselSlide}>
                                <Image src="/assets/sc_logo.png" width={'200px'} height={'60px'} alt="Startup Campus"/>
                            </span>
                            </SwiperSlide>

                            <SwiperSlide>
                            <span className={styles.carouselSlide}>
                                <Image src="/assets/companies/honoris.jpg" width={'200px'} height={'60px'} alt="Honoris United Universities"/>
                            </span>
                                </SwiperSlide> */}
                        </Swiper>
                    </div>

                {/* <div className={styles.carouselHolder}>
                    <div 
                        className={styles.carousel}>
                        <span                         
                            className={styles.carouselSlide}>
                            <Image src="/assets/nile-logo.svg" width={'200px'} height={'60px'} alt="Nile University of Nigeria"/>
                        </span>

                        <span className={styles.carouselSlide}>
                            <Image src="/assets/gdsc_logo.svg" width={'200px'} height={'60px'} alt="GDSC logo"/>
                        </span>
                        
                        <span className={styles.carouselSlide}>
                            <Image src="/assets/sc_logo.png" width={'200px'} height={'60px'} alt="Startup Campus"/>
                        </span>

                        <span className={styles.carouselSlide}>
                            <Image src="/assets/companies/honoris.jpg" width={'200px'} height={'60px'} alt="Honoris United Universities"/>
                        </span>

                    </div>
                </div> */}

                <ScrollAnimationWrapper performOnce>
                    <div className={styles.getStarted} >
                        <h3>Gain experience early!</h3>
                        <h5>
                            Join the community of <span className="secondary">forward thinking students</span> taking
                            a <span className="secondary">bold</span> step towards their career growth
                        </h5>
                        {
                            isWaitlist ? (
                            <Button onClick={() => setModal(true)}>
                                Join the waitlist
                            </Button>
                            ) : (
                            <Button onClick={() => router.push('/login')}>
                                Join the community
                            </Button>
                            )
                        }
                    </div>
                </ScrollAnimationWrapper>
            </section> 
        </main>
        <Footer/>
    </div>
    )
}





