import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career<span></span>
          <br />
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* 🔥 ROLE 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Engineer</h4>
                <h5>Oracle Financial Software Services</h5>
              </div>

              <div className="career-duration">
                <h3>2023 – Present</h3>
              </div>
            </div>

            <p>
              Built CI/CD pipelines for 500+ microservices, enabling automated deployments and rollback.  
              Designed multi-tenant Kubernetes clusters with RBAC and IAM for secure production workloads.
            </p>
          </div>

          {/* 🔥 ROLE 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Engineer</h4>
                <h5>Apptware Solutions</h5>
              </div>

              <div className="career-duration">
                <h3>2021 – 2022</h3>
              </div>
            </div>

            <p>
              Developed CI/CD pipelines using Jenkins to automate build, test, and deployment workflows.  
              Managed AWS infrastructure and Kubernetes environments, ensuring reliable application deployments 
              across multiple stages with consistent infrastructure provisioning using Terraform.
            </p>
          </div>

          {/* 🔥 ROLE 3 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer (Intern)</h4>
                <h5>Cravita Technology</h5>
              </div>

              <div className="career-duration">
                <h3>2021</h3>
              </div>
            </div>

            <p>
              Worked on CI/CD automation using Jenkins, Docker, and Git while supporting AWS-based deployments.  
              Assisted in troubleshooting build and deployment issues and contributed to improving automation 
              processes and team documentation.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;