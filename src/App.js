import React from "react"
import Question from "./components/Question"
import questions from "./components/Questions"

class App extends React.Component {
  state = {
    type : 0,
    question: {}
  };
  constructor(props){
    super(props)
    const type = this.state.type 
      if(type === 0){
        const randomNum = Math.random() * 4
        const id = Math.floor(randomNum)
        const question_set = questions[0]
        const question = question_set[id]
        this.state.question = question
      }
    }
  /*handleClick = () => {
    if (this.state.type === "A") {
      this.setState({type : "B "})
    } else if (this.state.type === "B") {
      this.setState({type : "C"})
    } else if (this.state.type === "C") {
      this.setState({type : "D"})
    } else if (this.state.type === "D") {
      this.setState({type : "E"})
    } 
  }*/
  render(){
    const { question } = this.state;
    return (
      <Question 
      key={question.id} 
      title={question.title} 
      image={question.image} 
      choices={question.choices} />
      )
  }
}



export default App;
