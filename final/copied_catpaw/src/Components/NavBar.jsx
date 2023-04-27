import '../Styles/NavBar.css';
import menu from '../Scripts/menu';
import { useState } from 'react';
function NavBar({ className, setPage }) {

    function gotoPage(event, pageName) {
        event.preventDefault();
        setPage(pageName);
    }

    const list = menu.map(item => {
        return (
            <a className="global-nav__link" href={item.path} key={item.name} onClick={e => gotoPage(e, item.name)}>
                {item.name}
            </a>
        );
    });
    const [showMenu, setShowMenu] = useState(false);
    const menuClass = showMenu ? 'global-nav__list--open' : '';
    return (
        <nav className={`global-nav ${className}`}>
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="global-nav__btn"
            >
                {/* {showMenu ? "Close Menu" : "Open Menu"} */}
                <div className='hamburgermenu'>
                    <span className="line">---</span>
                    <span className="line">---</span>
                    <span className="line">---</span>
                </div>
                
            </button>
            <ul className={`global-nav__list ${menuClass}`}>
                {list}
            </ul>
        </nav>
    );
}

export default NavBar;