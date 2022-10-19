import styles from './pricing.module.scss';
import { MdArrowBack, MdStar } from 'react-icons/md';

import { useRouter } from 'next/router';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';

const PricingPage: React.FC = () => {


    return(
        <main className={styles.pricingPage}>
            <BackButton />

            <section className={styles.heading}>
                <h2>Our Pricing Plans</h2>
                <p>Plans that start free and grow as you do</p>
            </section>

            <div className={`${styles.plan} ${styles.freePlan}`}>
                <h3>Free Plan</h3>
                <ul>
                    <li>View Top Companies</li>
                    <li>Chat with People</li>
                </ul>
                <p>
                    <span className='font-large font-bold'><span>&#8358;</span>0</span>/per month
                </p>
                <Button className={`${styles.selectBtn} ${styles.selected}`}>
                    Selected
                </Button>
            </div>

            <div className={` ${styles.plan} ${styles.freePlan}`}>
                <h3>Premium Plan</h3>
                <span className={styles.recommended}>
                    <MdStar size={16}/>
                    RECOMMENDED
                </span>
                <ul>
                    <li>No Ads</li>
                    <li>CV Generator</li>
                    <li>Newsletter</li>
                </ul>
                <p>
                    <span className='font-large font-bold'><span>&#8358;</span>1000</span>/per month
                </p>
                <Button className={styles.selectBtn}>
                    Select
                </Button>
            </div>

            <div className={` ${styles.plan} ${styles.premiumPlusPlan}`}>
                <h3>Premium Plus Plan</h3>
                <ul>
                    <li>Mock Interview</li>
                    <li>Specialized Mentorship Programs</li>
                </ul>
                <p>
                    <span className='font-large font-bold'><span>&#8358;</span>3000</span>/per month
                </p>
                <Button className={styles.selectBtn}>
                    Select
                </Button>
            </div>



        </main>
    )
}

export default PricingPage;