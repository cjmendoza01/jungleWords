import React from "react";
import { useNavigate } from "react-router-dom";
import "./BoyBS2intro.css"; // Import CSS for styling
import bbsVid from "/sanderbs2instruc.mp4";
const BoyBegStage2Intro = () => {
	const navigate = useNavigate();

	const handleVideoEnd = () => {
		navigate("/Stage2");
	};

	const handleSkip = () => {
		navigate("/Stage2");
	};

	return (
		<div className="BoyBegStage2Intro">
			<video autoPlay muted={false} onEnded={handleVideoEnd} className="video">
				<source src={bbsVid} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default BoyBegStage2Intro;
