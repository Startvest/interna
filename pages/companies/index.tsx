import { AppHeader } from "../../components/header"; 
import { Searchbar } from "../../components/Searchbar";

import styles from './companies.module.scss';

const CompaniesPage: React.FC = () => {
    return(
        <main className={styles.companiesPage}>
            <AppHeader pageName={"Top Companies near you"}/>
            <Searchbar placeholder="Search for Companies"/>

            <h3 className="heading-small text-center">Top Companies near you</h3>


            <div className={styles.company}>
                <div className={styles.companyDetails}>
                    <img src={'/assets/companies/ncc.png'} alt="company-logo"/>
                    <span>
                        <h2 className="font-bold heading-small">NCC</h2>
                        <p className="font-small">Maitama, Abuja</p>
                    </span>
                </div>
                <p>
                    <span className="secondary">Steven</span>  and <span className="secondary">Joshua</span> work here
                </p>
            </div>

            <div className={styles.company}>
                <div className={styles.companyDetails}>
                    <img src={'/assets/companies/indicina.png'} alt="company-logo"/>
                    <span>
                        <h2 className="font-bold heading-small">Indicina</h2>
                        <p className="font-small">Ikeja, Lagos</p>
                    </span>
                    <span className={`chip ${styles.secondary}`}>Recruiting</span>
                </div>
                <p>
                    <span className="secondary">Fortune</span> worked here in 2018
                </p>
            </div>

            <div className={styles.company}>
                <div className={styles.companyDetails}>
                    <img src={'/assets/companies/ncc.png'} alt="company-logo"/>
                    <span>
                        <h2 className="font-bold heading-small">NCC</h2>
                        <p className="font-small">Maitama, Abuja</p>
                    </span>
                </div>
                <p>
                    <span className="secondary">Steven</span>  and <span className="secondary">Joshua</span> work here
                </p>
            </div>


        </main>
    )
}

export default CompaniesPage;