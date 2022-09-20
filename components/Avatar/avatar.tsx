import styles from './avatar.module.scss';

type AvatarProps = {
    src: string
    alt?: string
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
    return(
        <div className={styles.avatar}>
            <img src={src} alt={alt?alt:'profile-avatar'} />
        </div>
    )
}