import React from "react";
import { useNavigate } from "react-router-dom";
import "./BoyIS1introo.css"; // Import CSS for styling
import VidSrc from "/sandyis2instruc.mp4";

const GirlIntStage2Intro = () => {
	const navigate = useNavigate();

	const handleVideoEnd = () => {
		navigate("/IntermidiateStage2?gender=girl");
	};

	const handleSkip = () => {
		navigate("/IntermidiateStage2?gender=girl");
	};

	return (
		<div className="GirlIntStage2Intro">
			<video autoPlay muted={false} onEnded={handleVideoEnd} className="video">
				<source src={VidSrc} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default GirlIntStage2Intro;
