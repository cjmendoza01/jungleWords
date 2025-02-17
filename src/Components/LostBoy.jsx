import React from "react";
import { useNavigate } from "react-router-dom";
import "./LostBoy.css";
import button from "../assets/buttons&dialogues/skip.png";
import vidSrc from "/sanderLost.mp4";
const LostBoy = () => {
	const navigate = useNavigate();

	const handleVideoEnd = () => {
		navigate("/BegLevelPickerBoy");
	};

	const handleSkip = () => {
		navigate("/BegLevelPickerBoy");
	};

	return (
		<div className="LostBoy">
			<video autoPlay unmuted loop className="background-boy">
				<source src={vidSrc} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<img
				src={button}
				alt="Skip Button"
				className="button"
				onClick={handleSkip}
			/>
		</div>
	);
};

export default LostBoy;
