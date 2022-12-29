import styles from './input-styles.module.scss';

type InputProps = {
    name: string,
    placeholder?: string,
    labelName: string,
    type?: string;
    inputClassName?: string,
    onChange?: any,
    className?: string,
    value?: string|number|string[],
    reg?: any,
    error?: string,
    useTags?: boolean,
}


export const Input:React.FC<InputProps> = (props) => {
    const { className, useTags, value, type, name, onChange, inputClassName, placeholder, labelName, reg, error} = props;
    
    return(
        <div className={`${styles.inputGroup} ${className}`}>
            <label htmlFor={name} className={styles.inputLabel}>
                {labelName}
            </label>
            <input value={value} onChange={() => onChange} className={inputClassName} id={name} type={type} title={name} placeholder={placeholder}  {...reg}/>
            {error && <span className={styles.errorText}>{error}</span>}
        </div>
    )
}
