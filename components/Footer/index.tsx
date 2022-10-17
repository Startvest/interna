import { IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io5';
import styles from './footer.module.scss';
import Image from "next/image";

const Footer:React.FC = () => {
    const date = new Date();
    let year:number = date.getFullYear();
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
            <img src="/assets/Vector.svg" width={'200px'} height={'100px'} alt="Interna Logo"/>

        </div>

        <p>Copyright © {year} Startvest Solutions | All Rights reserved </p>
    </footer>
    )
}

export default Footer;