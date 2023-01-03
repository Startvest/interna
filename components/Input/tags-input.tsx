import { TagsInput } from 'react-tag-input-component';
import styles from './input-styles.module.scss';

interface TagInputProps {
    name: string,
    labelName: string,
    className?: string,
    inputClassName?:string,
    value?: string[],
    onChange?: (value: string[]) => void,
}
export const TagInput: React.FC<TagInputProps> = ({ name, labelName, className, value, onChange }) => {
    return(
        <div className={`${styles.inputGroup} ${className}`}>
            <label htmlFor={name} className={styles.inputLabel}>
                {labelName}
            </label>
            <TagsInput
                value={value}
                onChange={onChange}
                classNames={{ input: 'tag-input', tag: 'tag' }}
            />
        </div>
    )
}