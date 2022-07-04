import React from 'react';
import Square from "./Square";

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    handleClick (e) {
        const updatedSquares = this.state.squares.slice();
        updatedSquares[e] = 'X';
        console.log(updatedSquares)
        this.setState({squares: updatedSquares});
    }

    renderSquare(e) {
        return (
            <Square
                value={this.state.squares[e]}
                onClick={()=> this.handleClick(e)}
            />
        );
    }

    render() {
        const status = 'Next Player: X'

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
                </div>
            </div>
        );
    }

}

export default Board;