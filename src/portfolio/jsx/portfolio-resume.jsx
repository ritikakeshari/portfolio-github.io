import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/portfolio-resume.css";

export function PortfolioResume() {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="text-center animate-fade-in">
                <h2 className="download mb-4 animate-slide-in">Download My Resume</h2>
                <p className="para mb-5 animate-fade-in-delayed">
                    Explore my professional background, skills, and experiences.
                    Click the button below to download my resume.
                </p>
                <a className="btn btn-dark btn-lg animate-button-bounce" download href="resume.pdf">
                    <i className="bi bi-download me-2"></i> Download Resume
                </a>
            </div>
        </div>
    );
}
