import footerlist from '../Scripts/footerlist.js'
import '../Styles/Footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__gradient"></div>
        <ul className='footer__ul'>
            {footerlist.map((link, index) => (
            <li key={index} className="footer__link">
                <a href={link.path} aria-label={link.name} className="footer__text">{link.name}</a>
                <a href={link.path} aria-label={link.name} className="footer__icon">{link.icon}</a>
            </li>
            ))}
        </ul>
    </footer>
  );
};

export default Footer;