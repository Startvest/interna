import {NavigationBar, SendEmail} from '../../components/Admin';
import {Header} from '../../components/header';
import {AdminContent} from '../../components/Admin';

const Moderation = () => {
     
     return(
          <>
               <Header pageName='Emails | Interna'/>
               <AdminContent>
                    <NavigationBar/>
                    <SendEmail/>
               </AdminContent>
          </>
     )

}

export default Moderation;