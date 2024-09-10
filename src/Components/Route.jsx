import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import AboutUs from "./AboutUs.jsx";
import CharacterPicker from "./CharacterPicker.jsx";
import LostGirl from "./LostGirl.jsx";
import LostBoy from "./LostBoy.jsx";
import BegLevelPickerGirl from "./BegLevelPickerGirl.jsx";
import BeginnerLevelGirl from "./BeginnerLevelGirl.jsx";
import BegLevelPickerBoy from "./BegLevelPickerBoy.jsx";
import BeginnerLevelBoy from "./BeginnerLevelBoy.jsx";
import BeginnerStage1Boy from "./BeginnerStage1Boy.jsx";
import BeginnerStage1Girl from "./BeginnerStage1Girl.jsx";
import IntermediateLevelBoy from "./IntermediateLevelBoy.jsx";
import IntermediateLevelGirl from "./IntermediateLevelGirl.jsx";
//import AdvanceLevelBoy from "./AdvanceLevelBoy.jsx";
import SanderTY from "./SanderTY.jsx";
import BS1GJBoy from "./BS1GJBoy.jsx";
import BoyVideo from "./BoyVideo.jsx";
import GirlVideo from "./GirlVideo.jsx";
import Stage2 from "./Stage-2.jsx";
import Tester from "./Tester.jsx";
import Stage3 from "./Stage3.jsx";
import Tester2 from "./Tester2.jsx";
import QRGame from "./QrGame.jsx";
function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/about-us" element={<AboutUs />} />
			<Route path="/startButton" element={<BeginnerStage1Boy />} />
			<Route path="/CharacterPicker" element={<CharacterPicker />} />
			<Route path="/LostGirl" element={<LostGirl />} />
			<Route path="/LostBoy" element={<LostBoy />} />
			<Route path="/BegLevelPickerGirl" element={<BegLevelPickerGirl />} />
			<Route path="/BeginnerLevelGirl" element={<BeginnerLevelGirl />} />
			<Route path="/BegLevelPickerBoy" element={<BegLevelPickerBoy />} />
			<Route path="/BeginnerLevelBoy" element={<BeginnerLevelBoy />} />
			<Route path="/BeginnerStage1Boy" element={<BeginnerStage1Boy />} />
			<Route path="/BeginnerStage1Girl" element={<BeginnerStage1Girl />} />
			<Route path="/IntermediateLevelBoy" element={<IntermediateLevelBoy />} />
			<Route path="/IntermediateLevelGirl" element={<IntermediateLevelGirl />} />
			{/* <Route path="/AdvanceLevelBoy" element={<AdvanceLevelBoy />} />  */}
			<Route path="/SanderTY" element={<SanderTY />} />
			<Route path="/BS1GJBoy" element={<BS1GJBoy />} />
			<Route path="/boy-video" element={<BoyVideo />} />
			<Route path="/girl-video" element={<GirlVideo />} />
			<Route path="/stage2" element={<Stage2 />} />
			<Route path="/stage3" element={<Stage3 />} />
			<Route path="/QRGame" element={<QRGame />} />
			<Route path="/Tester" element={<Tester />} />
			<Route path="/Tester2" element={<Tester2 />} />
		</Routes>
	);
}

export default App;
