import styles from './toggle.module.scss';

type ToogleProps = {
    toggleTitle?: string,
    checked: boolean,
    onChange?: React.ChangeEventHandler
}

export const Toggle: React.FC<ToogleProps> = ({checked, onChange, toggleTitle}) => {    
    return(
        <>
            <input onChange={onChange} className={styles.toggle} title={toggleTitle? toggleTitle:'Toggle'} type="checkbox" id="switch" />
            <label className={styles.toggleLabel} htmlFor="switch"></label>
        </>
    )
}