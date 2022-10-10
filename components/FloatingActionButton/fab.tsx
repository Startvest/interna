import styles from './fab.module.scss';

type FloatingActionButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    icon: any,
    className?:string
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick, icon, className }) => {
    return(
        <button className={`${styles.fab} ${className}`} onClick={onClick}>
            { icon }
        </button>
    )
}