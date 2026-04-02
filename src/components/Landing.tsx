import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">

          {/* ── LEFT SIDE ── */}
          <div className="landing-intro">

            {/* Greeting */}
            <p className="landing-greeting">Hello, I'm</p>

            {/* Name */}
            <h1 className="landing-title">
              Vedant<span className="name-dot">.</span>
            </h1>

            {/* Purple accent line */}
            <div className="landing-divider"></div>

            {/* Role */}
            <p className="landing-role">
              DevOps Astronaut <span className="rocket">🚀</span>
            </p>

            {/* Tagline */}
            <p className="landing-tagline">
              Building systems that scale.<br />
              Shipping infra that never breaks.
            </p>

          </div>

          {/* ── RIGHT SIDE ── */}
          <div className="landing-info">

            {/* Small prefix label */}
            <p className="landing-pre">I architect &amp;</p>

            {/* Big stacked words */}
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">OPERATE</div>
              <div className="landing-h2-2">SCALE</div>
            </h2>

            {/* Tech stack tags */}
            <p className="landing-stack">CI/CD · Kubernetes · Cloud</p>

          </div>

        </div>

        {/* ── AVATAR (do not remove) ── */}
        {children}

      </div>
    </>
  );
};

export default Landing;