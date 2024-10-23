import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BS1GJBoy.css"; // Import CSS for styling
import button from "../assets/buttons&dialogues/nextStage.png";
import buttonPlay from "../assets/buttons&dialogues/playAgain.png";
import VGB from "/vgoodBoy.mp4";
import GB from "/goodBoy.mp4";
import EB from "/excellentBoy.mp4";
import VGG from "/vgoodGirl.mp4";
import GG from "/goodGirl.mp4";
import EG from "/excellentGirl.mp4";

const IS2GJ = () => {
	const navigate = useNavigate();
	const videoRef = useRef(null);
	const [isMuted, setIsMuted] = useState(false); // Start unmuted
	const [videoSource, setVideoSource] = useState("");

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);

	const qGender = queryParams.get("gender");

	useEffect(() => {
		let videos = [VGB, GB, EB];

		let gd = "boy";

		if (qGender) {
			gd = qGender.toLowerCase();
			if (gd === "girl") {
				videos = [VGG, GG, EG];
			}
		}
		const randomVideo = videos[Math.floor(Math.random() * videos.length)];
		const uniqueVideoSource = `${randomVideo}?t=${new Date().getTime()}`; // Cache busting to force reload
		setVideoSource(uniqueVideoSource);
	}, []);

	const handleNextStage = () => {
		let gd = "boy";

		if (qGender) {
			gd = qGender.toLowerCase();
		}

		if (gd === "girl") {
			navigate(`/GirlIS3intro`);
		} else {
			navigate(`/BoyIS3intro`);
		}
	};

	const handleStart = () => {
		let gd = "boy";

		if (qGender) {
			gd = qGender.toLowerCase();
		}

		navigate(`/IntermidiateStage2?gender=${gd}`);
	};

	const toggleMute = () => {
		setIsMuted(!isMuted);
		if (videoRef.current) {
			videoRef.current.muted = !isMuted;
		}
	};

	return (
		<div className="BoyVideo">
			{videoSource && (
				<video
					ref={videoRef}
					autoPlay
					muted={isMuted}
					className="video"
					loop={false} // Ensure the video does not loop
				>
					<source src={videoSource} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			)}
			<img
				src={button}
				alt="nextStage Button"
				className="nextStage-button"
				onClick={handleNextStage}
			/>
			<img
				src={buttonPlay}
				alt="Play Again Button"
				className="buttonPlay-button"
				onClick={handleStart}
			/>
		</div>
	);
};

export default IS2GJ;
