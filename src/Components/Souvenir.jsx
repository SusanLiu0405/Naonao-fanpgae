import { useState, useRef } from "react";
import "../Styles/Souvenir.css";
import "../Scripts/badgeconfig.js";
import badgeconfig from "../Scripts/badgeconfig.js";
import PurchaseModal from "./PurchaseModal.jsx";

function Souvenir(props) {
	const [showModal, setShowModal] = useState(false);
	const [countdown, setCountdown] = useState(3);
	const [push, setPush] = useState(false);
	const [buttonText, setButtonText] = useState("Submit");
	const intervalRef = useRef(null);
	const timeoutRef = useRef(null); 

	function openModal() {
		setShowModal(true);
		setButtonText("Submit");
		setPush(false);
		setCountdown(3);
	}

	function closeModal() {
		setShowModal(false);
		clearInterval(intervalRef.current);
		clearTimeout(timeoutRef.current); 
	}

	function startCountdown() {
		setPush(true);

		intervalRef.current = setInterval(() => {
			setCountdown((prevCountdown) => prevCountdown - 1);
		}, 1000);

		timeoutRef.current = setTimeout(() => {
			clearInterval(intervalRef.current);
			setPush(false);
			setShowModal(false);
		}, 3000);
	}

	function pushForm() {
		setButtonText("Submitting...");
		startCountdown();
	}

	return (
		<div className="souvenir-display">
			{badgeconfig.map((badge, index) => (
				<div className="souvenir-panel" key={index}>
					<img src={badge.src} alt={badge.alt} className="badge-pic" />
					<p className="badge-description">{badge.description}</p>
					<button className="buy-btn" alt="buy_button" aria-label="buy button" onClick={openModal}>
						Buy
					</button>
				</div>
			))}
			<PurchaseModal
				showModal={showModal}
				closeModal={closeModal}
				pushForm={pushForm}
				buttonText={buttonText}
				push={push}
				countdown={countdown}
			/>
		</div>
	);
}

export default Souvenir;
