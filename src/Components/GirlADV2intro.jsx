import React from "react";
import { useNavigate } from "react-router-dom";
import "./BoyIS1introo.css"; // Import CSS for styling

const BoyIntStage3Intro = () => {
	const navigate = useNavigate();

	const handleVideoEnd = () => {
		navigate("/qrGame?level=2&gender=girl&level=2");
	};

	const handleSkip = () => {
		navigate("/qrGame?level=2&gender=girl&level=2");
	};

	return (
		<div className="BoyIntStage1Intro">
			<video
				autoPlay
				muted={false}
				onEnded={handleVideoEnd}
				src={"/sandyadv2instruc.mp4"}
				className="video"
			>
				{/* <source src="/sandyadv2instruc.mp4" type="video/mp4" /> */}
				{/* Your browser does not support the video tag. */}
			</video>
		</div>
	);
};

export default BoyIntStage3Intro;
