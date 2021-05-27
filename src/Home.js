import React from "react"
import Test from "./components/Test"
import questions from "./components/Questions"
import movies from "./components/Movies"

class Home extends React.Component {
  state = {
    type : 0,
    question: {},
    testCode: "0",
    movie: {},
    isLoading: false
  };

  //현재 this.statetype을 바탕으로 질문가져와서 this.state.question에 저장
  pickQuestion = (type) => {
    const randomNum = Math.random() * 4
    const id = Math.floor(randomNum)
    const question_set = questions[`${type}`]
    const question = question_set[id]
    return question
  } 

  // test후 testCode의 값과 동일한 resultCode를 가진 영화 object를 Movies에서 찾아 state에 저장  
  pickMovie = (testCode) => {
    const movie = movies.find( ({ resultCode }) => resultCode === `${testCode}`)
    return movie
  }

  //컴포넌트가 첫 render를 실행하기전에 pickQuestion함수실행으로 question 오브젝트 저장
  constructor(props){
    super(props)
    const type = this.state.type
    const question = this.pickQuestion(type)
    this.state.question = question 
    }

  //Question 컴포넌트에서 click이 일어나면 실행할 이벤트. type값이 4가되면 pickQuestion은 멈추고 pickMovie 실행
  handleOnClick = (testCode) => {
    if(this.state.type !== 4){
    this.setState(prevState => 
      { return {
        type: prevState.type + 1,
        question: this.pickQuestion(
          prevState.type + 1),
        testCode : prevState.testCode + `${testCode}`
      }
  });
} else {
  this.setState(prevState =>
    {return {
      type: prevState.type + 1,
      testCode : prevState.testCode + `${testCode}`,
      movie : this.pickMovie(prevState.testCode + `${testCode}`),
      isLoading: true
    }})
}
}

componentDidUpdate(){
    if(this.state.isLoading === true){
    setTimeout(() => {
        this.setState({ isLoading :false})
    }, 6000)
}
}

  //state에 저장된 question 오브젝트를 바탕으로 props를 Question컴포넌트에 에 전달
  render(){
    console.log(this.state)
    const { type, question, movie, isLoading} = this.state;
    return (
        <div>
        {isLoading 
            ? <div>
              <h1>결과를 로딩중입니다...</h1>
              </div>
            : (<Test 
                key={question.id} 
                type={type}
                movie={movie}
                title={question.title} 
                image={question.image} 
                choices={question.choices}
                onClick={this.handleOnClick} />) 
            }
            </div>
      )}    
}


export default Home;
