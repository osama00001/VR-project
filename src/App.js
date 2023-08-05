import React from 'react';
import {Brand,BuildingProcess,Footer,Header,Intro,JoinUs,Navbar,ReachOut,VRcontent,VrFeatures} from "./components"
import './main.scss';
import IntroDescription from './components/intro-description/IntroDescription';

function App() {
  return (
    <div className="bg_gradient">
      <Navbar/>
      <Header/>
      <ReachOut/>
      <IntroDescription/>
      <VrFeatures/>
      <Brand/>
      <BuildingProcess/>
      <JoinUs/>
    </div>
  );
}

export default App;
