import React from "react"
import Home from "./Home"

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
      <div>
        {start === false ?
        <div>
          <h1>wanna start?</h1>
          <button onClick={this.handleStart}>start</button>
        </div>
        : (<Home />)}
      </div>
    )}
}


export default App;
