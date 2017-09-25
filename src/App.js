import React, { Component } from 'react';
import './App.css';

class App extends Component {

constructor(props){
  super(props);

  this.state={
    gameresults:[],
    currentgameresult:""
  };

  this.handleClick = this.handleClick.bind(this);
}

handleClick(event) {
  const userchoiceSelected = event.target.id;
  var options = ['ROCK','PAPER','SCISSORS'];
  var computerchoice = options[Math.floor(Math.random()*options.length)];

  console.log('Computer picks ' + computerchoice)
  console.log('User picks ' + userchoiceSelected)

  const gameresult = "You chose " + userchoiceSelected + "! Computer chose " + computerchoice + "!";
  const nextgameresults = this.state.gameresults.concat(this.state.currentgameresult);
  
  this.setState({
    currentgameresult: gameresult,
    gameresults: nextgameresults

  });

}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Rock Paper Scissors</h1>
        </div>

        <p className = "Subheadings"> Choose your weapon!</p>

        <div className = "Buttonspot">
          <button onClick={this.handleClick} className = "RPSSelection" id="ROCK">ROCK!</button>
          <button onClick={this.handleClick} className = "RPSSelection" id="PAPER">PAPER!</button>
          <button onClick={this.handleClick} className = "RPSSelection" id="SCISSORS">SCISSORS!</button>
        </div>
            <p className="Currentresults"> {this.state.currentgameresult} </p>
            <p className = "Subheadings"> Past Results </p>
            {this.state.gameresults.map((todo,index) => <p key={index}>{todo}</p>)}
      </div>
    );
  }
}

export default App;
