import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SanderTY.css"; // Import CSS for styling
import button from "../assets/buttons&dialogues/skip.png";
import muteButton from "../assets/buttons&dialogues/muteButton.png";
import unmuteButton from "../assets/buttons&dialogues/unmuteButton.png";

import boyVid from "../assets/is2/boyI2Thank.mp4";
import girlVid from "../assets/is2/girlI2Honey.mp4";

const IS2TY = () => {
	const navigate = useNavigate();
	const videoRef = useRef(null);
	const [isMuted, setIsMuted] = useState(false); // Start unmuted
	const [tyVId, setTyVid] = useState(boyVid);
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const qGender = queryParams.get("gender");

	useEffect(() => {
		let gd = "boy";
		let vid = boyVid;
		if (qGender) {
			gd = qGender.toLowerCase();
			if (gd === "girl") {
				vid = girlVid;
			}
		}

		setTyVid(vid);
	}, [qGender]);

	const handleVideoEnd = () => {
		let gd = "boy";

		if (qGender) {
			gd = qGender.toLowerCase();
		}
		navigate(`/IS2GJ?gender=${gd}`);
	};

	const handleSkip = () => {
		let gd = "boy";

		if (qGender) {
			gd = qGender.toLowerCase();
		}
		navigate(`/IS2GJ?gender=${gd}`);
	};

	const toggleMute = () => {
		setIsMuted(!isMuted);
		if (videoRef.current) {
			videoRef.current.muted = !isMuted;
		}
	};

	return (
		<div className="SanderTY">
			{tyVId && (
				<video
					ref={videoRef}
					autoPlay
					muted={isMuted}
					onEnded={handleVideoEnd}
					className="video"
				>
					<source src={tyVId} type="video/mp4" />
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
};

export default IS2TY;
