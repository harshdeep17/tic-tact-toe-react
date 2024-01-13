import { useState } from "react";

const GameBoard = ({ onSelectSquare, board }) => {
    
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
            {board.map((row, rowIndex) => {
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