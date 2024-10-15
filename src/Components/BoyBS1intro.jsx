import React from "react";
import { useNavigate } from "react-router-dom";
import "./BoyBS1intro.css"; // Import CSS for styling
import VidSrc from "/sanderbs1instruc.mp4";
const BoyBegStage1Intro = () => {
	const navigate = useNavigate();

	const handleVideoEnd = () => {
		navigate("/BeginnerStage1Boy");
	};

	const handleSkip = () => {
		navigate("/BeginnerStage1Boy");
	};

	return (
		<div className="GirlBegStage1Intro">
			<video autoPlay muted={false} onEnded={handleVideoEnd} className="video">
				<source src={VidSrc} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default BoyBegStage1Intro;
