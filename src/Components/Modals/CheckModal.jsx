import React, { useEffect, useRef } from "react";

import Right from "../../assets/bs2/right.png";

export default function CheckModal({ item }) {
	const audioRef = useRef();

	return (
		<div className="modal">
			<div className="modal-backdrop"></div>

			<div style={{ width: "100%", height: "100%" }}>
				<div style={{ width: "100%", height: "100%" }}>
					<img
						style={{ width: "100%", height: "100%", objectFit: "contain" }}
						src={Right}
					/>
				</div>
			</div>
		</div>
	);
}
