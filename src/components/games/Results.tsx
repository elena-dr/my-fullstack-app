

const Result = (win: any, lose: any) => (

    <div className="battle-result">
        <p>Winner: {win.name} </p>
        <p>Games: {win.games}, wins: {win.wins}, defeats: { win.defeats }</p>
        
        <p>Loser: {lose.name}</p>
        <p>Games: {lose.name}, wins: {lose.wins}, defeats: { lose.defeats }</p>
    </div>
)

    




export default Result