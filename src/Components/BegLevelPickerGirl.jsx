import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BegLevelPickerGirl.css";
import begButton from "../assets/buttons&dialogues/begButton.png";
import intButton from "../assets/buttons&dialogues/intButton.png";
import advButton from "../assets/buttons&dialogues/advButton.png";
import lockImage from "../assets/buttons&dialogues/lock.png";
import accessCodeImage from "../assets/buttons&dialogues/accessCode.png";
import doneButton from "../assets/buttons&dialogues/done.png";
import beginX from "../assets/buttons&dialogues/beginX.png";
import backButtonImage from "../assets/buttons&dialogues/backButton.png";
import axios from "axios";
import girlVid from "/BGAnimationGirl.mp4";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const COOLDOWN_PERIOD = 30 * 60 * 1000; // 30 minutes in milliseconds

const passcodes = {
	Beginner: [
		"beg512",
		"beg873",
		"beg124",
		"beg631",
		"beg298",
		"beg745",
		"beg431",
		"beg250",
		"beg539",
		"beg876",
		"beg192",
		"beg693",
		"beg401",
		"beg522",
		"beg318",
		"beg649",
		"beg927",
		"beg834",
		"beg387",
		"beg681",
	],
	Intermediate: [
		"int741",
		"int132",
		"int596",
		"int340",
		"int805",
		"int234",
		"int489",
		"int763",
		"int145",
		"int652",
		"int318",
		"int970",
		"int582",
		"int691",
		"int425",
		"int860",
		"int583",
		"int703",
		"int496",
		"int214",
	],
	Advanced: [
		"adv831",
		"adv426",
		"adv597",
		"adv145",
		"adv362",
		"adv783",
		"adv295",
		"adv614",
		"adv854",
		"adv471",
		"adv263",
		"adv928",
		"adv510",
		"adv709",
		"adv164",
		"adv837",
		"adv935",
		"adv249",
		"adv618",
		"adv753",
	],
};

const BegLevelPickerGirl = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [accessCode, setAccessCode] = useState("");
	const [showAccessCodeInput, setShowAccessCodeInput] = useState(false);
	const [selectedLevel, setSelectedLevel] = useState(null);

	const navigate = useNavigate();

	const [appData, setAppData] = useState({
		accessCodeGirl: {
			beginner: "",
			intermediate: "",
			advanced: "",
		},
	});

	useEffect(() => {
		getDatas();
	}, []);

	const getDatas = async () => {
		try {
			const data = await axios.get(
				"https://junglewordsapi.onrender.com/api/data"
			);
			console.log("Fetched Data", data);
			setAppData(data?.data);
		} catch (error) {
			console.log(error);
		}
	};

	const checkAccessCode = () => {
		console.log("appData", appData);
		if (appData?.accessCodeGirl[selectedLevel.toLowerCase()] === accessCode) {
			// Navigate to the respective level
			if (selectedLevel === "Beginner") {
				navigate("/BeginnerLevelGirl");
			} else if (selectedLevel === "Intermediate") {
				navigate("/IntermediateLevelGirl");
			} else if (selectedLevel === "Advanced") {
				navigate("/AdvanceLevelGirl");
			}
		} else {
			alert("Invalid access code.");
		}
	};

	const handleStageClick = (level) => {
		setSelectedLevel(level);
		setShowAccessCodeInput(true);
	};

	const handleDoneClick = () => {
		const currentTime = Date.now();
		const lastUsedTime = localStorage.getItem(`lastUsed_${accessCode}`);

		if (lastUsedTime && currentTime - lastUsedTime < COOLDOWN_PERIOD) {
			alert(
				"This access code has been used recently. Please wait 30 minutes before using it again."
			);
			return;
		}

		let isAccessGranted = false;
		// Check if the access code is in the list for the selected level
		if (
			passcodes[selectedLevel] &&
			passcodes[selectedLevel].includes(accessCode)
		) {
			isAccessGranted = true;
			// Navigate to the respective level
			if (selectedLevel === "Beginner") {
				navigate("/BeginnerLevelGirl");
			} else if (selectedLevel === "Intermediate") {
				navigate("/IntermediateLevelGirl");
			} else if (selectedLevel === "Advanced") {
				navigate("/AdvanceLevelGirl");
			}
		} else {
			alert("Invalid access code.");
		}

		if (isAccessGranted) {
			// Store the current time as the last used time for this access code
			localStorage.setItem(`lastUsed_${accessCode}`, currentTime.toString());
		}
	};

	const handleCloseClick = () => {
		setShowAccessCodeInput(false);
		setAccessCode("");
		setSelectedLevel(null);
	};

	const handleBackClick = () => {
		navigate("BeginnerLevelGirl");
	};

	// Generate random access code for selected level
	const generateAccessCode = () => {
		if (selectedLevel) {
			const codes = passcodes[selectedLevel];
			const randomCode = codes[Math.floor(Math.random() * codes.length)];
			setAccessCode(randomCode);
		}
	};

	return (
		<div className="chooselevelGirl">
			<video autoPlay muted loop className="background-video">
				<source src={girlVid} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="nav-buttons">
				<button onClick={handleBackClick} className="nav-button back-button">
					<img src={backButtonImage} alt="Back" />
				</button>
			</div>
			<div className="buttons">
				<div className="buttonWithLock">
					<button
						onClick={() => handleStageClick("Beginner")}
						className={`beginButton ${
							selectedLevel === "Beginner" ? "selected" : ""
						}`}
					>
						<img src={begButton} alt="Beginner" />
					</button>
					<img src={lockImage} alt="Lock" className="lockImages1" />
				</div>
				<div className="buttonWithLock">
					<button
						onClick={() => handleStageClick("Intermediate")}
						className={`interButton ${
							selectedLevel === "Intermediate" ? "selected" : ""
						}`}
					>
						<img src={intButton} alt="Intermediate" />
					</button>
					<img src={lockImage} alt="Lock" className="lockImage2" />
				</div>
				<div className="buttonWithLock">
					<button
						onClick={() => handleStageClick("Advanced")}
						className={`advanButton ${
							selectedLevel === "Advanced" ? "selected" : ""
						}`}
					>
						<img src={advButton} alt="Advanced" />
					</button>
					<img src={lockImage} alt="Lock" className="lockImage3" />
				</div>
			</div>
			{showAccessCodeInput && (
				<div className="access-code-container">
					<img
						src={accessCodeImage}
						alt="Access Code"
						className="access-code-image"
					/>
					<div
						style={{
							position: "absolute",
							width: "40%",
							top: "55%",
							left: "50%",
							marginTop: "10px",
						}}
					>
						<div style={{ width: "100%", position: "relative" }}>
							<input
								type={passwordVisible ? "text" : "password"}
								value={accessCode}
								onChange={(e) => setAccessCode(e.target.value)}
								className="access-code-input2"
								placeholder="Enter Access Code"
							/>
							<div
								style={{
									position: "relative",
									transform: "translate(-50%, -50%)",
								}}
							>
								<button
									onClick={() => setPasswordVisible(!passwordVisible)}
									style={{
										position: "absolute",
										right: "0px",
										top: "-45px",
										background: "none",
										border: "none",
										cursor: "pointer",
									}}
								>
									{passwordVisible ? <FaEye /> : <FaEyeSlash />}
								</button>
							</div>
						</div>
					</div>
					<button onClick={checkAccessCode} className="dones-button-overlay">
						<img src={doneButton} alt="Done" />
					</button>
					<button onClick={handleCloseClick} className="close-button">
						<img src={beginX} alt="Close" />
					</button>
				</div>
			)}
		</div>
	);
};

export default BegLevelPickerGirl;
