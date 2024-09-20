<<<<<<< HEAD:src/Components/BS2BoyGonzoTY.jsx
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BS2BoyGonzoTY.css'; // Import CSS for styling
import button from '../assets/buttons&dialogues/skip.png';
import muteButton from '../assets/buttons&dialogues/muteButton.png';
import unmuteButton from '../assets/buttons&dialogues/unmuteButton.png';

const BS2BoyGonzoTY = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false); // Start unmuted
=======
import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BS1GonzoTY.css"; // Import CSS for styling
import button from "../assets/buttons&dialogues/skip.png";
import muteButton from "../assets/buttons&dialogues/muteButton.png";
import unmuteButton from "../assets/buttons&dialogues/unmuteButton.png";

const BS1GonzoTY = ({ closeTyVideo }) => {
	const [gender, setGender] = useState("boy");
	const [level, setLevel] = useState("1");
	const [tyVid, setTyVid] = useState("/GonzoBS1TY.mp4");
>>>>>>> b621598d07d19dafd18583c981470b35804697c1:src/Components/BS1GonzoTY.jsx

	const navigate = useNavigate();
	const videoRef = useRef(null);
	const [isMuted, setIsMuted] = useState(false);

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);

	const qGender = queryParams.get("gender");
	const qLevel = queryParams.get("level");

<<<<<<< HEAD:src/Components/BS2BoyGonzoTY.jsx
  return (
    <div className="BS2BoyGonzoTY">
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        onEnded={handleVideoEnd}
        className="video"
      >
        <source src="/GonzoBS1TY.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
      <img
        src={isMuted ? unmuteButton : muteButton}
        alt="Mute/Unmute Button"
        className="button mute-button"
        onClick={toggleMute}
      />
    </div>
  );
=======
	useEffect(() => {
		let gd = "boy";
		if (qGender) {
			gd = qGender.toLowerCase();
		}

		let vid = "";

		const level1BoyVid = "/GonzoBS1TY.mp4";
		const level1GirlVid = "/GonzoBS1TY.mp4";
		const level2BoyVid = "/GonzoBS1TY.mp4";
		const level2GirlVid = "/GonzoBS1TY.mp4";

		let lvl = "1";

		if (qLevel) {
			lvl = qLevel;
		}

		if (lvl === "2") {
			if (gender === "boy") vid = level2BoyVid;
			else vid = level2GirlVid;
		} else {
			if (gender === "boy") vid = level1BoyVid;
			else vid = level1GirlVid;
		}

		setGender(gd);
		setLevel(lvl);
		setTyVid(vid);
	}, [qGender, qLevel]);

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
			{tyVid && (
				<video
					ref={videoRef}
					autoPlay
					muted={isMuted}
					onEnded={handleVideoEnd}
					className="video"
				>
					<source src={tyVid} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			)}

			<img
				src={isMuted ? unmuteButton : muteButton}
				alt="Mute/Unmute Button"
				className="button mute-button"
				onClick={toggleMute}
			/>
		</div>
	);
>>>>>>> b621598d07d19dafd18583c981470b35804697c1:src/Components/BS1GonzoTY.jsx
};

export default BS2BoyGonzoTY;
