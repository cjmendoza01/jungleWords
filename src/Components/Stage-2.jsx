import React, { useEffect, useState } from "react";
import { randonItemGetter } from "../utils/imageAssetPicker";
import { vowelChecker } from "../utils/checker";
import { Qfilters } from "../utils/formatter";
import { useLocation } from "react-router-dom";

import DisplayModal from "./Modals/DisplayModal";

import Banana from "../assets/bs2/banana.png";
import Basketfull from "../assets/bs2/basketfull.png";
import Boy from "../assets/boy.png";
import Girl from "../assets/girl.png";
import CheckModal from "./Modals/CheckModal";

import egg1 from "../assets/is1/egg1.png";
import egg2 from "../assets/is1/egg2.png";
import egg3 from "../assets/is1/egg3.png";
import egg4 from "../assets/is1/egg4.png";
import egg5 from "../assets/is1/egg5.png";
import egg6 from "../assets/is1/egg6.png";
import egg7 from "../assets/is1/egg7.png";
import egg8 from "../assets/is1/egg8.png";

export default function Stage2() {
	const [bananaCount, setBananaCount] = useState(9);
	const [questions, setQuestions] = useState([]);

	const eggs = [egg1, egg2, egg3, egg4, egg5, egg6, egg7, egg8];

	const [openCheckModal, setOpenCheckModal] = useState(false);
	const [removeBanana, setRemoveBanana] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [gameComplete, setGameComplete] = useState(false);
	const [disabledChoices, setDisabledChoices] = useState([]);

	const [gender, setGender] = useState("boy");
	// const [level, setLevel] = useState(1);
	const choices = ["A", "E", "I", "O", "U"];

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);

	const qGender = queryParams.get("gender");
	const qLevel = queryParams.get("level");

	useEffect(() => {
		let level = 1;
		if (qLevel) {
			level = Number(qLevel);
		}
		if (questions.length === 0 && !gameComplete) {
			const items = randonItemGetter(8, level);
			setQuestions(items);
			setBananaCount(items.length);
			console.log(items);
			setTimeout(() => {
				setOpenModal(true);
			}, 500);
		}
	}, [questions, gameComplete]);

	useEffect(() => {
		const gends = ["girl", "boy"];
		console.log("QGender");
		console.log(qGender);
		if (qGender && gends.includes(qGender)) {
			setGender(qGender);
		}
	}, [qGender]);

	useEffect(() => {
		if (openCheckModal) {
			setRemoveBanana(false);
			setBananaCount((prevCount) => {
				const newCount = prevCount - 1;
				return newCount;
			});
			setTimeout(() => {
				setOpenCheckModal(false);
			}, 2000);
			const bnLen = bananaCount;
			console.log("bananacount :", bnLen);
			console.log(bananaCount);
			if (bnLen > 0) {
				setTimeout(() => {
					setOpenModal(true);
				}, 2500);
			}
		}
	}, [openCheckModal]);

	useEffect(() => {
		if (openModal) {
			setTimeout(() => {
				setOpenModal(false);
			}, 6000);
		}
	}, [openModal]);

	useEffect(() => {
		if (gameComplete) {
			//route to animation page
		}
	}, [gameComplete]);

	const handleButtonClick = async (ch) => {
		const rightAns = questions[0];

		const right = await vowelChecker(ch, rightAns);

		if (right) {
			setRemoveBanana(true);
			console.log("Right");
			const filtered = await Qfilters(rightAns, questions);

			setQuestions(filtered);

			if (bananaCount - 1 === 0) {
				setGameComplete(true);
			} else {
				setDisabledChoices([]);

				setTimeout(() => {
					setOpenCheckModal(true);
				}, 500);
			}
		} else {
			console.log("Wrong");
			setDisabledChoices([...disabledChoices, ch]);
		}
	};

	const getfoodLogo = (index) => {
		let level = 1;
		if (qLevel) {
			level = Number(qLevel);
		}

		console.log("qLevel", qLevel);
		if (level === 2) {
			console.log("level2", index);
			console.log(eggs);

			return eggs[index];
		}

		console.log("level1");
		return Banana;
	};

	return (
		<div className="stage2-main main" style={{ display: "block" }}>
			<div className="stage2-upper-div">
				<div className="stage2-upper2-div">
					<div
						style={{
							width: "80%",
							display: "flex",
							alignItems: "end",
							justifyContent: "right",
						}}
					>
						<div className="stage-2-character-div">
							<img
								className="stage-2-char-div"
								src={gender === "boy" ? Boy : Girl}
							/>
						</div>
						<div className="tester-image-container">
							{/* Render banana images */}
							{Array.from({ length: bananaCount }, (_, index) => (
								<img
									className={`testr-img ${
										index === bananaCount - 1 && removeBanana
											? "animate-bananaFall"
											: ""
									}`}
									src={getfoodLogo(index)}
									alt="Banana"
									key={index}
								/>
							))}
						</div>
					</div>
					<div className="stage2-monkey-div">
						<img className="stage2-monkey-img" src={Boy} />
					</div>
				</div>
			</div>

			<div className="stage2-lower-div">
				<div className="stage-2-button-div">
					{choices.map((ch) => {
						return (
							<button
								key={ch}
								className={`stage-2-button-div-item ${
									disabledChoices.includes(ch) ? "button-stage2-error" : ""
								}`}
								onClick={() => handleButtonClick(ch)}
								disabled={disabledChoices.includes(ch) ? true : false}
							>
								{ch}
							</button>
						);
					})}
				</div>
			</div>
			{openModal ? <DisplayModal item={questions[0]} /> : <></>}
			{openCheckModal ? <CheckModal /> : <></>}
			{gameComplete ? (
				<>
					<div className="modal">
						<div className="modal-backdrop"></div>

						<div style={{ width: "20%", height: "20%" }}>
							<div style={{ width: "100%", height: "100%" }}>
								<img
									style={{
										width: "100%",
										height: "100%",
										objectFit: "contain",
									}}
									src={Basketfull}
								/>
							</div>
						</div>
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	);
}
