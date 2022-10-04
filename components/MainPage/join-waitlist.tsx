import { NextPage } from "next";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { Modal } from "../Modal";
import Image from "next/image";
import { ThemeIcon } from "../ThemeIcon";
import styles from '../../styles/waitlist.module.scss';
import { Button } from "../Button";
import { useTheme } from "next-themes"
import { useRouter } from "next/router";
import Footer from "../Footer";
import {uniqueSellingPoints} from '../../services/enums/usp';

type Props = {
    isWaitlist: boolean,
    isMobile: boolean,
}

export const LandingPage: React.FC<Props> = ({ isWaitlist, isMobile }) => {

    const [modalOpen, setModal] = useState<boolean>(false);
    const [submitCount, setSubmitCount] = useState<number>(0)
    const [hasSubmittedForm, setHasSubmitted] = useState(false)
    const { resolvedTheme } = useTheme();
    const router = useRouter();

    const illustration = resolvedTheme === 'light' ? '/assets/illustration.svg' : '/assets/illustration-dark.svg';

    return(
    <div className={styles.waitlistPage}>
        <header className={styles.landingPageHeader}>
            <span className={styles.headerLogo}>
                {/* <Image src="/fav.ico" width={'100px'} height={'100px'}/>
                <h2>Interna</h2> */}
                <img src="/assets/logohead.svg" />
            </span>

            <span className={styles.headerCta}>
                <Button onClick={() => setModal(true)}>
                    Join our waitlist
                </Button>
                <ThemeIcon size={30} absolute={false}/>
            </span>
           
        </header>
        <main>
        {!isMobile && 
            <div className={styles.introContainer}>  
               <section className={styles.introduction}>
                    <h1>
                        Where <span className="secondary">Students</span> and <span className="secondary">Interns</span> call home
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
                        Where <span className="secondary">Students</span> and <span className="secondary">Interns</span> call home
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

                <section className={styles.landingPageWelcome}>
                    <div className={styles.descriptionGroup}>
                        <h4>What is Interna?</h4>
                        <p>
                            A social platfrom where you can easily share your internship experiences
                            with other students in your community, as well as connect with them.
                        </p>
                    </div>
                </section>

            {/* Desktop View */}
            {!isMobile && 
                <section className={styles.deskUsp}>
                    {uniqueSellingPoints.map((usp, k) => 
                    <div key={k} className={`${styles.box}`}>
                        <div className={styles.iconCont}>
                            <img src={usp.icon}/>
                        </div>
                        <h2>{usp.title}</h2>
                        <p>{usp.desc}</p>
                    </div>)}
                </section>
            }

            {isMobile && 
                <section className={styles.mobileUsp}>
                    {uniqueSellingPoints.map((usp, k) => 
                    <div className={`${styles.box}`}>
                        <div key={k} className={styles.iconCont}>
                            <img src={usp.icon}/>
                        </div>
                        <h2>{usp.title}</h2>
                        <p>{usp.desc}</p>
                    </div>)}
                </section>
            }

            <section>
                <div className={`${styles.designHolder} ${styles.firstHolder}`}>
                    <img src={'/assets/feed-mockup.svg'} alt="Feed mockup"/>
                </div>

                <div className={styles.designHolder}>
                    <img src={'/assets/profile-mockup.svg'} alt="Profile mockup"/>
                </div>
            </section>

            <section className={styles.ourSponsors}>
                <h3>Supported by</h3>

                <div className={styles.carouselHolder}>
                    <div className={styles.carousel}>
                        <span className={styles.carouselSlide}>
                            <Image src="/assets/nile-logo.svg" width={'200px'} height={'60px'} />
                        </span>

                        <span className={styles.carouselSlide}>
                            <Image src="/assets/gdsc_logo.svg" width={'200px'} height={'60px'} />
                        </span>
                        
                        <span className={styles.carouselSlide}>
                            <Image src="/assets/sc_logo.png" width={'200px'} height={'60px'} />
                        </span>

                    </div>
                </div>

                <div className={styles.getStarted} >
                    <h3>Gain valuable information</h3>
                    <h5>
                        Join the community of <span className="secondary">forward thinking students</span> taking
                        a <span className="secondary">bold</span> step towards their career growth
                    </h5>

                    <Button onClick={() => setModal(true)}>
                        Join the waitlist
                    </Button>
                </div>
            </section>

            
        </main>
        <Footer/>

        <Modal isOpen={modalOpen} closeModal={() => setModal(!modalOpen)}>
        {
            !hasSubmittedForm ?
            (<React.Fragment>
                <Form setHasSubmitted={setHasSubmitted} /> 
            </React.Fragment> )

            : hasSubmittedForm && submitCount >= 1 ? 
            (<React.Fragment>
                <div className={styles.formHeader}>
                    <h2>
                        You are <span className={styles.important}>already</span> in!
                    </h2>
                </div>

                <div className={styles.gifHolder}>
                    <Image src="/assets/sassy.gif" layout="fill" alt="minions excited"/>
                </div>
                
                <h4>We know you are exicited, we are too!</h4>
                <p>
                    You will definetely be the first to get an email
                    from us when we first launch!! 🚀
                </p>

                <button className={styles.dismissButton} onClick={() =>{
                    setModal(false)
                }}>
                Dismiss
            </button>

            </React.Fragment>
            )

            :(
                <React.Fragment>
                    <div className={styles.formHeader}>
                        <h2>
                            You are <span className={styles.important}>in!</span> 
                        </h2>
                    </div>
    
                    <div className={styles.gifHolder}>
                        <Image src="/minions.gif" layout="fill" alt="minions excited"/>
                    </div>
    
                    <p>
                        You will definetely be the first to get an email
                        from us when we first launch!! 🚀
                    </p>

                    <button className={styles.dismissButton} onClick={() =>{
                        setModal(false)
                        setSubmitCount(submitCount+1)
                    }}>
                        Dismiss
                    </button>
                </React.Fragment>) 
        }  
        </Modal>



    </div>
    )
}

type FormProps = {
    setHasSubmitted: Dispatch<React.SetStateAction<boolean>>
}

const Form: React.FC<FormProps> = ({ setHasSubmitted }) => {
    const { getValues, setValue, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            email: ''
        }
    });

    function submitForm(){
        console.log(getValues())
        setHasSubmitted(true)
    }

    return(
        <form className={styles.waitlistForm} onSubmit={handleSubmit(submitForm)}>
            <div className={styles.formHeading}>
                <h2>
                    Join our <span className={styles.important}>waitlist!</span>
                </h2>
                <p>
                    By joining you are one of the very first people to try our 
                    product when it launches!
                </p>
            </div>
            
            <Input 
                onChange={(e:any) => setValue("name", e.target.value)}
                labelName="Enter your full name"
                name="name" 
                placeholder="eg. John Doe" 
                inputClassName={styles.waitlistInput}
            />

            <Input 
                onChange={(e:any) => setValue("email", e.target.value)}
                labelName="Enter your email address"
                name="email" 
                placeholder="eg. example@abc.com"
                inputClassName={styles.waitlistInput}
            />

            <button className={styles.waitlistButton} type="submit">
                Join!
            </button>
        </form>
    )
}



