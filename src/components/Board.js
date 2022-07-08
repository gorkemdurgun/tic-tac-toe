import React from "react";
import Square from './Square'
import '../App.css'
class Board extends React.Component {

  // örnek bir kareyi fonksiyon içinde tanımladık,
  // her seferinde props tanımlamadan çoğaltmak için
  
    oneSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      return (

        // 3x3 olan tablamızı oluşturduk

        <div className="Board">
          <div className="board-row">
            {this.oneSquare(0)}
            {this.oneSquare(1)}
            {this.oneSquare(2)}
          </div>
          <div className="board-row">
            {this.oneSquare(3)}
            {this.oneSquare(4)}
            {this.oneSquare(5)}
          </div>
          <div className="board-row">
            {this.oneSquare(6)}
            {this.oneSquare(7)}
            {this.oneSquare(8)}
          </div>
        </div>

      );
    }
    
  }

  export default Board;