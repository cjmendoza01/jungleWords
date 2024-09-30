import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import NextGameImg from "../../assets/buttons&dialogues/nextStage.png";
import PlayAgainImg from "../../assets/buttons&dialogues/playAgain.png";
import BoyAnimation from "/vgoodBoy.mp4";
import GirlAnimation from "/vgoodGirl.mp4";

export default function NextGameModal({ gender, route, resetGame }) {
  const navigate = useNavigate();

  const routeNextGame = () => {
    navigate(route);
  };

  return (
    <div className="modal">
      <div>
        <div className="beginnerlevelBoy">
          {/* Video Display */}
          <div className="flipVid">
            <video autoPlay muted loop className="background-video">
              <source
                src={gender === "boy" ? BoyAnimation : GirlAnimation}
                type="video/mp4"
              />
            </video>
          </div>

          {/* Buttons for Next Stage and Play Again */}
          <div className="modal-buttons-div">
            {/* Play Again Button */}
            <div className="modal-playAgain-buttons" onClick={() => resetGame()}>
              <img className="modal-playAgain-img" src={PlayAgainImg} alt="reset" />
            </div>

            {/* Next Game Button */}
            <div className="modal-nextGame-buttons" onClick={() => routeNextGame()}>
              <img className="modal-nextGame-img" src={NextGameImg} alt="next game" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
