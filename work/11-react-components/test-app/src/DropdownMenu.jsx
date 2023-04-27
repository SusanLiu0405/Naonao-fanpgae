import './DropdownMenu.css';
import { useState } from 'react';
function DropdownMenu({menu}) {

    const [openItems, setOpenItems] = useState({});
    const mainList = menu.map(mainMenu => {
        const subMenuList = mainMenu.submenu.map (sub => {
            return(
                <li key ={sub.label} className="dropdown-submenu__item">
                    <a href={sub.path}
                    className="dropdown-submenu__link">{sub.label}</a>
                </li>
            );
        });
        return (
            <li key = {mainMenu.label} className="dropdown-menu__item">
                <button className='dropdown-menu__toggle'
                onClick={() => {
                    setOpenItems({
                        ...openItems,
                        [mainMenu.label] : !openItems[mainMenu.label],
                    });
                }}>
                    {mainMenu.label}
                </button>
                {openItems[mainMenu.label] && (
                    <ul className="dropdown-submenu__list">
                    {subMenuList}
                </ul>
            )};
            </li>
        );
    });
    return (
        <ul className="dropdown-menu__list">
            {mainList}
        </ul>
    );
}
export default DropdownMenu;