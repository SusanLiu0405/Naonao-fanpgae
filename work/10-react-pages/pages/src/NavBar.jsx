import menu from './menu';
function NavBar({ setPage }) {
    const list = menu.map(item => {
        return (
            <li key={item.name}>
                <a
                    onClick={(e) => {
                        e.preventDefault();
                        setPage(item.name);
                    }} href={item.path}>{item.name}</a>
            </li>
        );
    });
    return (
        <ul>
            {list}
        </ul>
    );
}
export default NavBar;