import React from 'react';
import Square from './Square';

import './index.css'

class Board extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			xIsNext: true,
			squares: Array(4).fill(null)
		}
	}
    handleClick(i){
    	const squares = this.state.squares.slice();
    	if(this.state.squares[i])
    		return
    	if(this.state.xIsNext)
    		squares[i]= 'X'
    	else 
    		squares[i]= 'O'
    		this.setState({
    			squares: squares,
    			xIsNext: !this.state.xIsNext 
    		});
    }
	renderSquare(i){
		return(
			<Square value={this.state.squares[i]} 
			onClick={()=>{this.handleClick(i)}}
			/>
			);
	}

	render(){
		return(
			<div>
			    <p>Next Player:{this.state.xIsNext?'X':'O'}</p>
			    <div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
			);
	}
}

export default Board;