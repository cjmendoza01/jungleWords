import React, { useEffect, useRef } from "react";

import banana from "../../assets/bs2/banana.png";

export default function CheckModal({ item }) {
	const audioRef = useRef();

	return (
		<div className="modal">
			<div className="modal-backdrop"></div>

			<div style={{ width: "20%", height: "20%" }}>
				<div style={{ width: "100%", height: "100%" }}>
					<img
						style={{ width: "100%", height: "100%", objectFit: "contain" }}
						src={Banana}
					/>
				</div>
			</div>
		</div>
	);
}
