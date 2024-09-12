import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import NextGameImg from "../../assets/buttons&dialogues/nextStage.png";
import PlayAgainImg from "../../assets/buttons&dialogues/playAgain.png";
import BoyAnimation from "/BGAnimationBoy.mp4";
import GirlAnimation from "/BGAnimationGirl.mp4";

export default function NextGameModal({ gender, route, resetGame }) {
	const navigate = useNavigate();

	const routeNextGame = () => {
		navigate(route);
	};
	return (
		<div className="modal">
			<div
			// style={{ width: "100%", height: "100%" }}
			>
				<div className="beginnerlevelBoy">
					<div className="flipVid">
						<video autoPlay muted loop className="background-video">
							<source
								src={gender === "boy" ? BoyAnimation : GirlAnimation}
								type="video/mp4"
							/>
						</video>
					</div>
					<div className="modal-nextGame-buttons-div">
						<div style={{ width: "50%" }}>
							<div
								className="modal-nextGame-buttons"
								onClick={() => routeNextGame()}
							>
								<img
									className="modal-nextGame-img"
									src={NextGameImg}
									alt="next game"
								/>
							</div>
							<div
								className="modal-nextGame-buttons"
								onClick={() => resetGame()}
							>
								<img
									className="modal-nextGame-img"
									src={PlayAgainImg}
									alt="reset"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
