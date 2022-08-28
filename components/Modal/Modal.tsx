import styles from './modal.module.scss';

type ModalProps = {
    isOpen: boolean, //State to open the modal
    children?: JSX.Element | JSX.Element[],
}


export const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {    
    if(!isOpen) return null
    return(
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContainer}>
                { children }
            </div>
        </div>
    )
}