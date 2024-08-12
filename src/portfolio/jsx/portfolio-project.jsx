import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/portfolio-project.css";

export function PortfolioProject() {
    return (
        <div className="container my-5">
            <div className="text-center mb-5">
                <h2 className="display-5 fw-bold text-dark mt-5 fade-in-up">My Projects</h2>
                <p className="lead text-dark mt-5 fade-in-up">I’m excited to discuss new projects, share creative ideas, and explore opportunities to bring your vision to life. Here are some of the projects I've passionately worked on:</p>
            </div>
            <div className="row mt-5 fade-in-up">
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="work">
                        <img src="weather.jpg" className="img-fluid rounded" alt="Weather Application"/>
                        <div className="overlay d-flex flex-column align-items-center justify-content-center text-center text-light p-3">
                            <h3>Weather Application</h3>
                            <a href="https://github.com/ritikakeshari/Weather-App" className="btn btn-outline-light rounded-pill mb-2">
                                <i className="bi bi-github"></i> View Project
                            </a>
                            <p>React, CSS, OpenWeather API</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="work">
                        <img src="book.jpg" className="img-fluid rounded" alt="Library Management System"/>
                        <div className="overlay d-flex flex-column align-items-center justify-content-center text-center text-light p-3">
                            <h3>Library Management System</h3>
                            <a href="https://github.com/ritikakeshari/Library" className="btn btn-outline-light rounded-pill mb-2">
                                <i className="bi bi-github"></i> View Project
                            </a>
                            <p>Angular, TypeScript, Bootstrap</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="work">
                        <img src="login.jpg" className="img-fluid rounded" alt="Responsive Login Form"/>
                        <div className="overlay d-flex flex-column align-items-center justify-content-center text-center text-light p-3">
                            <h3>Responsive Login Form</h3>
                            <a href="#" className="btn btn-outline-light rounded-pill mb-2">
                                <i className="bi bi-github"></i> View Project
                            </a>
                            <p>React, CSS, Bootstrap</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="work">
                        <img src="task.jpg" className="img-fluid rounded" alt="Task Management Tool"/>
                        <div className="overlay d-flex flex-column align-items-center justify-content-center text-center text-light p-3">
                            <h3>Task Management Tool</h3>
                            <a href="#" className="btn btn-outline-light rounded-pill mb-2">
                                <i className="bi bi-github"></i> View Project
                            </a>
                            <p>jQuery, Bootstrap, MongoDB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
