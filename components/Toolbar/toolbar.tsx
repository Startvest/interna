import styles from './toolbar.module.scss';

type ToolbarProps = {
    children: JSX.Element[]|JSX.Element|string|number
}
export const Toolbar: React.FC<ToolbarProps> = ({ children }) => {
    return(
        <div className={styles.toolbar}>
            { children }
        </div>
    )
}