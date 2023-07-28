import React from "react";
import "./IntroDescription.scss";
import arrow from "../../assert/arrow.png";
import introImage from "../../assert/introImage.png";

const IntroDescription = () => {
  return (
    <div className="intro_container">
      <div className="intro_wrapper">
      <div className="intro_hydra_wrapper">
        <div className="intro_hydra">
          
          <div className="title">
            <h1>INTRODUCTION</h1>
            <div className="arrow_wrapper">
              <p>To Hydra VR</p>
              <img src={arrow} />
            </div>
            </div>
          </div>
          <div className="image">
            <img src={introImage} />
          </div>
        </div>
        <div className="about_hydra">
          <div className="para_wrapper">
            <div className="intro_para">
              <p>
                Vitae sapien pellentesque habitant morbi tristique senectus et
                netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
                lectus. Mi sit amet mauris commodo quis imperdiet massa
                tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                lectus sit amet est placerat in. Lectus magna fringilla urna
                porttitor rhoncus vitae.
              </p>
            </div>
            <div className="about">
              <h1>
                ABOUT
                <p>HYDRA VR</p>
              </h1>
            </div>
            <div className="about_para">
              <p>
                Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
                mattis rhoncus urna neque viverra justo. Vivamus at augue eget
                arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
                Aenean et tortor at risus viverra adipiscing at in. Mattis
                aliquam faucibus purus in massa. Est placerat in egestas erat
                imperdiet sed. Consequat semper viverra nam libero justo laoreet
                sit amet. Aliquam etiam erat velit scelerisque in dictum non
                consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec
                ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet
                nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n
                tempor.
              </p>
            </div>
            <div className="button_wrapper">
              <button>LETS GET IN TOUCH</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroDescription;
