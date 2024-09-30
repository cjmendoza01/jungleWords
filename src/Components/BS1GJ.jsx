import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BS1GJBoy.css"; // Import CSS for styling
import button from "../assets/buttons&dialogues/nextStage.png";
import buttonPlay from "../assets/buttons&dialogues/playAgain.png";

const BS1GJ = () => {
	const navigate = useNavigate();
	const videoRef = useRef(null);
	const [isMuted, setIsMuted] = useState(false); // Start unmuted
	const [videoSource, setVideoSource] = useState(null);

	useEffect(() => {
		if (videoRef.current && videoSource) {
			console.log("play vid");
			setTimeout(() => {
				videoRef.current.play();
			}, 1000);
		}
	}, [videoSource]);
	// Randomly select a video source when the component mounts
	useEffect(() => {
		let gd = "boy";
		if (qGender) {
			gd = qGender.toLowerCase();
		}
		let videos = ["/vgoodBoy.mp4", "/goodBoy.mp4", "/excellentBoy.mp4"];
		if (gd === "girl") {
			videos = ["/vgoodGirl.mp4", "/goodGirl.mp4", "/excellentGirl.mp4"];
		}
		const randomVideo = videos[Math.floor(Math.random() * videos.length)];
		const uniqueVideoSource = `${randomVideo}?t=${new Date().getTime()}`; // Cache busting to force reload
		setVideoSource(uniqueVideoSource);
	}, []);

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);

	const qGender = queryParams.get("gender");
	const qLevel = queryParams.get("level");

	const handleNextStage = () => {
		let lvl = "1";

		if (qLevel) {
			lvl = qLevel;
		}
		let gd = "boy";
		if (qGender) {
			gd = qGender.toLowerCase();
		}
		const level1Boy = "/BoyBS2intro";
		const level1Girl = "/GirlBS2intro";
		const level2Boy = "/BoyIS3intro";
		const level2Girl = "/GirlIS3intro";

		if (lvl === "2") {
			if (gd === "boy") navigate(level2Boy);
			else navigate(level2Girl);
		} else {
			if (gd === "boy") navigate(level1Boy);
			else navigate(level1Girl);
		}
	};

	const handleStart = () => {
		let lvl = "1";

		if (qLevel) {
			lvl = qLevel;
		}
		let gd = "boy";
		if (qGender) {
			gd = qGender.toLowerCase();
		}
		const level1Boy = "/BeginnerStage1Boy";
		const level1Girl = "/BeginnerStage1Girl";
		const level2Boy = "/IntermidiateStage2?gender=boy";
		const level2Girl = "/IntermidiateStage2?gender=girl";

		if (lvl === "2") {
			if (gd === "boy") navigate(level2Boy);
			else navigate(level2Girl);
		} else {
			if (gd === "boy") navigate(level1Boy);
			else navigate(level1Girl);
		}
		// navigate("/BoyBS2intro");
	};

	const toggleMute = () => {
		setIsMuted(!isMuted);
		if (videoRef.current) {
			videoRef.current.videoRef.current.muted = !isMuted;
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
				className="button nextStage-button"
				onClick={handleNextStage}
			/>
			<img
				src={buttonPlay}
				alt="Play Again Button"
				className="button buttonPlay-button"
				onClick={handleStart}
			/>
		</div>
	);
};

export default BS1GJ;
