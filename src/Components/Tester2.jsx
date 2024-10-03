import React, { useState, useEffect, useRef } from "react";
import { toPng } from "html-to-image";

import QRCode from "react-qr-code";

function Tester2() {
	const [answer, setAnswer] = useState("");
	const [showQr, setShowQr] = useState(false);

	const qrCodeRef = useRef();

	const downloadQR = () => {
		if (qrCodeRef.current) {
			toPng(qrCodeRef.current)
				.then((dataUrl) => {
					const link = document.createElement("a");
					link.href = dataUrl;
					link.download = `${answer}.png`;
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
				})
				.catch((err) => {
					console.error("Failed to download QR code:", err);
				});
		}
	};
	return (
		<main className="main">
			<div
				style={{
					// display: "flex",
					// justifyContent: "center",
					// alignItems: "center",
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
				<div
					style={{
						width: "100%",
						height: "80%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div>
						{showQr ? <QRCode value={answer} ref={qrCodeRef} /> : <></>}
					</div>
				</div>

				<button onClick={downloadQR}>Download QR Code</button>
			</div>
		</main>
	);
}

export default Tester2;
