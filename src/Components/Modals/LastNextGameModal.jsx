import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import PlayAgainImg from "../../assets/buttons&dialogues/playAgain.png";
import VgoodBoy from "/vgoodBoy.mp4";
import VgoodGirl from "/vgoodGirl.mp4";
export default function LastNextGameModal({ gender, route, resetGame }) {
	const navigate = useNavigate();

	const videoRef = useRef(null);
	const [vid, setVid] = useState(null);
	const [showBtn, setShowBtn] = useState(true);
	useEffect(() => {
		if (gender === "boy") {
			setVid(VgoodBoy);
			videoRef.current.src = VgoodBoy;
		} else {
			setVid(VgoodGirl);

			videoRef.current.src = VgoodGirl;
		}

		if (videoRef?.current) {
			videoRef.current.load();
			videoRef.current.play();
		}
	}, [gender, videoRef.current]);

	const handleVideoEnded = () => {
		if (vid !== "/starBoy.mp4" && vid !== "/starGirl.mp4") {
			setTimeout(() => {
				setShowBtn(false);
				if (gender === "boy") {
					videoRef.current.src = "/starBoy.mp4";
					setVid("/starBoy.mp4");
				} else {
					videoRef.current.src = "/starGirl.mp4";
					setVid("/starGirl.mp4");
				}
				setTimeout(() => {
					// videoRef.current.
					videoRef.current.load();
					videoRef.current.play();
				}, 200);
			}, 1000);
		} else {
			if (gender === "girl") navigate("/BegLevelPickerGirl");
			else navigate("/BegLevelPickerBoy");
		}
	};

	// const routeNextGame = () => {
	// 	navigate(route);
	// };

	return (
		<div className="modal">
			<div>
				<div className="beginnerlevelBoy">
					{/* Video Display */}
					<div className="flipVid">
						{/* {vid && ( */}
						<video
							autoPlay
							muted={false}
							ref={videoRef}
							// loop

							className="background-video"
							onEnded={handleVideoEnded}
						>
							{/* <source src={vid} type="video/mp4" /> */}
						</video>
						{/* )} */}
					</div>
					{showBtn && (
						<div className="modal-buttons-div">
							{/* Play Again Button */}
							<div
								className="modal-playAgain-buttons"
								onClick={() => resetGame()}
							>
								<img
									className="modal-playAgain-img"
									src={PlayAgainImg}
									alt="reset"
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
