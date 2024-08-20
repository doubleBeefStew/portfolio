import Footer from "../../footer/footer"
import Header from "../../header/header"
import Content from "../../content/content"

const FlipSide = ({side,children})=>{
    return (
        <div className={`flip-card-${side} d-flex flex-column justify-content-around px-5 pb-5 h-100 gy-3`} id={side}>
            <Header side={side}></Header>
            <Content>
            <div className="col main-content d-flex align-items-center py-3">
                <div className="row justify-content-around gy-5">
                    {children}
                </div>
            </div>
            </Content>
            <Footer></Footer>
        </div>
    )
}

export default FlipSide