import Home from './Home';
import About from './About';

import TextContent from './TextContent.jsx';
import Cards from './Cards.jsx';
import Panels from './Panels.jsx';
function Main({ page }) {
    return (
        <main>
            {page === 'Home' && <Home />}
            {page === 'About' && <About />}
            {page === 'TextContent' && <TextContent />}
            {page === 'Cards' && <Cards />}
            {page === 'Panels' && <Panels />}
        </main>
    );
}
export default Main;