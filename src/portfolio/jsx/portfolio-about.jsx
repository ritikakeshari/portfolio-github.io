import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/portfolio-about.css";

export function PortfolioAbout() {
    return (
        <div className="container my-5">
            <div className="card p-4 bg-dark text-light shadow-lg animate-fade-in">
                <h2 className="about-title fade-in-up">About Me</h2>
                <i className="about-subtitle fade-in-up">I am a React / Angular Developer</i>
                <div className="row">
                    <div className="col-md-4 text-center fade-in-up">
                        <img src={`${process.env.PUBLIC_URL}/pic.jpg`} alt="Profile" className="img-fluid rounded-circle mb-4 animate-fade-in-delay-more" />
                    </div>
                    <div className="col-md-8">
                        <p className="about-text animate-slide-in">
                            I focus on designing and developing dynamic, user-friendly interfaces that provide an exceptional user experience.
                            My expertise involves utilizing the distinctive advantages of both React and Angular to build seamless, interactive applications.
                        </p>
                        <p className="about-text animate-slide-in">
                            I am committed to keeping up with the latest industry trends and technologies, allowing me to continually refine my skills.
                        </p>
                        <p className="about-text animate-slide-in">
                            My goal is to create web applications that not only meet but exceed user expectations.
                            I believe that a great user interface is key to a successful application.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
