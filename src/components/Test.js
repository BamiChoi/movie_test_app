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
            <div className="result_container">
                <div className="moviePoster">
                    <img src="" />
                </div>
                <div className="movie">
                    <div className ="movieTitle">
                        <span>오늘 당신의 영화는,</span>
                        <span>"{movie.title}"</span>
                        <span>(2001, 미야자키 하야오)</span>
                    </div>
                    <div className ="movieDescription">
                        <div>일상에 너무 지쳐 언젠가부터 동심을 잃어버린 당신. 토로로의 털속에 파묻혀 따뜻해져 보는건 어떨까.</div>
                    </div>  
                    <div className="ticketInfo">
                        <div className="time">
                            19:30
                        </div>
                        <div className="theater">
                            2관
                        </div>
                        <div className="seat">
                            H열 15번
                        </div>
                    </div>   
                    <div className="payment">
                        <span> 9,000 노마드코인</span>
                        <span>(현장결제)</span>
                    </div>
                </div>
                
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