import PropTypes from "prop-types"
import "./Test.css"

function Test({type, movie, image, title, choices, onClick}){
    if(type < 5){
        const handleOnChoice = (e) => {
            console.log(e.target.value)
            onClick(e.target.value)   
        }
        return (
                <div className="question_container">
                    <div className="movieScene">
                        <img src={image} alt={title} title={title} />
                    </div>
                    <div className="question">
                        <span>scene#{type + 1}. {title}</span>
                    </div>             
                    <div className="choices">
                     {choices.map((choice, index) => <button className="choice" key={index} value={index} onClick={handleOnChoice}>{choice}</button>)}
                    </div>
                </div>
                
        )
    }
    else{
        return (
            <div>
                <h1>당신의 영화는,</h1>
                <h2>{movie.title}</h2>
            </div>
            
        )
    }
}

Test.propTypes ={
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    choices: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Test