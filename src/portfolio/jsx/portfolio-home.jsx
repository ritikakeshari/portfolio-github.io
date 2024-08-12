
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/portfolio-home.css";

export function PortfolioHome() {
    return (
        <div className="section container-fluid d-flex align-items-center justify-content-center">
            <div className="row align-items-center content-box p-4 fade-in-up">
                <div className="col-lg-7 text-lg-start text-center">
                    <h1 className="mt-5 fade-in-up">
                        I'm <span className="name">Ritika Keshari</span><br />
                        a React | Angular Developer
                    </h1>
                    <p className="fs-5 fade-in-up">
                        Welcome to my professional portfolio! As a passionate and adaptable web developer, I excel in creating sophisticated web applications using both React and Angular.
                        My portfolio highlights my dedication to crafting high-quality, responsive, and user-friendly interfaces.
                        I invite you to explore a variety of projects that underscore my capabilities in frontend development, innovative problem-solving, and creative design.
                    </p>
                    <div className="action_btns btn-group mt-4 d-flex fade-in-up">
                        <button className="btn btn-light hire_me" data-bs-toggle="modal" data-bs-target="#modalform">
                            Contact Me <i className="bi bi-send-check"></i>
                        </button>

                        
                    </div>
                </div>
                <div className="col-lg-5 text-center fade-in-up">
                    <img src="pic.jpg" alt="profile" className="rounded-4 profile-pic" />
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="modalform">
                <div className="modal-dialog modal-dialog-centered p-3 bg-light rounded">
                    <div className="modal-content  bg-dark">
                        <div className="modal-header">
                            <h3 className="modal-title mt-2 text-light fw-bold">Contact Me</h3>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullName"
                                        name="fullName"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="mobileNumber"
                                        name="mobileNumber"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label">Email Subject</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subject"
                                        name="subject"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows="4"
                                        name="message"
                                    ></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" value="Send Message" className="btn btn-dark">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}