import React, { useEffect, useRef } from "react";

import soundicon from "../../assets/Volume.png";

export default function DisplayModal({ item }) {
	const audioRef = useRef();

	return (
		<div className="modal">
			<div className="modal-backdrop"></div>
			<div className="modal-container">
				{/* SOUND ICON */}
				{item?.audio ? (
					<>
						<div className="soundicon" onClick={() => audioRef.current.play()}>
							<img src={soundicon} alt="soundicon" />
						</div>

						<audio ref={audioRef} src={item.audio} />
					</>
				) : (
					<></>
				)}

				{/* CHOICES */}
				<div className="choices">
					<div>
						<img src={item.image} />
					</div>
				</div>
			</div>
		</div>
	);
}
