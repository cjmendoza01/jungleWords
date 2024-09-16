import React, { useEffect, useState } from "react";
import { randonItemGetter } from "../utils/imageAssetPicker";
import { vowelChecker } from "../utils/checker";
import { Qfilters } from "../utils/formatter";
import { useLocation, useNavigate } from "react-router-dom";

import backButtonImage from "../assets/buttons&dialogues/backButton.png";
import DisplayModal from "./Modals/DisplayModal";
import NextGameModal from "./Modals/NextGameModal";
import Banana from "../assets/bs2/banana.png";
import Girl from "../assets/bs2/girlBasketEmpty.png";
import Boy from "../assets/bs2/boyBasketEmpty.png";
import Gonzo from "../assets/bs2/Gonzo.png";

import AImage from '../assets/bs2/A.png';
import EImage from '../assets/bs2/E.png';
import IImage from '../assets/bs2/I.png';
import OImage from '../assets/bs2/O.png';
import UImage from '../assets/bs2/U.png';

export default function Stage2() {
  const navigate = useNavigate(); 
  
  const [bananaCount, setBananaCount] = useState(9);
  const [questions, setQuestions] = useState([]);
  const [resetGame, setResetGame] = useState(false);
  const [nextRoute, setNextRoute] = useState("");
  
  const [openCheckModal, setOpenCheckModal] = useState(false);
  const [removeBanana, setRemoveBanana] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [disabledChoices, setDisabledChoices] = useState([]);
  const [correctButton, setCorrectButton] = useState("");
  const [openNextGameModal, setNextGameModal] = useState(true);
  
  const [gender, setGender] = useState("boy");
  const choices = ["A", "E", "I", "O", "U"];
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const qGender = queryParams.get("gender");
  const qLevel = queryParams.get("level");

  useEffect(() => {
    let gd = "boy";
    if (qGender) {
      gd = qGender.toLowerCase();
    }

    let lvl = "1";
    if (qLevel) {
      lvl = qLevel;
    }

    const nxtRt = `/stage3?gender=${gd}&level=${lvl}`;
    setNextRoute(nxtRt);
  }, [qGender, qLevel]);

  useEffect(() => {
    let level = 1;
    if (qLevel) {
      level = Number(qLevel);
    }
    if (questions.length === 0 && !gameComplete) {
      const items = randonItemGetter(8, level);
      setQuestions(items);
      setBananaCount(items.length);

      setTimeout(() => {
        setOpenModal(true);
      }, 5000);
    }

    if (gameComplete) {
      setTimeout(() => {
        setNextGameModal(true);
      }, 5000);
    }
  }, [questions, gameComplete]);

  useEffect(() => {
    setGameComplete(false);
    setResetGame(false);
    setNextGameModal(false);
  }, [resetGame]);

  const handleButtonClick = async (ch) => {
    const rightAns = questions[0];
    const right = await vowelChecker(ch, rightAns);

    if (right) {
      setRemoveBanana(true);
      setCorrectButton(ch);
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
      setDisabledChoices([...disabledChoices, ch]);
      setTimeout(() => {
        setCorrectButton(""); 
      }, 1000);
    }
  };

  const handleBackClick = () => {
    navigate(-1); 
  };

  const getImageForChoice = (choice) => {
    switch (choice) {
      case "A":
        return AImage;
      case "E":
        return EImage;
      case "I":
        return IImage;
      case "O":
        return OImage;
      case "U":
        return UImage;
      default:
        return "";
    }
  };

  return (
    <div className="stage2-main main">
      {/* Fullscreen background video */}
      <video
        autoPlay
        muted
        loop
        style={{
          position: "fixed", // Ensures it stays in the background
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Stretches the video to cover the whole screen
          zIndex: "1", // Places the video behind the game content
        }}
      >
        <source src="/bgstage2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Game content */}
      <div
        style={{
          position: "relative",
          zIndex: "1", // Ensures the game is above the video
          width: "100%",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <button className="backButton" onClick={handleBackClick}>
          <img src={backButtonImage} alt="Back" />
        </button>

        <div className="stage2-upper-div">
          <div className="stage2-upper2-div">
            <div style={{ width: "80%", display: "flex", alignItems: "end", justifyContent: "right" }}>
              <div className="stage-2-character-div">
                <img className="stage-2-char-div" src={gender === "boy" ? Boy : Girl} alt="Character" />
              </div>
              <div className="tester-image-container">
                {Array.from({ length: bananaCount }, (_, index) => (
                  <React.Fragment key={index}>
                    <img
                      className={`testr-img ${index === bananaCount - 1 && removeBanana ? "animate-bananaFall" : ""}`}
                      src={Banana}
                      alt="Banana"
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="stage2-monkey-div">
              <img className="stage2-monkey-img" src={Gonzo} alt="Gonzo" />
            </div>
          </div>
        </div>

        <div className="stage2-lower-div">
          <div className="stage-2-button-div">
            {choices.map((ch) => (
              <button
                key={ch}
                className={`stage-2-button-div-item ${disabledChoices.includes(ch) ? "button-stage2-error" : ""} ${correctButton === ch ? "button-stage2-correct" : ""}`}
                onClick={() => handleButtonClick(ch)}
                disabled={disabledChoices.includes(ch)}
                style={{
                  backgroundImage: `url(${getImageForChoice(ch)})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  border: "none",
                  width: "80px",
                  height: "80px",
                }}
              />
            ))}
          </div>
        </div>

        {openModal && (
          <DisplayModal item={questions[0]} closeModal={() => setOpenModal(false)} />
        )}
        {gameComplete && (
          <NextGameModal gender={gender} route={nextRoute} resetGame={() => setResetGame(true)} />
        )}
      </div>
    </div>
  );
}
