import { useState } from "react";
import { IoClose, IoFilter } from "react-icons/io5";
import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { NavBar } from "../../components/FloatingNavbar";
import { AppHeader } from "../../components/header";
import { Searchbar } from "../../components/Searchbar"

import { users } from "../../services/enums/users";
import { companies } from "../../services/enums/companies";

const SEARCH_DATA = [
    ...users,
    ...companies
]

import styles from './search.module.scss';
const SearchPage: React.FC = () => {
    const [searchText, setSearchText] = useState({ text: '', searching: false });
    const [focused, setFocused] = useState(false);
    const [filters, setFilters] = useState(false);

    const [filterParams, setFilterParams] = useState<'interns'|'companies'|undefined>(undefined)

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFocused(false)
        setSearchText({ text: e.target.value, searching: true });
    }
    return(
        <>
        <AppHeader pageName="Search for Anything"/>
        <Searchbar 
            onBlur={() => setFocused(false)}
            onFocus={() => setFocused(true)}
            placeholder="Search for anything"
            onChange={(e) =>handleSearch(e)}
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
                    <span className={`chip ${filterParams === 'interns' ? 'primary' : 'contrast'}`} onClick={() => setFilterParams('interns')}>
                        Interns
                    </span>
                    <span className={`chip ${filterParams === 'companies' ? 'primary' : 'contrast'}`} onClick={() => setFilterParams('companies')}>
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

            <section className={`${!searchText.searching ? styles.invisible : null}`}>
                {
                    !filterParams ? (
                        SEARCH_DATA.filter(item => item.name.toLowerCase().includes(searchText.text.toLowerCase())).map((data,i) => (
                        <div className="container space-between" key={i}>
                            <div className="flex gap">
                                <Avatar src={data.image} size="small"/>
                                <span>
                                    <h3>{data.name}</h3>
                                </span>
                            </div>
                        </div>
                        ))
                    ) : 
                    filterParams === 'interns' ? (
                        <div className={styles.searchResults}>
                            <h2>Interns</h2>
                            {
                                users.filter(user => user.name.toLowerCase().includes(searchText.text.toLowerCase())).map((user,i) => (
                                    <div className="container space-between" key={i}>
                                        <div className="flex gap">
                                            <Avatar src={user.image} size="small"/>
                                            <span>
                                                <h3>{user.name}</h3>
                                                <p>{user.position}</p>
                                            </span>
                                        </div>
                                        <Button className={user.connected ? styles.connected : ''}>
                                            {user.connected ? 'Connected' : 'Connect'}
                                        </Button>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <div className={styles.searchResults}>
                            <h2>Interns</h2>
                            {
                                companies.filter(company => company.name.toLowerCase().includes(searchText.text.toLowerCase())).map((company,i) => (
                                    <div className="container space-between" key={i}>
                                        <div className="flex gap">
                                            <Avatar src={company.image} size="small"/>
                                            <span>
                                                <h3>{company.name}</h3>
                                            </span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                    
                }
            </section>
            
            
            <NavBar/>
        </main>
    </>
    )
}

export default SearchPage;