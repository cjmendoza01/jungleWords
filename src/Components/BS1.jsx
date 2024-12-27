import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import AboutUs from './AboutUs.jsx';
import ChooseLevel from './ChooseLevel.jsx';
import ChooseBeginnerLevel from './ChooseBeginnerLevel.jsx';
import DragAndDrop1 from './DragAndDrop1.jsx';
import K1 from './K1.jsx';
import K2 from './K2.jsx'; 
import Menu from './Menu.jsx';
import BoyVideo from './BoyVideo.jsx';
import GirlVideo from './GirlVideo.jsx';  
import ItemManagementG1 from './ItemManagementG1.jsx';  
import ItemManagementG2 from './ItemManagementG2.jsx'; 
import ItemManagementG3 from './ItemManagementG3.jsx'; 
// Import Animation if it exists
// import Animation from './Animation.jsx'; 

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/startButton' element={<DragAndDrop1 />} />
      <Route path='/Menu' element={<Menu />} /> 
      {/* Uncomment if Animation component is available */}
      {/* <Route path='/Animation' element={<Animation />} /> */}
      <Route path='/K1' element={<K1 />} /> 
      <Route path='/K2' element={<K2 />} />
      <Route path='/chooselevel' element={<ChooseLevel />} />
      <Route path='/ChooseBeginnerLevel' element={<ChooseBeginnerLevel />} /> 
      <Route path='/DragAndDrop1' element={<DragAndDrop1 />} />
      <Route path='/boy-video' element={<BoyVideo />} />
      <Route path='/girl-video' element={<GirlVideo />} />
      <Route path='/ItemManagementG1' element={<ItemManagementG1 />} />
      <Route path='/ItemManagementG2' element={<ItemManagementG2 />} />
      <Route path='/ItemManagementG3' element={<ItemManagementG3 />} />

    </Routes>
  );
}

export default App;
