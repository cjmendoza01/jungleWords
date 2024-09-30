import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BS1GonzoTY.css"; // Import CSS for styling
import button from "../assets/buttons&dialogues/skip.png";
import muteButton from "../assets/buttons&dialogues/muteButton.png";
import unmuteButton from "../assets/buttons&dialogues/unmuteButton.png";

const BS1TY = () => {
	const [gender, setGender] = useState("boy");
	const [level, setLevel] = useState("1");
	const [tyVid, setTyVid] = useState(null);

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

		const level1BoyVid = "/bs1tyboy.mp4";
		const level1GirlVid = "/bs1tygirl.mp4";
		const level2BoyVid = "/GonzoBS2TY.mp4";
		const level2GirlVid = "/GonzoBS2TY.mp4";

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
		let lvl = "1";

		if (qLevel) {
			lvl = qLevel;
		}
		let gd = "boy";
		if (qGender) {
			gd = qGender.toLowerCase();
		}

		navigate(`/BS1GJ?gender=${gd}&level=${lvl}`);
	};

	useEffect(() => {
		if (tyVid) {
			videoRef.current.play();
		}
	}, [tyVid]);
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
};

export default BS1TY;
