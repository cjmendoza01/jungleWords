import React from "react";
import { useNavigate } from "react-router-dom";
import "./BoyBS3intro.css"; // Import CSS for styling

const BoyBegStage3Intro = () => {
	const navigate = useNavigate();

	const handleVideoEnd = () => {
		navigate("/Stage3");
	};

	const handleSkip = () => {
		navigate("/Stage3");
	};

	return (
		<div className="BoyBegStage2Intro">
			<video
				autoPlay
				muted={false}
				onEnded={handleVideoEnd}
				className="video"
				src="/sanderbs3instruc.mp4"
			/>
		</div>
	);
};

export default BoyBegStage3Intro;
