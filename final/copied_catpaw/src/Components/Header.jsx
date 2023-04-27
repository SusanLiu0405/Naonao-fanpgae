import '../Styles/Header.css';
import '../Styles/NavBar.css';
import NavBar from './NavBar';
function Header({setPage}) {
    return(
        <div className="header">
            <img
            src="img/logo/13151681053882_.pic.jpg"
            className="header__logo"
            alt="NaoNao"></img>
            <div className="right__block">
                <h1 className="header__title" alt="Welcome to Naonao's Fanpage!">Welcome to Naonao's Fanpage!</h1>
                <NavBar className="navbar" setPage={setPage}/>
            </div>
        </div>
    );
}
export default Header;