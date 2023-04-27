import './Footer.css';
function Footer() {
    return (
        <footer class="footer">
            <h2 className="footer__title">Cats of the Internet</h2>
            <ul className="footer__place-list">
                <li className="footer__place-item">
                    <a className="footer__place-link" href='/sunbeams.html'>
                        Sunbeams
                    </a>
                </li>
                <li className="footer__place-item">
                    <a className="footer__place-link" href="/drawers.html">
                        Drawers
                    </a>
                </li>
                <li className="footer__place-item">
                    <a className="footer__place-link" href="/shelves.html">
                        Shelves
                    </a>
                </li>
            </ul>
            <ul className="footer__link-list">
                <li className="footer__link-item">
                    <a className="footer__link-link" href="asfg.html">
                        Privacy Policy
                    </a>
                </li>
                <li className="footer__link-item">
                    <a className="footer__link-link" href="asfg.html">
                        Naps
                    </a>
                </li>
                <li className="footer__link-item">
                    <a className="footer__link-link" href="asfg.html">
                        Feeding Times
                    </a>
                </li>
            </ul>
            <ul className="footer__social-list">
                <li className="footer__social-item">
                    <a className="footer__social-link" href="asfg.html">
                        Facebook
                    </a>
                </li>
                <li className="footer__social-item">
                    <a className="footer__social-link" href="asfg.html">
                        Instagram
                    </a>
                </li>
                <li className="footer__social-item">
                    <a className="footer__social-link" href="asfg.html">
                        Tiktok
                    </a>
                </li>
            </ul>
        </footer>
    );
}
export default Footer;