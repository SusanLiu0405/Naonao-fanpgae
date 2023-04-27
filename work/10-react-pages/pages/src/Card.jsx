import './Card.css'
function Card() {
    return (
        <div className="card">
            <img className="card__pic" src="img/panel_and_card/head_upside_down_naonao.jpg"
                alt="naonao's head upside down" />
            <h2 className="card__subtitle">Naonao is Watching U!</h2>
            <p className="card__text">She is so cute. This picture was taken when she was 3 months old. I slept with her
                for an hour, but she was always stepping and dancing on my face!</p>
            <p className="card__text">Please<button className="modal--open" type="button">Subscribe</button>Here</p>
        </div>
    );
}

export default Card;