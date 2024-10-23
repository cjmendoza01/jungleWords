import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/Route.jsx";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

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
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
