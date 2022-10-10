import {useState} from 'react';
import style from './style.module.scss';
import Collapsible from 'react-collapsible';
import {questions, categories} from '../../services/enums/interviewquestions';
import {Button} from "../../components/Button";

export const InterviewQuestions = () => {
     const [type, setType] = useState<string>('common');
     const [categoryState, setCategoryState] = useState(false);
     return(
          <div className={style.container}>
               <h2>Common questions</h2>
               <p>5 questions</p>
               <Button type="button" onClick={() => setCategoryState(!categoryState)}>Categories</Button>
               {categoryState && <div className={style.categories}>
                    {categories.map((category,i) => 
                         <div key={i} className={(category.id === type) ? `${style.active}`:''}>
                         <h3>{category.name}</h3>
                         <p>{category.length} questions</p>
                         </div>
                    )}
               </div>}
               {
                    questions[type as keyof typeof questions].map((value, index) =>
                         <Collapsible trigger={value} className={style.questionBox} key={String(index)} >
                              <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim, et iaculis tellus diam lectus massa consequat. Lorem at massa elementum vestibulum, non a egestas amet proin. Risus nulla venenatis, viverra nulla a. Nunc, consequat sagittis, id convallis dolor ipsum.
                              Sed tellus faucibus suscipit malesuada ut.
                              </p>
                         </Collapsible>
                    )
               }               
          </div>
     )
}
