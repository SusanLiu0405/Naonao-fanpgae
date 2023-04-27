import React, { useState } from "react";
import subscribe from "../Scripts/subscribe";
import "../Styles/Subscribe.css";
function Subscribe() {
	const [leftCardIndex, setLeftCardIndex] = useState(0);
	const [rightCardIndex, setRightCardIndex] = useState(0);
    const [btnText1, setBtnText1] = useState("Subscribe");
    const [btnText2, setBtnText2] = useState("Subscribe");

	const handleSubscribeLeft = () => {
		setLeftCardIndex(1);
		console.log(leftCardIndex);
        setBtnText1("Subscribed");
	};

	const handleSubscribeRight = () => {
		setRightCardIndex(2);
		console.log(rightCardIndex);
        setBtnText2("Subscribed");
	};

	return (
    <div>
        <h2 className="header2"> Subscribe for Naonao's updates here</h2>
		<div className="subscribe-panel">
			<div className="subscribe-card">
				<img className="card-img"
					src={subscribe[leftCardIndex].src}
					alt={subscribe[leftCardIndex].alt}
				/>
                <h3 className="header3">Subscribe for her videos</h3>
				<button className="subscribe-btn" aria-label="subscribe button" onClick={handleSubscribeLeft}>{btnText1}</button>
			</div>
			<div className="subscribe-card">
				<img className="card-img"
					src={subscribe[rightCardIndex].src}
					alt={subscribe[rightCardIndex].alt}
				/>
                <h3 className="header3">Subscribe for her e-magazines</h3>
				<button className="subscribe-btn" aria-label="subscribe button" onClick={handleSubscribeRight}>{btnText2}</button>
			</div>
		</div>
    </div>
	);
}

export default Subscribe;
