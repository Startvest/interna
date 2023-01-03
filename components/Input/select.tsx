import styles from './input-styles.module.scss'


interface SelectProps 
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
        labelName: string;
}


export const Select: React.FC<SelectProps> = (props) => {
    const { className, name, labelName, children, onChange } = props
    return (
        <div className={`${styles.inputGroup} ${className}`}>
            <label htmlFor={name} className={styles.inputLabel}>
                {labelName}
            </label>
            <select onChange={onChange}  title={labelName}>{children}</select>
        </div>
    )
}

