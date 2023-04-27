import DropdownMenu from './DropdownMenu.jsx';
function DemoMenu() { 
    const menu = [
      { label: 'Famous Cats', 
        submenu: [
          { label: 'Internet Cats', path: '/internet.html' },
          { label: 'Military Cats', path: '/military.html' },
        ],
      },
      { label: 'About Us', 
        submenu: [
          { label: 'Founders', path: '/founders.html' },
          { label: 'Purpose', path: '/purpose.html' },
        ],
      },
    ];
    return (
      
        <DropdownMenu menu={menu}/>
      
    );
}
export default DemoMenu;