import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./LostBoy.css";
import button from "../assets/buttons&dialogues/skip.png";

const BeginnerStage1Complete = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);

	const qGender = queryParams.get("gender");
	const qLevel = queryParams.get("level");

	const handleVideoEnd = () => {
		let level = 1;
		if (qLevel) {
			level = Number(qLevel);
		}
		navigate("/stage2?leve=1");
	};

	const handleSkip = () => {
		let level = 1;
		let gender = "boy";

		if (qLevel) {
			level = Number(qLevel);
		}

		if (qGender) {
			gender = qGender;
		}

		navigate(`/BegLevelPickerBoy?gender=${gender}&level=${level}`);
	};

	return (
		<div className="LostBoy">
			<video autoPlay unmuted loop className="background-boy">
				<source src="/sanderLost.mp4" type="video/mp4" />
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

export default BeginnerStage1Complete;
