import { NavBar } from "../../components/FloatingNavbar";
import { Searchbar } from "../../components/Searchbar"


import styles from './search.module.scss';
const SearchPage: React.FC = () => {
    return(
    <main className={styles.searchPage}>
        <Searchbar placeholder="Search for anything"/>
        
        <div className={`${styles.container} ${styles.filterBox}`}>
            <div className={styles.buttonHolder}>
                <span>
                    Interns
                </span>
                <span>
                    Companies
                </span>
            </div>
        </div>
        
        
        
        <NavBar/>
    </main>
    )
}

export default SearchPage;