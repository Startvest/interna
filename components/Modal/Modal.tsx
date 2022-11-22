import styles from './modal.module.scss';
import {IoCloseOutline} from 'react-icons/io5';
import { useEffect } from 'react';
type ModalProps = {
    isOpen: boolean, //State to open the modal
    children?: JSX.Element | JSX.Element[],
    closeModal: Function | any,
}


export const Modal: React.FC<ModalProps> = ({ isOpen, children, closeModal }) => {    
    useEffect(() => {
        if(isOpen)
            document.body.setAttribute('class', 'backdrop-no-scroll')
        else
            document.body.removeAttribute('class')
    }, [isOpen])
    
    if(!isOpen) return null
    return(
        <div className={styles.modalBackdrop} onClick={closeModal}>
            <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                <span className={styles.cancelIcon} onClick={closeModal}><IoCloseOutline size={30}/></span>
                { children }
            </div>
        </div>
    )
}