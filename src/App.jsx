import { useState } from "react";
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from './winning-combinations'
import GameOver from "./components/GameOver";


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

const getActivePlayer = (gameTurns) =>{
    let currPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player == 'X') {
      currPlayer = 'O';
    }
    return currPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');
  const [players,setPlayers] = useState({
    X:'player 1',
    O:'player 2'
  });
  const initialGameBoard = getInitialGameBoard(3, 3);
    const gameBoard =initialGameBoard;

    for( const turn of gameTurns){
        const {square,player}=turn;
        const {row,col}=square;
        gameBoard[row][col]=player;
    }

  const activePlayer = getActivePlayer(gameTurns);
  
  let winner=null;
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol=gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol=gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column];
    if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol){
      winner=players[firstSquareSymbol];
    }
  }
  let hasDraw=false;
  if(gameTurns.length===9 && !winner){
      hasDraw=true;
  }
  const handleSelectSquare = (rowIndex, colIndex) => {

    // setActivePlayer((curActivePlayer) => { return curActivePlayer === 'X' ? 'O' : 'X' });
    setGameTurns((prevTurns) => {
      let currPlayer = getActivePlayer(prevTurns);
      
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currPlayer }, ...prevTurns]
      return updatedTurns;
    })
  }

  const handleRestart = () =>{
    setGameTurns([]);
  }

  const handlePlayerNameChange = (symbol,playerName) =>{
    setPlayers((prevPlayers)=>{
      return {...prevPlayers,[symbol]:playerName};
    })
  }

  return (
    <main >
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player 1" symbol="X" isActive={activePlayer === 'X'} 
          onPlayerNameChange={handlePlayerNameChange}/>
          <Player initialName="player 2" symbol="O" isActive={activePlayer === 'O'} 
          onPlayerNameChange={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
