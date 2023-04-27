import "../Styles/Main.css";
import Home from "./Home.jsx";
import Subscribe from "./Subscribe.jsx";
import Souvenir from "./Souvenir.jsx";
import Game from "./Game.jsx";
function Main({ page }) {
	// skiplink reference: https://css-tricks.com/how-to-create-a-skip-to-content-link/
	return (
		<div>
			<a class="skip-to-content-link" href="#main">
				<span class="span-text" tabIndex="0">
					Skip to content
				</span>
			</a>
			<div className="main__content" id="main">
				{page === "Home" && <Home />}
				{page === "Subscribe" && <Subscribe />}
				{page === "Souvenir" && <Souvenir />}
				{page === "Game" && <Game />}
			</div>
		</div>
	);
}
export default Main;
