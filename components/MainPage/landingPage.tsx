import { NextPage } from "next";
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
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

import { motion, useScroll } from "framer-motion";
import { ScrollAnimationWrapper } from "../ScrollAnimationWrapper";

type Props = {
    isWaitlist: boolean,
    // isMobile: boolean,
}

export const LandingPage: React.FC<Props> = ({ isWaitlist }) => {
    const isMobile = window.document.body.clientWidth  <= 700;
    // console.log(screen.availWidth);


    const [modalOpen, setModal] = useState<boolean>(false);
    const [hasSubmittedForm, setHasSubmitted] = useState(false);
    const [submitCount, setSubmitCount] = useState<number>(0);
    const { resolvedTheme } = useTheme();
    const router = useRouter();
    
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
            /> 
        </Modal>

        <header className={styles.landingPageHeader}>
            <span className={styles.headerLogo}>
                {/* <img src="/assets/logohead.svg" /> */}
                <Image src="/fav.ico" width={'70px'} height={'70px'}/>
                <h2 className={styles.h2}>Interna</h2>
            </span>

            <span className={styles.headerCta}>
                    {
                        isWaitlist ? (
                        <Button onClick={() => setModal(true)}>
                            Join the waitlist
                        </Button>
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
        {!isMobile && 
            <div className={styles.introContainer}>  
               <section className={styles.introduction}>
                    <h1>
                        The <span className="secondary">Official</span> platform for <span className="secondary">Interns</span>
                    </h1>

                    <p>Welcome to the community of students and interns!</p>
                    {
                        isWaitlist ? (
                        <Button onClick={() => setModal(true)}>
                            Join the waitlist
                        </Button>
                        ) : (
                        <Button onClick={() => router.push('/signup')}>
                            Join the community
                        </Button>
                        )
                    }
                </section>

                <section className={styles.illustrationHolder}>
                    <img alt="3-students" src={illustration} />
                </section>
            </div>}


            {isMobile && 
            <div className={styles.mobileIntroContainer}>  
                <section className={styles.illustrationHolder}>
                    <img alt="3-students" src={illustration} />
                </section>

               <section className={styles.introduction}>
                    <h1>
                        The <span className="secondary">Official</span> platform for <span className="secondary">Interns</span>
                    </h1>

                    <p>Welcome to the community of students and interns!</p>
                    {
                        isWaitlist ? (
                        <Button onClick={() => setModal(true)}>
                            Join the waitlist
                        </Button>
                        ) : (
                        <Button onClick={() => router.push('/signup')}>
                            Join the community
                        </Button>
                        )
                    }
                </section> 
            </div>}

            <h2 className={styles.h2}>Hear from our interns</h2>
            <div className={styles.testimonial}>
                <Testimonial />
                <Testimonial />
                <Testimonial />
            </div>

                <motion.section className={styles.landingPageWelcome}>
                    <ScrollAnimationWrapper type="horizontal-slide-in" performOnce>
                        <motion.div className={styles.descriptionGroup}>
                            <h4>What is Interna?</h4>
                            <p>
                                A social platfrom where you can easily share your internship experiences
                                with other students in your community, as well as connect with them.
                            </p>
                        </motion.div>
                    </ScrollAnimationWrapper>
                </motion.section>



            {/* Desktop View */}
            {!isMobile && 
                    <section className={styles.deskUsp}>
                        {uniqueSellingPoints.map((usp, k) => 
                        <ScrollAnimationWrapper className={`${styles.box}`} key={k} performOnce>
                            <div>
                                <div className={styles.iconCont}>
                                    <img src={usp.icon} alt="Icon"/>
                                </div>
                                <h2>{usp.title}</h2>
                                <p>{usp.desc}</p>
                            </div>
                        </ScrollAnimationWrapper>
                        )}
                    </section>
            }

            {isMobile && 
                    <section className={styles.mobileUsp}>
                        {uniqueSellingPoints.map((usp, k) => 
                        <ScrollAnimationWrapper key={k} performOnce>
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
            }

            <section>
                <ScrollAnimationWrapper performOnce>
                    <div className={`${styles.designHolder} ${styles.firstHolder}`}>
                        <img src={'/assets/feed-mockup.svg'} alt="Feed mockup"/>
                    </div>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper performOnce>
                    <div className={styles.designHolder}>
                        <img src={'/assets/profile-mockup.svg'} alt="Profile mockup"/>
                    </div>
                </ScrollAnimationWrapper>
            </section>

            <section className={styles.ourSponsors}>
                <h3>Supported by</h3>

                <div className={styles.carouselHolder}>
                    <motion.div 
                        className={styles.carousel}>
                        <motion.span                         
                            className={styles.carouselSlide}>
                            <Image src="/assets/nile-logo.svg" width={'200px'} height={'60px'} />
                        </motion.span>

                        <motion.span className={styles.carouselSlide}>
                            <Image src="/assets/gdsc_logo.svg" width={'200px'} height={'60px'} />
                        </motion.span>
                        
                        <motion.span className={styles.carouselSlide}>
                            <Image src="/assets/sc_logo.png" width={'200px'} height={'60px'} />
                        </motion.span>

                    </motion.div>
                </div>

                <ScrollAnimationWrapper performOnce>
                    <div className={styles.getStarted} >
                        <h3>Gain valuable information</h3>
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
                            <Button onClick={() => router.push('/signup')}>
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





