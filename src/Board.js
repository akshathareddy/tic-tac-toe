import React from 'react';
import Square from './Square';

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
    	this.state.xIsNext?squares[i]='X':squares[i]='O';
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
				{this.renderSquare(0)}
				{this.renderSquare(1)}
				{this.renderSquare(2)}
				{this.renderSquare(3)}
			</div>
			);
	}
}

export default Board;