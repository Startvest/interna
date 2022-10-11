import {tips} from '../../services/enums/tips';
import style from './style.module.scss';

export const Tips = () => {

     return(
          <div className={style.container}>
               <h2>Tips</h2>
               <ul>
               {tips.map((tip, i) => 
                    <li key={i}>{tip}</li>
               )}
               </ul>
          </div>
     )
}
