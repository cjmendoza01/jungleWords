import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/Route.jsx";
import { BrowserRouter } from "react-router-dom";
import { BrowserView, isMobile } from "react-device-detect";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<div>
				{isMobile && (
					<div className="desktop-only-message">
						This app is only accessible on a desktop browser. Please switch to a
						desktop device.
					</div>
				)}

				<div className="app-content">
					{!isMobile ? (
						<BrowserView>
							<App />
						</BrowserView>
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
