import PropTypes from "prop-types"


function Question({image, title, choices, onClick}){
    const handelOnChoice = (e) => {
        onClick()
        console.log(e.target.value)
    }
    return (
        <div>
            <div>
                <img src={image} alt={title} title={title} />
            </div>
            <h1>{title}</h1>
            <form>
                {choices.map((choice, index) => <button key={index} value={index} onClick={handelOnChoice}>{choice}</button>)}
            </form>
        </div>
    )
}

Question.propTypes ={
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    choices: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Question