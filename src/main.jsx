import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/Route.jsx";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { isMobile } from "react-device-detect";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			{/* <Helmet> */}
			{/* <meta
					http-equiv="Content-Security-Policy"
					content="default-src 'self'; img-src 'self' https://junglewords.org; script-src 'self' https://junglewords.org; style-src 'self' 'unsafe-inline';"
				/>
				<meta http-equiv="X-Frame-Options" content="SAMEORIGIN" /> */}
			{/* </Helmet> */}
			<div>
				{isMobile && (
					<div className="desktop-only-message">
						This app is only accessible on a desktop browser. Please switch to a
						desktop device.
					</div>
				)}

				<div className="app-content">
					{!isMobile ? (
						<App />
					) : (
						<>
							<div
								style={{
									width: "100vw",
									height: "100vh",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								This app is only accessible on a desktop browser. Please switch
								to a desktop device.{" "}
							</div>
						</>
					)}
				</div>
			</div>
		</BrowserRouter>
	</React.StrictMode>
);
