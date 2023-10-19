import './Footer.css';
import propertiesJSON from '../../customizations/siteproperties.json';
import SiteProperties from '../../types/siteproperties';
import SocialIcon from '../../components/logos/SocialIcon';
import { HashLink } from 'react-router-hash-link';

const Footer: React.FC = () => {
    const properties: SiteProperties = propertiesJSON;
  
    return (
    <footer id="footer" className="footer">
        <div className="footercontents">
            <div className="footertoprow">
              <div className="footerleftside" />
              <div className="footerrightside">
                <div className="flex justify-center">
                    <HashLink to="/#" className="footer-link">Home</HashLink>
                </div>
                <div className="flex justify-center">
                    <HashLink to="/Blog#" className="footer-link">Blog</HashLink>
                </div>
                <div className="flex justify-center">
                    <HashLink to="/Books#" className="footer-link">Books</HashLink>
                </div>
                <div className="flex justify-center">
                    <HashLink to="/Satsang#" className="footer-link">Satsang</HashLink>
                </div>
                <div className="flex justify-center">
                    <HashLink to="/Legal#privacy" className="footer-link">Privacy Policy</HashLink>
                </div>
              </div>
          </div>
          <hr className="horizontaldivider" />
          <div className="footerbottomrow">
              <span className="copyrighttext">
                © 2023 <HashLink to="/#" className="footer-link-sm" >{properties.author}</HashLink>. All Rights Reserved.
              </span>
              <div className="socialicons">
                {Object.entries(properties.socialProfiles).map(([key, value]) => {
                    return (
                        <SocialIcon iconName={key} url={value} className="footer-link" key={key}/>
                    );
                })}
              </div>
          </div>
        </div>
    </footer>
  );
}

export default Footer;