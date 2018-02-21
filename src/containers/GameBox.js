import React, {Component} from 'react';
import Board from '../components/Board.js'
import Instructions from '../components/Instructions.js'

class GameBox extends Component {

  constructor(){
    super();

    this.state ={
      boardArray: ["","","","","","","","",""],
      player1: {name: "Kris", symbol: 'X'},
      player2: {name: "Ben", symbol: 'O'},
      currentPlayer: 'X',
      gameOver: false,
      draw: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.checkForWin = this.checkForWin.bind(this)
  }

  getPlayerNameFromSymbol(){
    if(this.state.currentPlayer == this.state.player1.symbol){return this.state.player1.name}
    else{return this.state.player2.name}
  }

  checkForWin(array){
    if (array[0] === array[1] && array[1] === array[2] && array[0]!="") return true;
    else if (array[3] === array[4] && array[4] === array[5] && array[3]!="") return true;
    else if (array[6] === array[7] && array[7] === array[8] && array[6]!="") return true;
    else if (array[0] === array[4] && array[4] === array[8] && array[0]!="") return true;
    else if (array[2] === array[4] && array[4] === array[6] && array[2]!="") return true;
    else if (array[0] === array[3] && array[3] === array[6] && array[0]!="") return true;
    else if (array[1] === array[4] && array[4] === array[7] && array[1]!="") return true;
    else if (array[2] === array[5] && array[5] === array[8] && array[2]!="") return true;
    return false;
  }

  checkForDraw(array){
    if(!this.checkForWin(array) && !this.state.boardArray.includes("")){return true}
  }

  winnerStatement(){
    const playerName = this.getPlayerNameFromSymbol()
    if(this.state.gameOver){
      return <p className="statement">Winner is {playerName}</p>
    }
    if(this.state.draw){
      return <p className="statement">Draw</p>
    }
  }

  handleClick(index){

    // checkForWin(array){
    //   if (array[0] === array[1] && array[1] === array[2] ) return true;
    // }

    console.log("handleClick called");
    const newArray = this.state.boardArray;
    newArray[index] = this.state.currentPlayer;
    this.setState({boardArray: newArray});

    console.log("currentPlayer", this.state.currentPlayer);

    if(this.checkForWin(this.state.boardArray)){
      this.setState({gameOver: true});
    }
    else {
      this.state.currentPlayer == 'X' ? this.setState({currentPlayer: 'O'}) : this.setState({currentPlayer: 'X'});

    }

    if(this.checkForDraw(this.state.boardArray)){
      this.setState({draw: true})
    }

    console.log(this.state.gameOver);

    // this.state.currentPlayer == 'X' ? this.setState({currentPlayer: 'O'}) : this.setState({currentPlayer: 'X'});


  }




  render(){
    return <div className="game">
      <Instructions player={this.getPlayerNameFromSymbol()}/>
      <Board className="board" boardArray={this.state.boardArray} handleClick={this.handleClick}/>
      {this.winnerStatement()}
  </div>
  }
}

export default GameBox;
