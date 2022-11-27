import styles from './button.module.scss';

type ButtonProps = {
    type?:'button'|'submit'|'reset'
    className?:string,
    id?: string,
    children: any,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button: React.FC<ButtonProps> = (props) => {
    return(
    <button id={props.id} {...props} className={`${styles.button} ${props.className}`}>
        { props.children }
    </button>
    )
}