import PropTypes from "prop-types"


function Question({image, title, choices}){
    return (
        <div>
            <div>
                <img src={image}></img>
            </div>
            <h1>{title}</h1>
            {choices.map((choice, index) => <button key={index} >{choice}</button>)}
        </div>
    )
}

Question.propTypes ={
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    choices: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Question