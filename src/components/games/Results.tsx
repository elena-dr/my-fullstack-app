

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

            {/* <td>
                
                <tr><th>Vinnare är: {win.name}</th></tr>
                <tr>
                    <td>Slagsmål</td>
                    <td>{win.games}</td>
                    </tr><tr>
                    <td>Vinster</td>
                        <td>{win.wins}</td>
                    </tr>
                    <tr></tr>
                    <td>Förluster</td>
                <td>{win.defeats}</td>
                <tr><td></td></tr>
                <tr><td></td></tr>
                <tr><th>Förlorare är: {lose.name}</th></tr>
                <tr>
                    <td>Slagsmål</td>
                    <td>{lose.games}</td>
                </tr>
                <tr>
                    <td>Vinster</td>
                    <td>{lose.wins}</td>
                    </tr><tr>
                    <td>Förluster</td>
                    <td>{ lose.defeats }</td>
                    </tr>
                
            </td> */}
    </div>
        )
}

    




export default Result