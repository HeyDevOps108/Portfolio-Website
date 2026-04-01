import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>

        <p className="para">I automate the boring.</p>

        <p className="para">I containerize what matters.</p>

        <p className="para">
          Shipping systems for years — without a single{" "}
          <span className="accent">“it works on my machine”</span> excuse.
        </p>

        <p className="para">
          Kubernetes clusters don’t scare me —{" "}
          <span className="accent">I build them.</span>
        </p>

        <p className="para">
          Terraform plans don’t intimidate me —{" "}
          <span className="accent">I write them.</span>
        </p>

        <p className="para">
          Production incidents don’t panic me —{" "}
          <span className="accent">I fix them.</span>
        </p>

<h4 className="weapons-title">Weapons</h4>

<div className="weapons">
  <span>Cloud</span>
  <span>Python</span>
  <span>Bash</span>
  <span>Kubernetes</span>
  <span>Docker</span>
  <span>Terraform</span>
  <span>CI/CD</span>
  <span>Linux</span>
  <span>Monitoring</span>
</div>
      </div>
    </div>
  );
};

export default About;