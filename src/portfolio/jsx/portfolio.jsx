import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import '../styles/portfolio.css';
import { PortfolioHome } from './portfolio-home';
import { PortfolioAbout } from './portfolio-about';
import { PortfolioProject } from './portfolio-project';
import { PortfolioResume } from './portfolio-resume';

export function Portfolio() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <header className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 bg-dark text-white">
                    <div className="d-flex flex-column align-items-center mb-3 mb-md-0">
                        <img src="portfolio.jpg" width="120" height="120" className="rounded-circle" alt="Profile" />
                        <h5 className="mt-2 cursive">Ritika Keshari</h5>
                    </div>
                    <div className="text-center mb-3 mb-md-0">
                        <span className="h2">Frontend Web Developer</span>
                    </div>
                    <div className="fs-5 d-flex flex-wrap justify-content-center">
                        <Link className="btn btn-light mx-2 mb-2" to="/"> Home <i className="bi bi-house-fill"></i> </Link>
                        <Link className="btn btn-light mx-2 mb-2" to="about"> About Me <i className="bi bi-info-circle-fill"></i> </Link>
                        <Link className="btn btn-light mx-2 mb-2" to="projects"> My Projects <i className="bi bi-file-code-fill"></i> </Link>
                        <Link className="btn btn-light mx-2 mb-2" to="resume"> My Resume <i className="bi bi-file-text-fill"></i> </Link>
                    </div>
                </header>
                <section className="bg-secondary text-white p-3" style={{ minHeight: '100vh' }}>
                    <Routes>
                        <Route path="/" element={<PortfolioHome />} />
                        
                        <Route path="about" element={<PortfolioAbout />} />
                        <Route path="projects" element={<PortfolioProject />} />
                        <Route path="resume" element={<PortfolioResume />} />
                        <Route path="*" element={<div><h1>Oops!</h1> Unable to find your requested content</div>} />
                    </Routes>
                </section>
                <footer className="footer mt-auto py-2 bg-dark text-light">
                    <div>
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="cursive mb-2">Thanking You!</h4>
                                <p className="text-white-50 mb-0">Thank you for taking the time to visit my portfolio. I look forward to collaborating on future projects. If you have any questions or would like to discuss potential opportunities, please get in touch.</p>
                            </div>
                            <div className="col-md-6 text-md-right right">
                                <h5 className="cursive mb-2">Contact</h5>
                                <p className="mb-1">Varanasi, Uttar Pradesh, India <i className="bi bi-pin-map-fill ms-2"></i></p>
                                <p className="mb-1">+919305404866<i className="bi bi-telephone-fill ms-2"></i></p>
                                <p className="mb-1">
                                    <a href="mailto:ritikakeshari1997@gmail.com" className="text-light">ritikakeshari1997@gmail.com</a>
                                    <i className="bi bi-envelope-at-fill ms-2"></i>
                                </p>
                                <p className="mb-1">
                                    <a href="https://github.com/ritikakeshari" className="text-light">https://github.com/ritikakeshari</a>
                                    <i className="bi bi-github ms-2"></i>
                                </p>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col text-center">
                                <hr />
                                <p className="text-white-50"><small>© 2024. All Rights Reserved. Made By: Ritika Keshari</small></p>
                            </div>
                        </div>
                    </div>
                </footer>
            </BrowserRouter>
        </div>
    );
}
