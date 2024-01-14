import { useState } from "react";

const Player = ({ initialName, symbol, isActive , onPlayerNameChange}) => {

    const [isEditing,setIsEditing]=useState(false);
    const [playerName,setPlayerName]=useState(initialName);

    const handleEditClick = () =>{
        setIsEditing((editing)=>{
            return !editing
        });
        if(isEditing){
            onPlayerNameChange(symbol,playerName);
        }
    }

    const handleNameChange = (event) =>{
        setPlayerName(event.target.value);
    }

    let editablePlayerName= <span className="player-name">{playerName}</span>;
    if(isEditing){
        editablePlayerName=<input type="text" onChange={handleNameChange} value={playerName} required/>;
    }

  return (
        <li className={isActive?'active':''}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing?'save':'edit'}</button>
        </li>
    )
}
export default Player;