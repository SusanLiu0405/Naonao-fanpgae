import carousel from '../Scripts/carousel.js';
import Carousel from './Carousel.jsx';
import Intro from './Intro.jsx';
function Home() {
    return(
    <div>
        <Carousel images={carousel}/>
        <Intro/>
    </div>
    );
};
export default Home;
