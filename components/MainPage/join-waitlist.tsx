import { NextPage } from "next";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { Modal } from "../Modal";
import Image from "next/image";
import { ThemeIcon } from "../ThemeIcon";
import styles from '../../styles/waitlist.module.scss';
import { Button } from "../Button";
import { MdCheck, MdSearch, MdShare } from "react-icons/md"
import { useTheme } from "next-themes"
import { useRouter } from "next/router";
import Footer from "../Footer";

type Props = {
    isWaitlist: boolean
}

export const LandingPage: React.FC<Props> = ({ isWaitlist }) => {

    const [modalOpen, setModal] = useState<boolean>(false);
    const [submitCount, setSubmitCount] = useState<number>(0)
    const [hasSubmittedForm, setHasSubmitted] = useState(false)
    const { resolvedTheme } = useTheme();
    const router = useRouter();

    const illustration = resolvedTheme === 'light' ? '/assets/illustration.svg' : '/assets/illustration-dark.svg'


    return(
    <div className={styles.waitlistPage}>
        <header className={styles.landingPageHeader}>
            <span className={styles.headerLogo}>
                <Image src="/fav.ico" width={'70px'} height={'70px'}/>
                <h2>Interna</h2>
            </span>

            <span className={styles.headerCta}>
                <ThemeIcon />
                <Button onClick={() => setModal(true)}>
                    Join us!
                </Button>
            </span>
        </header>
        <main>
            <section className={styles.illustrationHolder}>
                <Image alt="3-students" src={illustration} width={'250px'} height={'250px'} />
            </section>
        
            <section className={styles.introduction}>
                <h1>
                    Where <span className="secondary">Students</span> and <span className="secondary">Interns</span> call home
                </h1>

                <p>Welcome to the community of students and interns.</p>
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
            {
                isWaitlist ? (
            <section className={styles.internaDetails}>
                <div className={styles.descriptionGroup}>
                    <h4>What is Interna?</h4>
                    <p>
                        A social platfrom where you can easily share your internship experiences
                        with other students in your community, as well as connect with them.
                    </p>
                </div>

                <div className={styles.points}>
                    <span>
                        <MdCheck/>
                    </span>
                    <div className={styles.descriptionGroup}>
                        <h4>Connect with other interns</h4>
                        <p>
                            You can connect with like-minded people
                            within your vicinity.
                        </p>
                    </div>

                </div>

                <div className={styles.points}>
                    <span>
                        <MdSearch/>
                    </span>
                    <div className={styles.descriptionGroup}>
                        <h4>See companies hiring near you</h4>
                        <p>
                            You can connect with like-minded people
                            within your vicinity.
                        </p>
                    </div>
                </div>

                <div className={styles.points}>
                    <span>
                        <MdShare/>
                    </span>
                    <div className={styles.descriptionGroup}>
                        <h4>You can share your experiences</h4>
                        <p>
                            You can connect with like-minded people
                            within your vicinity.
                        </p>
                    </div>
                </div>
            </section>
                ) : (
            <React.Fragment>
                <section className={styles.landingPageWelcome}>
                    <div className={styles.descriptionGroup}>
                        <h4>What is Interna?</h4>
                        <p>
                            A social platfrom where you can easily share your internship experiences
                            with other students in your community, as well as connect with them.
                        </p>
                    </div>
                </section>

                <section className={styles.connectWithOthers}>
                    <div>
                        <span>
                            <h3>Connect with</h3>
                            <h3>other interns</h3>
                        </span>
                        <Image style={{textAlign:'right', marginTop:'25px'}} src="/assets/profile-mockup.png" width={'285.07'} height={'384px'}/>
                    </div>

                </section>

                <section className={styles.shareExperiences}>
                    <div>
                        <span>
                            <h3>Share your</h3>
                            <h3>experiences</h3>
                        </span>
                        <Image style={{marginTop:'25px'}} src="/assets/feed-mockup.png" width={'285.07'} height={'384px'}/>
                    </div>

                </section>


            </React.Fragment>
                )
            }

            <section className={styles.ourSponsors}>
                <h3>Supported by</h3>

                <div className={styles.carouselHolder}>
                    <div className={styles.carousel}>
                        <span className={styles.carouselSlide}>
                            <Image src="/assets/nile-logo.png" width={'200px'} height={'60px'} />
                        </span>

                        <span className={styles.carouselSlide}>
                            <Image src="/assets/gdsc_logo.png" width={'200px'} height={'60px'} />
                        </span>
                        
                        <span className={styles.carouselSlide}>
                            <Image src="/assets/sc_logo.png" width={'200px'} height={'60px'} />
                        </span>

                    </div>
                </div>

                <h3>Get industry knowledge</h3>
                <h5>
                    Join the community of <span className="secondary">forward thinking students</span> taking
                    a <span className="secondary">bold</span> step towards their career growth
                </h5>

                <Button onClick={() => setModal(true)}>
                    Join the waitlist
                </Button>
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



