import styles from './modal.module.scss';
import {IoCloseOutline} from 'react-icons/io5';
type ModalProps = {
    isOpen: boolean, //State to open the modal
    children?: JSX.Element | JSX.Element[],
    closeModal: Function | any,
}


export const Modal: React.FC<ModalProps> = ({ isOpen, children, closeModal }) => {    
    if(!isOpen) return null
    return(
        <div className={styles.modalBackdrop} >
            <div className={styles.modalContainer}>
                <span className={styles.cancelIcon} onClick={closeModal}><IoCloseOutline size={30}/></span>
                { children }
            </div>
        </div>
    )
}