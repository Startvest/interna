import styles from './input-styles.module.scss'


interface SelectProps 
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
        labelName: string;
}


export const Select: React.FC<SelectProps> = (props) => {
    const { className, name, labelName, children } = props
    return (
        <div className={`${styles.inputGroup} ${className}`}>
            <label htmlFor={name} className={styles.inputLabel}>
                {labelName}
            </label>
            <select title={labelName}>{children}</select>
        </div>
    )
}

