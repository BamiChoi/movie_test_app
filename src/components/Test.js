import PropTypes from "prop-types"


function Test({type, movie, image, title, choices, onClick}){
    if(type < 5){
        const handelOnChoice = (e) => {
            onClick(e.target.value)
        }
        return (
            <div>
                <div>
                    <img src={image} alt={title} title={title} />
                </div>
                <h1>{title}</h1>
                <div>
                    {choices.map((choice, index) => <button key={index} value={index} onClick={handelOnChoice}>{choice}</button>)}
                </div>
            </div>
        )
    }
    else{
        return (
            <div>
                <h1>테스트 종료</h1>
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