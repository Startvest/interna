import styles from './admin.module.scss';
import {useEffect, useState} from "react";
import {Button} from "../../components/Button";
import {sendAllEmail, sendPreview} from "../../services/email";
import { useMutation } from 'react-query';
import {IoRefreshCircleOutline} from 'react-icons/io5';

type  DeviceWidth = "400px" | "800px";
export const SendEmail = () =>{
     const [preview, setPreview] = useState(false);
     const [currPage, setcurrPage]  = useState("/waitlist1");
     const [deviceType, setdeviceType] = useState<DeviceWidth>("400px");
     const waitlistMutation = useMutation(sendAllEmail);
     const previewMutation = useMutation(sendPreview);
     async function submitForm() {
          waitlistMutation.mutateAsync({
               subject: "You are the real MVP 💙"
          });
     }
     async function submitPreview() {
          previewMutation.mutateAsync({
               subject: "Our special gift for you 💙"
          });
     }
     const reloadFrame = () =>{
          var f = document.getElementById('iframe') as HTMLIFrameElement | null;;
          if (f) f.src += '';
     }
     return(
          <div className={`${styles.userContent} ${styles.emailContent}`}>
             <h1>Hey Admin!</h1>

               <div className={styles.emailListCont}>
                    <div>
                         <span className={styles.h2}>Email file</span>
                         <select title="Email" name="email" className={styles.select} onChange={(e) => setcurrPage(e.target.value)}>
                              <option value="/waitlist1">Waitlist Email</option>
                              <option value="/email">Welcome Email</option>
                              <option value="/code">Create Code</option>
                              <option value="/blog">Blog Email</option>
                         </select>
                    </div>
                    <>
                    <Button type="button" onClick={() => submitPreview()}>
                         {(previewMutation.isIdle) && <>Send to core team</>} 
                         {(previewMutation.isLoading) && <>Loading...</>}
                         {(previewMutation.isSuccess) &&  <>Sent to Core team members!</>}
                    </Button>

                    <Button type="button" onClick={() => submitForm()}>
                         {(waitlistMutation.isIdle) && <>Send email</>} 
                         {(waitlistMutation.isLoading) && <>Loading...</>}
                         {(waitlistMutation.isSuccess) &&  <>Sent to all users!</>}
                    </Button>
                    </>
               </div>
               
               <section className={styles.secButtons}>
                    <Button type="button" onClick={() => setPreview(!preview)}>
                         Preview
                    </Button>

                    <Button type="button" onClick={reloadFrame}>
                        Refresh <IoRefreshCircleOutline size={20}/>
                    </Button>
               </section>


               {(preview) && 
               <div className={styles.deviceType}>
                    <span onClick={() => setdeviceType("400px")} className={`${(deviceType == "400px") ? styles.deviceActive:''}`}>Mobile</span>
                    <span onClick={() => setdeviceType("800px")} className={(deviceType == "800px") ? styles.deviceActive:''}>Desktop</span>
               </div>}

               {(preview) && 
               <>
               <iframe 
                    id='iframe'
                    className={styles.frame}
                    src={`/templates/${currPage}.html`}
                    height="300" 
                    width={deviceType} 
                    title="Email Preview"></iframe>
               </>}
          </div>
     )
};