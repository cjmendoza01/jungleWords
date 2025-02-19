import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BegLevelPickerGirlGenerate.css";
import begButton from "../assets/buttons&dialogues/begButton.png";
import intButton from "../assets/buttons&dialogues/intButton.png";
import advButton from "../assets/buttons&dialogues/advButton.png";
import lockImage from "../assets/buttons&dialogues/lock.png";
import accessCodeImage from "../assets/buttons&dialogues/accessCode.png";
import beginX from "../assets/buttons&dialogues/beginX.png";
import backButtonImage from "../assets/buttons&dialogues/backButton.png";
import genButtonImage from "../assets/buttons&dialogues/genButton.png";
import axios from "axios";
import saveButtonImage from "../assets/buttons&dialogues/saveButtonImage.png";

import girlVid from "/BGAnimationBoy.mp4";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const COOLDOWN_PERIOD = 30 * 60 * 1000; // 30 minutes in milliseconds

const passcodes = {
	beginner: [
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
	intermediate: [
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
	advanced: [
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

const BegLevelPickerBoyGenerate = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [accessCode, setAccessCode] = useState("");
	const [showAccessCodeInput, setShowAccessCodeInput] = useState(false);
	const [selectedLevel, setSelectedLevel] = useState(null);

	const [appData, setAppData] = useState({
		accessCodeBoy: {
			beginner: "",
			intermediate: "",
			advanced: "",
		},
	});
	const navigate = useNavigate();

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
	const handleStageClick = (level) => {
		setSelectedLevel(level);
		setShowAccessCodeInput(true);
		if (appData?.accessCodeGirl[level]) {
			setAccessCode(appData?.accessCodeGirl[level]);
		}
	};

	const saveAccessCode = async () => {
		if (selectedLevel && accessCode) {
			try {
				const saveItems = await axios.put(
					`https://junglewordsapi.onrender.com/api/accessCode`,
					{
						level: selectedLevel,
						value: accessCode,
						gender: "boy",
					}
				);
				console.log(saveItems);
				getDatas();
				alert(`Access Code for ${selectedLevel} saved`);
				handleCloseClick();
			} catch (error) {
				console.log(error);
				alert(error);
			}
		}
	};

	const handleSaveClick = () => {
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
			// Save the access code (you can modify this to save data elsewhere, if needed)
			localStorage.setItem(`savedAccessCode_${selectedLevel}`, accessCode);
			alert("Access code saved successfully.");
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
		navigate("/Manage");
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
                            <a href="/" className="home-linkz" onClick={() => sessionStorage.removeItem("isAuthenticated")}>
                                <img src="/home.png" alt="Home" />
                            </a>
                        </div>
			<div className="buttons">
				<div className="buttonWithLock">
					<button
						onClick={() => handleStageClick("beginner")}
						className={`beginButton ${
							selectedLevel === "beginner" ? "selected" : ""
						}`}
					>
						<img src={begButton} alt="Beginner" />
					</button>
					<img src={lockImage} alt="Lock" className="lockImages1" />
				</div>
				<div className="buttonWithLock">
					<button
						onClick={() => handleStageClick("intermediate")}
						className={`interButton ${
							selectedLevel === "intermediate" ? "selected" : ""
						}`}
					>
						<img src={intButton} alt="Intermediate" />
					</button>
					<img src={lockImage} alt="Lock" className="lockImage2" />
				</div>
				<div className="buttonWithLock">
					<button
						onClick={() => handleStageClick("advanced")}
						className={`advanButton ${
							selectedLevel === "advanced" ? "selected" : ""
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
					<div className="generate-code-button">
						<button onClick={generateAccessCode} className="gen-button-overlay">
							<img src={genButtonImage} alt="Generate" />
						</button>
					</div>
					<button onClick={saveAccessCode} className="save-button-overlay">
						<img src={saveButtonImage} alt="Save" />
					</button>
					<button onClick={handleCloseClick} className="close-button">
						<img src={beginX} alt="Close" />
					</button>
				</div>
			)}
		</div>
	);
};

export default BegLevelPickerBoyGenerate;
