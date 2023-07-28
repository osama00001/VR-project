import React from 'react';
import {Brand,BuildingProcess,Footer,Header,Intro,JoinUs,Navbar,ReachOut,VRcontent,VrFeatures} from "./components"
import './main.scss';

function App() {
  return (
    <div className="bg_gradient">
      <Navbar/>
      <Header/>
      <ReachOut/>
    </div>
  );
}

export default App;
