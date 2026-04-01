import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">

          {/* 🔥 LEFT SIDE */}
<div className="landing-intro">
  <h1 className="landing-title">
    Hi, I'm <span className="name">Vedant</span>
  </h1>

  <h2 className="landing-role">
    DevOps Astronaut
  </h2>

  {/* 🔥 classy divider */}
  <div className="landing-divider"></div>

  <p className="landing-tagline">
    Building systems that scale. <br />
    Shipping infrastructure that doesn’t break.
  </p>
</div>

          {/* 🔥 RIGHT SIDE (ANIMATION SAFE) */}
          <div className="landing-info">
            <h3>I design &</h3>

            <h2 className="landing-info-h2">
              <div className="landing-h2-1">operate</div>
              <div className="landing-h2-2">scale</div>
            </h2>

            <h2>
              <div className="landing-h2-info">scale</div>
              <div className="landing-h2-info-1">operate</div>
            </h2>
          </div>

        </div>

        {/* 🔥 IMPORTANT: THIS BRINGS BACK AVATAR */}
        {children}
      </div>
    </>
  );
};

export default Landing;