import React from "react"
import Question from "./components/Question"
import questions from "./components/Questions"

class App extends React.Component {
  state = {
    type : 0,
    question: {},
  };

  //현재 this.statetype을 바탕으로 질문가져와서 this.state.question에 저장
  pickQuestion = (type) => {
    const randomNum = Math.random() * 4
    const id = Math.floor(randomNum)
    const question_set = questions[`${type}`]
    const question = question_set[id]
    return question
  } 

  //컴포넌트가 첫 render를 실행하기전에 pickQuestion함수실행으로 question 오브젝트 저장
  constructor(props){
    super(props)
    const type = this.state.type
    const question = this.pickQuestion(type)
    this.state.question = question 
    }

  //Question 컴포넌트에서 click이 일어나면 실행할 이벤트
  handleOnClick = () => {
    this.setState(prevState => 
      { return {
        type: prevState.type + 1,
        question: this.pickQuestion(
          prevState.type + 1),
      }
  });
}

  shouldComponentUpdate(nextState, nextProps){
    return (this.state.type !== nextProps.type)
  }

  //state에 저장된 question 오브젝트를 바탕으로 props를 Question컴포넌트에 에 전달
  render(){
    const { question } = this.state;
    return (
      <Question 
      key={question.id} 
      title={question.title} 
      image={question.image} 
      choices={question.choices}
      onClick={this.handleOnClick} />
      )
  }
}



export default App;
