import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BoyVideo.css"; // Import CSS for styling
import button from "../assets/buttons&dialogues/skip.png";
import muteButton from "../assets/buttons&dialogues/muteButton.png";
import unmuteButton from "../assets/buttons&dialogues/unmuteButton.png";

const BoyVideo = () => {
	const navigate = useNavigate();
	const videoRef = useRef(null);
	const [isMuted, setIsMuted] = useState(false); // Start unmuted

	const handleVideoEnd = () => {
		navigate("/LostBoy");
	};

	const handleSkip = () => {
		navigate("/LostBoy");
	};

	const toggleMute = () => {
		setIsMuted(!isMuted);
		if (videoRef.current) {
			videoRef.current.muted = !isMuted;
		}
	};

	return (
		<div className="BoyVideo">
			<video
				ref={videoRef}
				autoPlay
				muted={isMuted}
				src="/Boy.mp4"
				onEnded={handleVideoEnd}
				className="video"
			>
				{/* <source  type="video/mp4" />
        Your browser does not support the video tag. */}
			</video>
			<img
				src={button}
				alt="Skip Button"
				className="button skip-button"
				onClick={handleSkip}
			/>
			<img
				src={isMuted ? unmuteButton : muteButton}
				alt="Mute/Unmute Button"
				className="button mute-button"
				onClick={toggleMute}
			/>
		</div>
	);
};

export default BoyVideo;
