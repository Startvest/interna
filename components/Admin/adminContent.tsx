import styles from './admin.module.scss';

type ContentProps = {
     children: any,
}
export const AdminContent: React.FC<ContentProps> = (props)=>{
     return(
          <div className={styles.contentContainer}>
               { props.children }
          </div>

     )     
}