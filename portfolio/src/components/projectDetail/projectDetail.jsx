const ProjectDetail = ({title})=>{
    return (<>
        <div
            className="col-12 col-md-8 d-flex flex-column align-items-start justify-content-center pe-md-5 h-100"
        >
            <div id="carouselExample" className="carousel slide mb-3">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://www.wordstream.com/wp-content/uploads/2022/07/ecommerce-website-examples-gopuff.jpg"
                            className="d-block w-100"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://www.wordstream.com/wp-content/uploads/2022/07/ecommerce-website-examples-gopuff.jpg"
                            className="d-block w-100"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://www.wordstream.com/wp-content/uploads/2022/07/ecommerce-website-examples-gopuff.jpg"
                            className="d-block w-100"
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="row justify-content-between">
                <div className="col">
                    <img
                        src="https://www.wordstream.com/wp-content/uploads/2022/07/ecommerce-website-examples-gopuff.jpg"
                        className="w-100"
                    />
                </div>
                <div className="col">
                    <img
                        src="https://www.wordstream.com/wp-content/uploads/2022/07/ecommerce-website-examples-gopuff.jpg"
                        className="w-100"
                    />
                </div>
                <div className="col">
                    <img
                        src="https://www.wordstream.com/wp-content/uploads/2022/07/ecommerce-website-examples-gopuff.jpg"
                        className="w-100"
                    />
                </div>
            </div>
        </div>

        <div
            className="col-12 col-md-4 d-flex flex-column align-items-start justify-content-center pe-md-5 h-100 text-start"
        >
            <div className="project-desc" id="myBCA">
                <h3 className="text-light">{title}</h3>
                <small>
                    MyBCA is a comprehensive web-based banking application
                    that I contributed to for two years as a full-stack
                    developer at Bank Central Asia (BCA), one of Indonesia's
                    largest private banks with over 29 million customers and
                    a transaction volume exceeding [insert impressive
                    figure] annually.<br />
                    My role involved developing, testing, and deploying new
                    web pages, features, and RESTful APIs to enhance the
                    application based on specified requirements.
                </small>
            </div>
        </div>
        </>
    )
}

export default ProjectDetail