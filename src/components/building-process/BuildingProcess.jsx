import React from "react";
import "./BuildingProcess.scss";
import arrowImg from "../../assert/Component 3.png";
import circle1 from "../../assert/01.png";
import circle2 from "../../assert/02.png";
import circle3 from "../../assert/03.png";
import circle4 from "../../assert/04.png";
import arrow from "../../assert/shape 5.png";

const BuildingProcess = () => {
  return (
    <div className="build_container">
      <div className="build_wrapper">
        <div className="build_content">
          <div className="build_title">
            <h1>HOW WE BUILD</h1>
            <div className="title_wrapper">
              <h4>WITH HYDRA VR?</h4>
              <div className="image_wrapper">
                <img src={arrowImg} />
              </div>
            </div>
          </div>
          <div className="build_para">
            <p>
              Vitae sapien pellentesque habitant morbi tristique senectus et
              netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
              lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
              nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet
              est placerat in. Lectus magna fringilla urna porttitor rhoncus
              vitae.
            </p>
          </div>
        </div>
        <div className="circles_container">
          <div className="circles_wrapper">
            <div className="circle_flex">
              <div className="circle">
                <div className="wrapper"></div>
                <img src={circle1} />
              </div>

              <div className="title_wrapper">
                <div className="title_image">
                  <img src={arrow} />
                </div>
                <div className="title">
                  <h1>3D Conception & Design</h1>
                </div>
              </div>
            </div>
            <div className="circle_flex">
              <div className="circle">
                <div className="wrapper"></div>
                <img src={circle2} />
              </div>
              <div className="title_wrapper">
                <div className="title_image">
                  <img src={arrow} />
                </div>
                <div className="title">
                  <h1>Interaction Design</h1>
                </div>
              </div>
            </div>
            <div className="circle_flex">
              <div className="circle">
                <div className="wrapper"></div>
                <img src={circle3} />
              </div>
              <div className="title_wrapper">
                <div className="title_image">
                  <img src={arrow} />
                </div>
                <div className="title">
                  <h1>VR World User Testing</h1>
                </div>
              </div>
            </div>
            <div className="circle_flex">
              <div className="circle">
                <div className="wrapper"></div>
                <img src={circle4} />
              </div>

              <div className="title_wrapper">
                <div className="title_image">
                  <img src={arrow} />
                </div>
                <div className="title">
                  <h1>Hydra VR Deploy</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingProcess;
