import styles from './avatar.module.scss';

type AvatarProps = {
    src: string
    alt?: string
    width: string
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, width }) => {
    return(
        <div className={styles.avatar}>
            <img src={src} alt={alt?alt:'profile-avatar'} width={width || '50px'}/>
        </div>
    )
}