import { IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io5';
import styles from './footer.module.scss';
import Image from "next/image";

const Footer:React.FC = () => {
    const date = new Date();
    let year:number = date.getFullYear();
    return(
    <footer className={styles.footer}>
        <Image src="/assets/logo-white.svg" height={'30px'} width={'106px'}/>
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
                    <li><a href="mailto:support@getinterna.com">Contact us</a></li>
                </ul>

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
            <img src="/assets/Vector.svg" width={'200px'} height={'100px'} alt="Interna Logo"/>

        </div>

        <p>Copyright © {year} Ntrna technologies Ltd. <br/>All Rights reserved </p>
    </footer>
    )
}

export default Footer;