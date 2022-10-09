import { IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io5';
import styles from './footer.module.scss';
import Image from "next/image";

const Footer:React.FC = () => {
    return(
    <footer className={styles.footer}>
        <Image src="/assets/logo-white.svg" height={'20px'} width={'93px'}/>
        <div className={styles.footerContent}>
            <div>
                <h4>
                    Interna is a community social platfom that connects 
                    interns with students looking for internship placements.
                </h4>

                <ul className={styles.footerLinks}>
                    <li>RESOURCES</li>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                    <li>Contact us</li>
                </ul>

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
            <Image src="/assets/Vector.svg" width={'170px'} height={'170px'}/>

        </div>

        <p>Copyright © 2022 Startvest Solutions | All Rights reserved </p>
    </footer>
    )
}

export default Footer;