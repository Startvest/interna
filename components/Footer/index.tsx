import { IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io5';
import styles from './footer.module.scss';

const Footer:React.FC = () => {
    return(
    <footer className={styles.footer}>
        <div>
            Interna

            <h4>
                Interna is a community socail platfom that connects 
                interns with sudents with students looking for internship placements.
            </h4>

            <h4>RESOURCES</h4>
            <h5>Privacy Policy</h5>
            <h5>Terms and Conditions</h5>
            <h5>Contact us</h5>


            <ul className={styles.socials}>
                <li>
                    <IoLogoLinkedin />
                </li>
                <li>
                    <IoLogoTwitter/>
                </li>
                <li>
                    <IoLogoInstagram/>
                </li>
                <li>
                    <IoLogoYoutube/>
                </li>
            </ul>
        </div>

        <p>Copyright © 2022 Startvest Solutions | All Rights reserved </p>
    </footer>
    )
}

export default Footer;