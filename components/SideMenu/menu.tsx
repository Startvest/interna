import styles from './sidemenu.module.scss';

import { IoBusiness, IoColorWand, IoDocumentsOutline, IoSettings } from 'react-icons/io5'
import Link from 'next/link';
import { Avatar } from '../Avatar';
import { useEffect } from 'react';

interface SideMenuProps {
    isOpen: boolean,
    hasBeenDismissed: any
}

export const SideMenu: React.FC<SideMenuProps> = ({ isOpen, hasBeenDismissed }) => {
    useEffect(() => {
        if(isOpen){
            document.body.setAttribute('class', 'backdrop-no-scroll')
        } else {
            document.body.removeAttribute('class')
        }
    }, [isOpen])
    
    if(!isOpen) return null;

    return(
        <div className={styles.backdrop}>
            <section>

                <div>
                    <Avatar src="/assets/images/user2.svg" />
                    <h2>John Doe</h2>
                </div>
                <div className={styles.links}>
                    <Link href={'/companies'}>
                        <span>
                            <IoBusiness size={30} className={styles.icon}/> Companies
                        </span>
                    </Link>

                    <Link href={'/resume'} >
                        <span><IoDocumentsOutline size={30} className={styles.icon}/> CV Generator </span>
                    </Link>
                        
                    <Link href={'/interview-prep'}>
                        <span><IoColorWand size={30} className={styles.icon}/> Interview Prep</span>
                    </Link>

                    <Link href={'/settings'}>
                        <span>
                            <IoSettings size={30} className={styles.icon}/> Settings
                        </span>
                    </Link>
                </div>

            </section>  
            <div className={styles.dismissArea} onClick={hasBeenDismissed}></div>          
        </div>
    )
}