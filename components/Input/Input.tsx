import styles from './input-styles.module.scss';

type InputProps = {
    name: string,
    placeholder: string,
    labelName: string,
    type?: string;
    inputClassName?: string,
    onChange?: any
}


export const Input:React.FC<InputProps> = ({ type, name, onChange, inputClassName, placeholder, labelName, }) => {
    return(
        <div className={styles.inputGroup}>
            <label htmlFor={name} className={styles.inputLabel}>
                {labelName}
            </label>
            <input onChange={onChange} className={inputClassName} id={name} type={type} title={name} placeholder={placeholder}  />
        </div>
    )
}
