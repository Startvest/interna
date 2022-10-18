import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { Header } from "../../components/header";
import { NavBar } from '../../components/FloatingNavbar';
import styles from './settings.module.scss';

import { MdArrowForward } from "react-icons/md";
import { Input } from "../../components/Input";
import { Toggle } from "../../components/Toggle";

import { TbEdit } from "react-icons/tb";

const SettingsPage: React.FC = () => {
    return(
    <main className={styles.settingsPage}>
        <Header/>
        <div className={styles.avatar}>
            <Avatar className={styles.profileAvatar} size="large" src="/assets/images/user2.svg"/>
            <span>
                <TbEdit size={20} />
            </span>
        </div>
        <div className={styles.userInfo}>
            <h1>John Doe</h1>
            <p>@johndoe</p>

            <Button className={styles.save}>
                Save Settings
            </Button>
        </div>

        <div className={styles.banner}>
            Upgrade to Premium!
            <MdArrowForward size={25}/>
        </div>

        <div className={styles.form}>
            <Input 
                value={'John Doe'} 
                name="full-name" 
                placeholder="Enter your full name" 
                labelName="Full Name"
            />

            <Input 
                value={'@johndoe'} 
                name="username" 
                placeholder="Enter your username" 
                labelName="Username"
            />
        </div>

        <div className={styles.toggleAction}>
            Push Notifications 
            <Toggle checked={true}/>
        </div>
        <div className={styles.toggleAction}>
            Email Notifications
            <Toggle checked={true}/>
        </div>

        <NavBar/>
    </main>
    )
}

export default SettingsPage;