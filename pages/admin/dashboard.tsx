import {NavigationBar} from '../../components/Admin';
import {Header} from '../../components/header';
import {AdminContent} from '../../components/Admin';

const Dashboard = () => {

     return(
          <>
               <Header pageName='Admin Dashboard | Interna'/>
               <AdminContent>
                    <NavigationBar/>
               </AdminContent>
          </>
     )

}

export default Dashboard;