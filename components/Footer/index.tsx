import { IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io5';
import styles from './footer.module.scss';
import Image from "next/image";

const Footer:React.FC = () => {
    const date = new Date();
    let year:number = date.getFullYear();
    return(
    <footer className={styles.footer}>
        <div className={styles.footerContent}>

            <div className={styles.firstLevel}>
                <div>
                    <Image src="/assets/logo-white.svg" height={'30px'} width={'106px'}/>
                    <h4>
                        Interna is a community social platfom that connects 
                        interns with students looking for internship placements.
                    </h4>
                </div>
                <ul className={styles.footerLinks}>
                    <li>Resources</li>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                    <li title='Send Us an Email'>
                        <a href="mailto:support@getinterna.com">Contact us</a>
                    </li>
                </ul>
            </div>

            <hr />

            <div className={styles.secondLevel}>
                <p>Copyright © {year} Ntrna technologies Ltd.</p>
                
                <ul className={styles.socials}>
                    <li>
                        <a href="https://www.linkedin.com/company/startvest" target={"_blank"}   rel="noreferrer">
                            <IoLogoLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/getinterna" target={"_blank"}   rel="noreferrer">
                            <IoLogoTwitter/>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/get_interna" target={"_blank"}  rel="noreferrer">
                            <IoLogoInstagram/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@getinterna" target={"_blank"}   rel="noreferrer">
                            <IoLogoYoutube/>
                        </a>
                    </li>
                </ul>

            </div>

        </div>
        <img className={styles.wavyLine} src="/assets/footer-wavy-line.svg" width={'200px'} height={'100px'} alt="Interna Logo"/>
    </footer>
    )
}

export default Footer;