import { useContext } from 'react';
import { FlipContext } from '../../context/context';

const FlipButton = ({text,id}) => { 
    const { flip, setFlip } = useContext(FlipContext);  
    return (
        <small 
            className="flip-button" 
            id={id}
            onClick={()=>{
                const flipCardInner = document.querySelector(".flip-card-inner")
                const flipCardFront = document.querySelector(".flip-card-front")
                const flipCardBack = document.querySelector(".flip-card-back")
                if(!flip.flipped){
                    flipCardInner.style.transform = "rotateY(180deg)"
                    flipCardFront.style.zIndex = 1
                    flipCardBack.style.zIndex = 0
                    console.log(id)
                }
                else{
                    flipCardInner.style.transform = "rotateY(0deg)"
                    flipCardFront.style.zIndex = 0
                    flipCardBack.style.zIndex = 1
                    console.log('home')
                }
                setFlip((prev)=>{return {...prev,flipped:!prev.flipped}})
                console.log(flip)
            }}
            >
        {text}</small>
    )
}

export default FlipButton