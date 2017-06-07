import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const options = this.props.squares.map((square, index) => {
      return <td><button key={index} value={index} onClick={this.handleClick}>{square}</button></td>
    });

    var rows = [];

    for(var i = 0; i < 3; i++) {

      var squares = [];
      for(var k=0; k<3; k++) {
        squares.push(options.shift());
      }

      rows.push(<tr> {squares} </tr>)

    }

    return (
        <table>{rows}</table>
    )
  }

  handleClick(event) {
    const index = event.target.value
    console.log(index)
    this.setState({selectedIndex: index});

    const square = this.props.squares[index];
    this.props.onSelectSquare(index);
  }
}


export default Square;