import React, { useEffect, useRef, useState } from "react";

import soundicon from "../../assets/Volume.png";

export default function DisplayModal({ item, closeModal }) {
	const audioRef = useRef();

	const [playSound, setPlaySound] = useState(true);
	useEffect(() => {
		if (playSound && audioRef?.current) {
			audioRef.current.src = item?.audio;
			audioRef.current.play();

			setPlaySound(false);
		}
	}, [playSound]);
	return (
		<div className="modal">
			<div className="modal-backdrop"></div>
			<div className="modal-container">
				<div style={{ position: "relative" }}>
					<div
						className="soundicon"
						style={{
							position: "absolute",
							top: "0px",
							left: "-40px",
							height: "80px",
							width: "100px",
							backgroundColor: "lightgray",
							border: "none",
						}}
						onClick={() => setPlaySound(true)}
					>
						<img src={soundicon} alt="soundicon" />
					</div>
				</div>
				<div className="modalCloseBtnDiv">
					<div className="modalCloseBtn" onClick={() => closeModal()}>
						{/* X */}
					</div>
				</div>

				<audio ref={audioRef} />
				{/* SOUND ICON */}
				{/* {item?.audio ? (
					<>
						<div className="soundicon" onClick={() => audioRef.current.play()}>
							<img src={soundicon} alt="soundicon" />
						</div>

						<audio ref={audioRef} src={item.audio} />
					</>
				) : (
					<></>
				)} */}

				{/* CHOICES */}
				<div className="choices">
					<div
						onClick={() => {
							if (item?.audio) {
								audioRef.current.play();
							}
						}}
					>
						<br></br>
						<img
							style={{ width: "100%", height: "100%", objectFit: "contain" }}
							src={item?.image}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
