import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import AboutUs from "./AboutUs.jsx";
import SpecialEducation from "./SpecialEducation.jsx";
import TandC from "./TandC.jsx";
import Aboutsdes from "./Aboutsdes.jsx";
import SupportSDES from "./SupportSDES.jsx";
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
import BegLevelPickerGirlSample from "./BegLevelPickerGirlSample.jsx";
import BegLevelPickerGirlGenerate from "./BegLevelPickerGirlGenerate.jsx";
//import AdvanceLevelBoy from "./AdvanceLevelBoy.jsx";
import SanderTY from "./SanderTY.jsx";
import BS1GJBoy from "./BS1GJBoy.jsx";
import BS1GJGirl from "./BS1GJGirl.jsx";
import BoyVideo from "./BoyVideo.jsx";
import GirlVideo from "./GirlVideo.jsx";
import BS2BoyGonzoTY from "./BS2BoyGonzoTY.jsx";
import Stage2 from "./Stage-2.jsx";
import Tester from "./Tester.jsx";
import Stage3 from "./Stage3.jsx";
import Tester2 from "./Tester2.jsx";
import QRGame from "./QrGame.jsx";
import BoyBS1intro from "./BoyBS1intro.jsx";
import GirlBS1intro from "./GirlBS1intro.jsx";
import BoyBS2intro from "./BoyBS2intro.jsx";
import GirlBS2intro from "./GirlBS2intro.jsx";
import BoyBS3intro from "./BoyBS3intro.jsx";
import GirlBS3intro from "./GirlBS3intro.jsx";
import Stage1 from "./Stage-1.jsx";
import BS2GJBoy from "./BS2GJBoy.jsx";
import BS3GJBoy from "./BS3GJBoy.jsx";
import RewardPageBoy from "./RewardPageBoy.jsx";
import RewardPageGirl from "./RewardPageGirl.jsx";
import BeginnerStage2 from "./BeginnerStage2.jsx";
import IntermidiateStage1 from "./IntermidiateStage1.jsx";
import BS1GonzoTY from "./BS1GonzoTY.jsx";
import BoyIS1introo from "./BoyIS1introo.jsx";
import BoyIS2intro from "./BoyIS2intro.jsx";
import BoyIS3intro from "./BoyIS3intro.jsx";
import GirlIS1intro from "./GirlIS1intro.jsx";
import GirlIS2intro from "./GirlIS2intro.jsx";
import GirlIS3intro from "./GirlIS3intro.jsx";
import AdvanceLevelBoy from "./AdvanceLevelBoy.jsx";
import AdvanceLevelGirl from "./AdvanceLevelGirl.jsx";
import BoyADV1intro from "./BoyADV1intro.jsx";
import GirlADV1intro from "./GirlADV1intro.jsx";
import BoyADV2intro from "./BoyADV2intro.jsx";
import GirlADV2intro from "./GirlADV2intro.jsx";
import IntermidiateStage2 from "./IntermidiateStage2.jsx";
import IS2GJ from "./IS2GJ.jsx";
import IS2TY from "./IS2TY.jsx";
import BS1TY from "./BS1TY.jsx";
import BS1GJ from "./BS1GJ.jsx";
import QRGame2 from "./QRGame2.jsx";
import LastNextGameModal from "./Modals/LastNextGameModal.jsx";
import AdvanceGJGirl from "./AdvanceGJGirl.jsx";
import AdvanceGJBoy from "./AdvanceGJBoy.jsx";
import ItemManagementG1 from "./ItemManagementG1.jsx";
import ItemManagementG2 from './ItemManagementG2.jsx'; 
import ItemManagementG3 from './ItemManagementG3.jsx'; 

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/AboutUs" element={<AboutUs />} />
			<Route path="/SpecialEducation" element={<SpecialEducation />} />
			<Route path="/Aboutsdes" element={<Aboutsdes />} />
			<Route path="/SupportSDES" element={<SupportSDES />} />
			<Route path="/TandC" element={<TandC />} />
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
			<Route path="/RewardPageBoy" element={<RewardPageBoy />} />
			<Route path="/RewardPageGirl" element={<RewardPageGirl />} />
			<Route path="/BeginnerStage1Boy" element={<BeginnerStage1Boy />} />
			<Route path="/BegLevelPickerGirlSample" element={<BegLevelPickerGirlSample />} />
			<Route path="/BegLevelPickerGirlGenerate" element={<BegLevelPickerGirlGenerate  />} />

			{/* <Route path="/AdvanceLevelBoy" element={<AdvanceLevelBoy />} />  */}
			<Route path="/SanderTY" element={<SanderTY />} />
			<Route path="/BS1GJBoy" element={<BS1GJBoy />} />
			<Route path="/BS2GJBoy" element={<BS2GJBoy />} />
			<Route path="/BS3GJBoy" element={<BS3GJBoy />} />
			<Route path="/BS1GJGirl" element={<BS1GJGirl />} />
			<Route path="/boy-video" element={<BoyVideo />} />
			<Route path="/girl-video" element={<GirlVideo />} />
			<Route path="/stage1" element={<Stage1 />} />
			<Route path="/stage2" element={<Stage2 />} />
			<Route path="/stage3" element={<Stage3 />} />
			<Route path="/QRGame" element={<QRGame />} />
			<Route path="/Tester" element={<Tester />} />
			<Route path="/Tester2" element={<Tester2 />} />
			<Route path="/BoyBS1intro" element={<BoyBS1intro />} />
			<Route path="/GirlBS1intro" element={<GirlBS1intro />} />
			<Route path="/BoyBS2intro" element={<BoyBS2intro />} />
			<Route path="/GirlBS2intro" element={<GirlBS2intro />} />
			<Route path="/BoyBS3intro" element={<BoyBS3intro />} />
			<Route path="/GirlBS3intro" element={<GirlBS3intro />} />
			<Route path="/BS2BoyGonzoTY" element={<BS2BoyGonzoTY />} />
			<Route path="/BS1GonzoTY" element={<BS1GonzoTY />} />
			<Route path="/BeginnerStage2" element={<BeginnerStage2 />} />
			<Route path="/IntermidiateStage1" element={<IntermidiateStage1 />} />
			<Route path="/IntermidiateStage2" element={<IntermidiateStage2 />} />
			<Route path="/IS2GJ" element={<IS2GJ />} />
			<Route path="/IS2TY" element={<IS2TY />} />
			<Route path="/BoyIS1introo" element={<BoyIS1introo />} />
			<Route path="/BoyIS2intro" element={<BoyIS2intro />} />
			<Route path="/BoyIS3intro" element={<BoyIS3intro />} />
			<Route path="/GirlIS1intro" element={<GirlIS1intro />} />
			<Route path="/GirlIS2intro" element={<GirlIS2intro />} />
			<Route path="/GirlIS3intro" element={<GirlIS3intro />} />
			<Route path="/AdvanceLevelBoy" element={<AdvanceLevelBoy />} />
			<Route path="/AdvanceLevelGirl" element={<AdvanceLevelGirl />} />
			<Route
				path="/IntermediateLevelGirl"
				element={<IntermediateLevelGirl />}
			/>
			<Route path="/BoyADV1intro" element={<BoyADV1intro />} />
			<Route path="/GirlADV1intro" element={<GirlADV1intro />} />
			<Route path="/BoyADV2intro" element={<BoyADV2intro />} />
			<Route path="/GirlADV2intro" element={<GirlADV2intro />} />
			<Route path="/BS1GJ" element={<BS1GJ />} />
			<Route path="/BS1TY" element={<BS1TY />} />
			<Route path="/LastGame" element={<LastNextGameModal />} />
            <Route path='/ItemManagementG1' element={<ItemManagementG1 />} />
			<Route path='/ItemManagementG2' element={<ItemManagementG2 />} />
			<Route path='/ItemManagementG3' element={<ItemManagementG3 />} />
			<Route path="/QRGame2" element={<QRGame2 />} />
			<Route path="/AdvanceGJGirl" element={<AdvanceGJGirl />} />
			<Route path="/AdvanceGJBoy" element={<AdvanceGJBoy />} />
		</Routes>
	);
}

export default App;
