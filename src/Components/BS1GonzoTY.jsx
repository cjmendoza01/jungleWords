import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BS1GonzoTY.css"; // Import CSS for styling
import button from "../assets/buttons&dialogues/skip.png";
import muteButton from "../assets/buttons&dialogues/muteButton.png";
import unmuteButton from "../assets/buttons&dialogues/unmuteButton.png";

import level1BoyVid from "/GonzoBS2TY.mp4";
import level1GirlVid from "/GonzoBS2TYGirl.mp4";
import level2BoyVid from "/HoneyBunIS1TY.mp4";
import level2GirlVid from "/HoneyBunIS1TYGirl.mp4";

const BS1GonzoTY = ({ closeTyVideo, gameLevel }) => {
	const [gender, setGender] = useState("boy");
	const [level, setLevel] = useState("1");
	const [tyVid, setTyVid] = useState("");

	const navigate = useNavigate();
	const videoRef = useRef(null);
	const [isMuted, setIsMuted] = useState(false);

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);

	const qGender = queryParams.get("gender");
	const qLevel = queryParams.get("level");

	useEffect(() => {
		let gd = "boy";
		if (qGender) {
			gd = qGender.toLowerCase();
		}

		let vid = "";

		let lvl = "1";

		console.log("gameLevel", gameLevel);
		if (gameLevel) {
			lvl = gameLevel;
		}

		if (lvl === "2") {
			if (gd === "boy") vid = level2BoyVid;
			else vid = level2GirlVid;
		} else {
			if (gd === "boy") vid = level1BoyVid;
			else vid = level1GirlVid;
		}

		console.log("vid");
		console.log(vid);
		console.log(lvl);
		console.log(gd);
		setGender(gd);
		setLevel(lvl);
		setTyVid(vid);
		if (videoRef.current) {
			videoRef.current.src = vid;
		}
	}, [qGender, qLevel, gameLevel, videoRef]);

	const handleVideoEnd = () => {
		closeTyVideo();
		// navigate("/BS2GJBoy"); // Navigate to BS1GJBoy component
	};

	const handleSkip = () => {
		// navigate("/BS2GJBoy"); // Navigate to BS1GJBoy component
		closeTyVideo();
	};

	const toggleMute = () => {
		setIsMuted(!isMuted);
		if (videoRef.current) {
			videoRef.current.muted = !isMuted;
		}
	};

	return (
		<div className="BS1GonzoTY">
			{/* {tyVid && ( */}
			<video
				ref={videoRef}
				autoPlay
				muted={isMuted}
				onEnded={handleVideoEnd}
				className="video"
			>
				{/* <source src={tyVid} type="video/mp4" /> */}
				{/* Your browser does not support the video tag. */}
			</video>
			{/* // )} */}

			<img
				src={isMuted ? unmuteButton : muteButton}
				alt="Mute/Unmute Button"
				className="button mute-button"
				onClick={toggleMute}
			/>
		</div>
	);
};

export default BS1GonzoTY;
