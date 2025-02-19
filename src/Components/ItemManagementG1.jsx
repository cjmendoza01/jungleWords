import React, { useState, useEffect } from "react";
import "./ItemManagementG1.css";
import chooseIcon from "../assets/buttons&dialogues/itemManagement.png";
import replayButtonImage from "../assets/buttons&dialogues/replayButton.png";
import CheckButtonImage from "../assets/buttons&dialogues/CheckButton.png";
import MSC from "/Music.mp3";
import { foodItemsList } from "../utils/dndItemsGame";
import { itemsList2, wordCvc3 as gonzoItem } from "../utils/gonzoBunny";
import { wordCvc3, longVowels } from "../utils/imageAssetPicker";
import { wordCvc4 } from "../utils/dndItemsGame";

import backButtonImage from "../assets/buttons&dialogues/backButton.png";
import { itemsListAdvs1, itemsListAdvs2 } from "../utils/advAssets";
import { wordFamily } from "../utils/is3Assets";
import Image1BG from "/gamebg1.png";
import Image2BG from "/gamebg2.png";
import Image3BG from "/gamebg3.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ItemManagementG1 = () => {
	const navigate = useNavigate();

	const stageData = {
		beginner: {
			stage1: { items: foodItemsList, bg: Image1BG, limit: 6 },
			stage2: { items: gonzoItem, bg: Image2BG, limit: 8 },
			stage3: { items: wordCvc3, bg: Image3BG, limit: 8 },
		},
		intermediate: {
			stage1: { items: itemsList2, bg: Image2BG, limit: 8 },
			stage2: { items: wordCvc4, bg: Image1BG, limit: 6 },
			stage3: { items: wordFamily, bg: Image3BG, limit: 8 },
		},
		advanced: {
			stage1: { items: itemsListAdvs1, bg: Image1BG, limit: 5 },
			stage2: { items: itemsListAdvs2, bg: Image1BG, limit: 5 },
		},
	};

	const [appData, setAppData] = useState({
		beginner: {
			stage1: [],
			stage2: [],
			stage3: [],
		},
		intermediate: {
			stage1: [],
			stage2: [],
			stage3: [],
		},
		advanced: {
			stage1: [],
			stage2: [],
		},
	});

	const [level, setLevel] = useState("beginner");
	const [stage, setStage] = useState("stage1");
	const [maxItems, setMaxItems] = useState(6);
	const [selectedItems, setSelectedItems] = useState([]);
	const [imageBg, setImageBg] = useState(Image1BG);
	const [gameItems, setGameItems] = useState(foodItemsList);

	useEffect(() => {
		getDatas();
	}, []);

	useEffect(() => {
		if (level && stage && appData) {
			setSelectedItems(appData[level][stage]);
			setGameItems(stageData[level][stage].items);
			setImageBg(stageData[level][stage].bg);
			setMaxItems(stageData[level][stage].limit);
		}
	}, [level, stage, appData]);

	const saveData = async () => {
		if (level && stage) {
			try {
				const saveItems = await axios.post(
					`https://junglewordsapi.onrender.com/api/${level}/${stage}`,
					{ items: selectedItems }
				);
				console.log(saveItems);
				getDatas();
				alert(`Items for ${level} ${stage} saved`);
			} catch (error) {
				console.log(error);
				alert(error);
			}
		}
	};

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

	const chooseItem = (chosenItem) => {
		const selected = selectedItems || [];
		const max = stageData[level][stage].limit;
		if (selected?.length < max) {
			const findItem = selected.find((item) => item.id === chosenItem.id);
			if (!findItem)
				setSelectedItems((items) => {
					return [...items, chosenItem];
				});
		}
	};

	const deSelectItem = (removedItem) => {
		const items = selectedItems || [];
		const filteredItems = items.filter((item) => item.id !== removedItem.id);

		setSelectedItems(filteredItems);
	};

	const handleBackClick = () => {
		navigate("/Manage");
	};

	return (
		<div className="ItemManagement">
			<div className="nav-buttons">
                            <a href="/" className="home-linkz" onClick={() => sessionStorage.removeItem("isAuthenticated")}>
                                <img src="/home.png" alt="Home" />
                            </a>
                        </div>
			<div className="buttons"></div>
			<div
				style={{
					position: "absolute",
					width: "100%",
					height: "100%",
					zIndex: "-1",
				}}
			>
				<img
					src={imageBg}
					style={{ width: "100%", height: "100%", objectFit: "fill" }}
				/>
			</div>
			<audio autoPlay loop src={MSC} />
			<div className="header">
				<img src={chooseIcon} alt="Item Management" />
				<div className="dropdown-container">
					<select
						className="custom-dropdown"
						onChange={(event) => {
							if (event.target.value === "advanced" && stage === "stage3") {
								setStage("stage1");
							}
							setLevel(event.target.value);
						}}
					>
						<option value="beginner"> Beginner</option>
						<option value="intermediate">Intermediate</option>
						<option value="advanced">Advanced</option>
					</select>

					<select
						className="custom-dropdown"
						onChange={(event) => setStage(event.target.value)}
					>
						<option value="stage1">Stage 1</option>
						<option value="stage2">Stage 2</option>
						{level !== "advanced" && <option value="stage3">Stage 3</option>}
					</select>
				</div>
			</div>

			<div className="items">
				{/* Main item box */}
				<div className="main-box">
					{gameItems?.map((item) => (
						<div className="item">
							<img
								src={item?.image}
								style={{ width: "100%", height: "100%", objectFit: "contain" }}
								onClick={() => chooseItem(item)}
							/>
						</div>
					))}
				</div>

				{/* Additional box */}
				<div className="additional-box">
					{selectedItems?.map((item) => (
						<div className="item">
							<img
								src={item?.image}
								style={{ width: "100%", height: "100%", objectFit: "contain" }}
								onClick={() => deSelectItem(item)}
							/>
						</div>
					))}
				</div>
			</div>

			<div className="navigation-buttons">
				<button className="replay-button">
					<img
						src={replayButtonImage}
						alt="Replay"
						onClick={() => setSelectedItems([])}
					/>
				</button>
				<button
					className="next-button"
					onClick={() => saveData()}
					disabled={selectedItems?.length !== maxItems}
				>
					<img src={CheckButtonImage} alt="Next" />
				</button>
			</div>
		</div>
	);
};

export default ItemManagementG1;
