import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import Home from "./Home"
import "./App.css"

library.add(fas);

class App extends React.Component {
  state = {
    start: false
  }
  handleStart = () => {
    this.setState({ start : true })
  }
  render(){
    const { start } = this.state;
    return (
      <div className ="container">
        <div className="title">YOUR TODAY'S BOXOFFICE</div>
        {start === false ?
        <div className="startScreen">
          <div className="description">
            <span>현재 심리상태로 알아보는</span>
            <span> 지금 나에게 딱 맞는 영화는?</span>
          </div>
          <div className="description_2">
            <span>"잠시 영화 속 주인공이 되어</span>
            <span> 오늘의 영화를 찾아보세요!"</span>
          </div>
          <div className="startButton">
            <div onClick={this.handleStart}>시작하기 <FontAwesomeIcon icon={["fas", "play"]}/></div>
          </div>
        </div>
        : (<Home />)}
        
      </div>
    )}
}


export default App;
