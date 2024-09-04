import React, { useState, useEffect } from "react";

import QRCode from "react-qr-code";

function Tester2() {
	const [answer, setAnswer] = useState("");
	const [showQr, setShowQr] = useState(false);
	return (
		<main className="main">
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					height: "100%",
				}}
			>
				<div style={{ width: "100%" }}>
					<label>
						Text input:{" "}
						<input
							name="myInput"
							onChange={(e) => setAnswer(e.target.value)}
							value={answer}
						/>
						<button onClick={() => setShowQr(true)}>Create qr code</button>
					</label>
				</div>
				<div style={{ width: "100%", height: "80%" }}>
					{showQr ? <QRCode value={answer} /> : <></>}
				</div>
			</div>
		</main>
	);
}

export default Tester2;
