import FlipButton from "../flip-button/flip-button"

const Header = ({ side }) => {
    return (
        <div className="col header bg-dark d-flex justify-content-around align-items-center py-5">
            <div className="col text-start"><h1>IVR</h1></div>
            <div className="col"></div>
            <div className="col text-end">
            {
                side=='back'?
                <FlipButton text='home' id='home' />:
                <FlipButton text='contact' id='contact' />
            }
                
            </div>
        </div>
    )
}

export default Header