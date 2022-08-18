import styles from "./toast.module.css";
import {Itoast} from "./toastList";

export function Toast({data}: {data: Itoast}) {
     return (
          <div className={`${styles.container} ${styles.notification} ${styles[data.type]} `}>
               <div>
                    {/* <p>{data.title}</p> */}
                    <p>{data.message}</p>
               </div>
          </div>
     )
}