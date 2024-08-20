import "./flip-card.css"
import FlipSide from "./flip-side/flip-side"
import FlipButton from "../flip-button/flip-button"

const FlipCard = () => {
    return (<>
        <div className="flip-card h-100 w-100">
            <div className="flip-card-inner h-100 w-100 bg-dark text-white">
                <FlipSide side='front'>
                    <div
                        className="col-12 col-md-8 d-flex flex-column align-items-start justify-content-center pe-md-5 h-100 text-start"
                    >
                        <h1 className="text-light">WELCOME</h1>
                        <span className="text-light">
                            My name is Ivan Richardo, I'm a front-end developer based
                            in Jakarta, Indonesia. I have developed many types of
                            front-ends from well know DJ applications to Ecommerce
                            booking platforms.
                        </span>
                        <br />
                        <span className="text-light">
                            I'm passionate about cutting-edge, pixel-perfect,
                            beautiful interfaces and intuitively implemented UX.
                        </span>
                    </div>

                    <div
                        className="col-12 col-md-4 d-flex flex-column align-items-start justify-content-center pe-md-5 h-100 text-start"
                    >
                        <h3 className="text-light">Projects</h3>
                        <ul>
                            <li>
                                <FlipButton text='My BCA Web Application' id='myBCA' />
                            </li>
                            <li>
                                <FlipButton text='Sheepo E-Commerve' id='sheepo' />
                            </li>
                        </ul>
                    </div>
                </FlipSide>

                <FlipSide side='back'>
                    <h1>im back</h1>
                </FlipSide>
            </div>
        </div>
    </>)
}

export default FlipCard