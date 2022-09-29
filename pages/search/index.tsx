import { NavBar } from "../../components/FloatingNavbar";
import { Searchbar } from "../../components/Searchbar"

const SearchPage: React.FC = () => {
    return(
    <main>
        <Searchbar placeholder="Search for anything"/>
        <NavBar/>
    </main>
    )
}

export default SearchPage;