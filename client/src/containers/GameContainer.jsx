import React from 'react';
import Square from '../components/Square';

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: ["", "", "", 
                "", "", "", 
                "", "", ""],
      player: "X"
    };
    this.setSelectedSquare = this.setSelectedSquare.bind(this)
  }

  render() {
    return (
      <div>
        <h2>Noughts and Crosses</h2>
        <p>Credit to Alex because he insisted</p>
        <Square squares={this.state.squares} onSelectSquare={this.setSelectedSquare}/>
      </div>
    )
  }

  setSelectedSquare(index) {
    const newSquares = this.state.squares.slice();
    newSquares[index] = this.state.player;
    this.setState({squares: newSquares});

    if (this.state.player === "X"){
      this.state.player = "O"
    } else if ( this.state.player === "O"){
      this.state.player = "X"
    }
    else { return };

    this.setState({player: this.state.player});
  }


}


export default GameContainer;