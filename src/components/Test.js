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
                    <img src="https://w.namu.la/s/3d05a85958eae3318f813157fa4b8d6bcd8dad23bbf043276c11a48097fa81ee20980d25731d811acf8ef2824bb5d0d6e75390536eec6771dfab45c6c855db535144b49220a24e9522f3473665b1cbae64ba9367f8bd8d742518cdd0b2f89759" />
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
                            <span>19:30</span>
                        </div>
                        <div className="theater">
                            <span>2관</span>2
                        </div>
                        <div className="seat">
                             <span>H열 15번</span>
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