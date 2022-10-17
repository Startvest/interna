import { useState } from "react";
import { IoClose, IoFilter } from "react-icons/io5";
import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { NavBar } from "../../components/FloatingNavbar";
import { AppHeader } from "../../components/header";
import { Searchbar } from "../../components/Searchbar"


import styles from './search.module.scss';
const SearchPage: React.FC = () => {

    const [searchText, setSearchText] = useState('');
    const [focused, setFocused] = useState(false);
    const [filters, setFilters] = useState(false);
    return(
        <>
        <AppHeader pageName="Search for Anything"/>
        <Searchbar 
                onBlur={() => setFocused(false)}
                onFocus={() => setFocused(true)}
                placeholder="Search for anything"
                onChange={(e) => setSearchText(e.target.value)}
            />
        <main className={styles.container}>
            <h2>Search</h2>
            
            <div className="container justify-end">
                <Button className={styles.filterBtn} onClick={() => setFilters(!filters)}>
                    <IoFilter />
                    Filters
                </Button>
            </div>
            
            {!filters && 
            <div className={` ${styles.filterBox}`}>
                <div className="container">
                    <span className="chip primary">
                        Interns
                    </span>
                    <span className="chip contrast">
                        Companies
                    </span>
                </div>
                <div className="container justify-start">
                    <span className="chip">
                        <p>Location</p>
                        <select title="Location" name="location">
                            <option value="any">Any Location</option>
                        </select>
                    </span>
                </div>
            </div>
            }
            
            <section className={`${!focused ? styles.invisible : null}`}>
                <h2>Recent Searches</h2>
                <div className="container">
                    <span className={styles.searchWithAvatar}>
                        <Avatar src="assets/images/Fortune.jpg" size="small"/>
                        <p>Fortune Alebiosu</p>
                    </span>
                    <span className={styles.searchWithAvatar}>
                        <Avatar src="assets/images/Fortune.jpg" size="small"/>
                        <p>Fortune Alebiosu</p>
                    </span>
                    <span className={styles.searchWithAvatar}>
                        <Avatar src="assets/images/Fortune.jpg" size="small"/>
                        <p>Fortune Alebiosu</p>
                    </span>
                    <span className={styles.searchWithAvatar}>
                        <Avatar src="assets/images/Fortune.jpg" size="small"/>
                        <p>Fortune Alebiosu</p>
                    </span>
                </div>

                <div className="container space-between">
                    <p>hanif adedotun</p>
                    <span>
                        <IoClose/>
                    </span>
                </div>

                <div className="container space-between">
                    <p>google</p>
                    <span>
                        <IoClose/>
                    </span>
                </div>

            </section>
            
            
            <NavBar/>
        </main>
    </>
    )
}

export default SearchPage;