import './GlobalNav.css';
import menu from './menu';
import { useState } from 'react';
function GlobalNav({ className, setPage }) {

    function gotoPage(event, pageName) {
        event.preventDefault();
        setPage(pageName);
    }

    const list = menu.map(item => {
        return (
            <li className="global-nav__item" key={item.name} onClick={e => gotoPage(e, item.name)}>
                <a className="global-nav__link" href={item.path}>
                    {item.name}
                </a>
            </li>
        );
    });
    const [showMenu, setShowMenu] = useState(false);
    const menuClass = showMenu ? 'global-nav__list--open' : '';
    return (
        <nav className={`global-nav ${className}`}>
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="global-nav__toggle"
            >
                {showMenu ? "Close Menu" : "Open Menu"}
            </button>
            <ul className={`global-nav__list ${menuClass}`}>
                {list}
            </ul>
        </nav>
    );
}

export default GlobalNav;