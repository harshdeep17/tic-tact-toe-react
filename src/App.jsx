import { useState } from "react";
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";

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
  const activePlayer = getActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex, colIndex) => {

    // setActivePlayer((curActivePlayer) => { return curActivePlayer === 'X' ? 'O' : 'X' });
    setGameTurns((prevTurns) => {
      let currPlayer = getActivePlayer(prevTurns);
      
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currPlayer }, ...prevTurns]
      return updatedTurns;
    })
  }

  return (
    <main >
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
