import { useState } from "react";

const getInitialGameBoard = (row, col) => {
    const grid = [];
    for (let i = 0; i < row; i++) {
        grid[i] = [];
        for (let j = 0; j < col; j++) {
            grid[i][j] = null;
        }
    }
    return grid;
}
const GameBoard = ({ onSelectSquare, turns }) => {
    const initialGameBoard = getInitialGameBoard(3, 3);
    const gameBoard =initialGameBoard;

    for( const turn of turns){
        const {square,player}=turn;
        const {row,col}=square;
        gameBoard[row][col]=player;
    }

    // const handleSelectSquare = (rowIndex,colIndex) =>{
    //     setGameBoard((prevGameBoard)=>{
    //         const newGameBoard=[...prevGameBoard.map(innerArray=>[...innerArray])];
    //         newGameBoard[rowIndex][colIndex]=activePlayerSymbol;
    //         return newGameBoard;
    //     })

    //     onSelectSquare(rowIndex,colIndex);
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                return (<li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => {
                            return (<li key={colIndex}>
                                <button onClick={onSelectSquare.bind(null,rowIndex,colIndex)} 
                                disabled={playerSymbol!==null}>{playerSymbol}</button>
                            </li>)
                        })}
                    </ol>
                </li>)
            })}
        </ol>
    )
} 
export default GameBoard;