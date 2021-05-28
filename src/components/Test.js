import PropTypes from "prop-types"
import "./Test.css"

function Test({type, movie, image, title, choices, onClick}){
    if(type < 5){
        const handelOnChoice = (e) => {
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
                     {choices.map((choice, index) => <div className="choice" key={index} value={index} onClick={handelOnChoice}>{choice}</div>)}
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