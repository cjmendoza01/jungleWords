import React from "react";
import { useNavigate } from "react-router-dom";
import "./BoyIS1introo.css"; // Import CSS for styling
import VidSrc from "/sanderis2instruc.mp4";
const BoyIntStage2Intro = () => {
	const navigate = useNavigate();

	const handleVideoEnd = () => {
		navigate("/IntermidiateStage2?gender=boy");
	};

	const handleSkip = () => {
		navigate("/IntermidiateStage2?gender=boy");
	};

	return (
		<div className="BoyIntStage1Intro">
			<video
				autoPlay
				muted={false}
				onEnded={handleVideoEnd}
				style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
			>
				<source src={VidSrc} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default BoyIntStage2Intro;
