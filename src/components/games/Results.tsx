

const Result = (props: any) => {
    const { win, lose } = props
    
    return (

        <div className="battle-result">
            <h2>Vinnare är: {win.name}</h2>
            <ul>
                <li>Slagsmål: {win.games}</li>
                <li>Vinster: {win.wins}</li>
                <li>Förluster: {win.defeats}</li>

            </ul>

            <p>Förlorare är: {lose.name}</p>
            <ul>
                <li>Slagsmål: {lose.games}</li>
                <li>Vinster: {lose.wins}</li>
                <li>Förluster: {lose.defeats}</li>
            </ul>
    </div>
        )
}

    




export default Result