
const Log = ({turns}) =>{
    return (<ol>
        {turns.map((turn)=>{
            return (<li key={`${turn.square.row} ${turn.square.col}`}>{turn.player} {turn.square.row}
            {turn.square.col}</li>)
        })}
    </ol>)
}
export default Log;