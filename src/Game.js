import React from "react";
import Board from "./components/Board";
import './App.css'

class Game extends React.Component {

  // constructorda adım sayısını, sıradaki hamle değerini ve geçmişin default değerini tuttuk

  constructor(props) {
    super(props);
    this.state = {
      stepCounter: 0,
      isNext: true,
      history: [{
        squares: Array(9).fill(null)
      }],
    };
  }

  handleClick(e) {

    // tutulacak history dizisini default olarak state'den aldık ve yeni dizi oluşturduk (atılan adım sayısına göre)
    const history = this.state.history.slice(0, this.state.stepCounter + 1);

    // son atılmış adım
    const current = history[this.state.stepCounter];

    // karelerin son durumu
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[e]) {
      return;
    }

    squares[e] = this.state.isNext ? 'X' : 'O';

    // setState yaparak yeni adımı history'e ekledik,
    // adım sayısını 1 arttırdık ve hamle sırasını değiştirdik
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepCounter: history.length,
      isNext: !this.state.isNext,
    });

  }

  // istediğimiz adıma gitme fonksiyonu
  jumpTo(step) {
    this.setState({
      stepCounter: step,
      isNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepCounter];
    const winner = calculateWinner(current.squares);

    // map fonksiyonu ile butonları oluşturduk
    const moves = history.map((object, move) => {

      const buttonText = move > 0 ?
        'Go to move #' + move :
        'Go to game start';

      return (
        <li key={move}>
          <button 
          className="History"
          onClick={() => this.jumpTo(move)}
          >{buttonText}</button>
        </li>
      );

    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.isNext ? "X" : "O");
    }

    return (
      <div className="Game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// kazananı hesaplayan fonksiyon
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
