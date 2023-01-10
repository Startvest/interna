import { IExperience } from "../../../server/db"
import { IoTrashBinOutline, IoEllipse } from "react-icons/io5"
import styles from './experience.module.scss';
import DisplayDate from "../../DisplayDate";

export const WorkExperience = ({experience}:{experience:IExperience}) => {
     const capitaliseFirstWord = (str:string) => {
          return str.charAt(0).toUpperCase() + str.slice(1);
     }
     return (
          <div className={styles.container}>
               <div className={styles.firstTwo}>
               <img 
                    className={styles.logo} 
                    src={experience.logo}
                    onError={({ currentTarget }) => {
                         currentTarget.onerror = null; // prevents looping
                         currentTarget.src="/assets/illustrations/job.svg";
                    }}/>
               <div className={styles.altTextContainer}>
                    <h3>{capitaliseFirstWord(experience.type)}</h3>
                    <div className={styles.altText}>
                         <span>{experience.company_name}</span>
                         <IoEllipse size={6}/>
                         <span><DisplayDate date={experience.start} show="date"/> - {(experience.end == 'present') ? experience.end: <DisplayDate date={experience.end} show="date"/>}</span>
                    </div>
               </div>
               </div>
               <IoTrashBinOutline size={20} className={styles.deleteIcon}/>
          </div>
     )
}