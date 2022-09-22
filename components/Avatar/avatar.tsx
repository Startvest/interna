import styles from './avatar.module.scss';

type AvatarProps = {
    src: string
    alt?: string
    size?: 'small'|'large'
}

export const Avatar: React.FC<AvatarProps> = ({ size, src, alt }) => {
    return(
        <img 
        className={`${styles.avatar} ${size === 'small'? styles.small : styles.large}`} 
        src={src} alt={alt?alt:'profile-avatar'}/>
    )
}