import {useState} from 'react';
import styles from './modal.module.scss';
import {Modal} from './Modal';
import {Button} from '../Button';
import{
     IoCopyOutline,
     IoLogoTwitter,
     IoLogoDiscord,
     IoLogoLinkedin,
     IoLogoFacebook
}from 'react-icons/io5';

type ModalProps = {
     isOpen: boolean, //State to open the modal
     closeModal: Function | any,
     postId?: string,
 }
export const ShareModal: React.FC<ModalProps> = ({isOpen, closeModal, postId}) => {    
     const Sharelink = `https://getinterna.com/feed/${postId}`;
     const [copyText, setCopyText] = useState("Copy");

     const copyLink = () =>{
          navigator.clipboard.writeText(Sharelink);
          setCopyText("Copied!");
          setTimeout(() => {
               setCopyText("Copy");
          }, 3000)
     }
    return(
        <>
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <div className={styles.header}>Share this Post</div>
          <div className={styles.sharelink}>
               {Sharelink}
          </div>
          <div className={styles.copyButtonContainer}>
          <Button className={styles.copyButton} onClick={() => copyLink()}><IoCopyOutline size={20} className={styles.copylogo}/>{copyText}</Button>
          </div>
          <div className={styles.shareContainer}>
               <div className={styles.text}>Share on:</div>
               <div className={styles.icons}>
                    <IoLogoTwitter size={40} className={styles.logo}/>
                    <IoLogoDiscord size={40} className={styles.logo}/>
                    <IoLogoLinkedin size={40} className={styles.logo}/>
                    <IoLogoFacebook size={40} className={styles.logo}/>
               </div>
          </div>
          
        </Modal>
        </>
    )
}