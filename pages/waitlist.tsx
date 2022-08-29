import { NextPage } from "next";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../components/Input";
import { Modal } from "../components/modal";
import Image from "next/image";

import styles from '../styles/waitlist.module.scss';

const WaitlistPage: NextPage = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [submitCount, setSubmitCount] = useState<number>(0)

    return(
        <div className={styles.waitlistPage}>
            <Form triggerModalFunction={setModalOpen}/>

            <Modal isOpen={modalOpen}>
                {
                    submitCount < 1 ? (
                    <React.Fragment>
                        <div className={styles.formHeader}>
                            <h2>
                                You are <span className={styles.important}>in!</span> 
                            </h2>
                        </div>
        
                        <div className={styles.gifHolder}>
                            <Image src="/minions.gif" layout="fill" />
                        </div>
        
                        <p>
                            You will definetely be the first to get an email
                            from us when we first launch!! 🚀
                        </p>
                    </React.Fragment>
                    ) : (
                    <React.Fragment>
                        <div className={styles.formHeader}>
                            <h2>
                                You are <span className={styles.important}>already</span> in!
                            </h2>
                        </div>
        
                        <div className={styles.gifHolder}>
                            <Image src="/minions.gif" layout="fill" />
                        </div>
                        
                        <h4>We know you're exicited, we are too!</h4>
                        <p>
                            You will definetely be the first to get an email
                            from us when we first launch!! 🚀
                        </p>
                    </React.Fragment>
                    )

                }    
                <button className={styles.dismissButton} onClick={() =>{
                    setModalOpen(false)
                    setSubmitCount(submitCount+1)
                }}>
                    Dismiss
                </button>
            </Modal>
        </div>
    )
}

type FormProps = {
    triggerModalFunction: Dispatch<SetStateAction<boolean>>
}

const Form: React.FC<FormProps> = ({ triggerModalFunction }) => {
    const { getValues, setValue, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            email: ''
        }
    });

    function submitForm(){
        console.log(getValues())
        triggerModalFunction(true)
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

export default WaitlistPage;