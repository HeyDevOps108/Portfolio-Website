import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Kubernetes Microservices Platform",
    category: "Cloud / DevOps",
    tools: "Kubernetes, Docker, Helm, AWS EKS, NGINX",
    image: "/images/placeholder.webp",
  },
  {
    title: "CI/CD Automation Pipeline",
    category: "DevOps Automation",
    tools: "Jenkins, GitLab CI, Docker, Terraform",
    image: "/images/placeholder.webp",
  },
  {
    title: "Monitoring & Observability Stack",
    category: "SRE / Monitoring",
    tools: "Prometheus, Grafana, ELK Stack, Alertmanager",
    image: "/images/placeholder.webp",
  },
  {
    title: "Infrastructure as Code (AWS)",
    category: "Cloud / IaC",
    tools: "Terraform, AWS EC2, VPC, S3, IAM",
    image: "/images/placeholder.webp",
  },
  {
    title: "DevSecOps Pipeline",
    category: "Security / DevOps",
    tools: "SonarQube, Trivy, Snyk, Docker",
    image: "/images/placeholder.webp",
  },
  {
    title: "High Availability Architecture",
    category: "Cloud Architecture",
    tools: "AWS ALB, Auto Scaling, Route53",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tech Stack</h4>
                <p>{project.tools}</p>
              </div>

              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;