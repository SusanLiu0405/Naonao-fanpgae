import './Header.css';

import GlobalNav from './GlobalNav';
function Header({ setPage }) {
    return (
        <header className="header">
            <img
                src="img/logo/cat_logo.jpg"
                className="header__logo"
                alt="Feline Overlords Logo"
            />
            <h1 className="header__title">
                I welcome our Feline Overlords
            </h1>
            <GlobalNav setPage={setPage} className="header__nav" />
        </header>
    );
}
export default Header;
