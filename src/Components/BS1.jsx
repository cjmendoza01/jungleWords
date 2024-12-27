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
import ItemManagement from './ItemManagement.jsx';  
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
      <Route path='/ItemManagement' element={<ItemManagement />} />

    </Routes>
  );
}

export default App;
