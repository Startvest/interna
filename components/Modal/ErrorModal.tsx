import {useState} from 'react';
import styles from './modal.module.scss';
import {Modal} from './Modal';
import {IoAlertCircleOutline} from "react-icons/io5";

type ModalProps = {
     isOpen: boolean, //State to open the modal
     closeModal: Function | any,
     message?: string
}

export const ErrorModal: React.FC<ModalProps> = ({isOpen, closeModal, message}) => {    
     return(
          <>
               <Modal isOpen={isOpen} closeModal={closeModal}>
               <IoAlertCircleOutline size={70} className={styles.errorIcon}/>
               <div className={styles.errorText}>
                    {(message) ? message: "Oops, An error has occurred, please try again later"}
               </div>
               </Modal>
          </>
     )
}