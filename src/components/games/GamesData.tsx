import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from 'react'
import { fixUrl } from '../../utils';
import './GamesData.css'
import Result from './Results'

const GamesData = (hamster1: any, hamster2: any, randomHamsterData: () => void) => {

    const [winHamster, setWinHamster] = useState('')
    const [loseHamster, setLoseHamster] = useState('')

    async function updateHamster(id: any, hamsterToChange: { wins?: any; games: any; defeats?: any }) {
        const response: Response = await fetch(fixUrl(`/hamsters/${id}`),
            {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(hamsterToChange)}
        )
        const result = await response
    }

    // async function postMatch(winId: any, loseId: any) {           
    //     const match = { winId, loseId }
    //     const responseMatch: Response = await fetch()
    // }

    

    async function battleVote(win: any, lose: any) {
        if (hamster1.id === hamster2.id) {
            randomHamsterData()
        }

        const winsUpdate = {
            wins: win.wins + 1,
            games: win.games +1
        }

        const loseUpdate = {
            defeats: lose.defeats + 1,
            games: lose.games +1
        }
        Promise.all([
            updateHamster(win.id, winsUpdate),
            updateHamster(lose.id, loseUpdate),
            // postMatch(win.id, lose.id)
        ]).then(() => {
            console.log(win)
            setWinHamster(win)
            setLoseHamster(lose)

        })

        
    }

    

    return (
        <div> 
            <h2>Vote for cutest hamster!</h2>
            <div onClick={() => battleVote(hamster1, hamster2)}>
                <p>{hamster1.name}</p>
                <img className="" src={`/assets/${hamster1.imgName}`} alt={hamster1.imgName} />   
            </div>
            <div onClick={() => battleVote(hamster2, hamster1)}>
                <p>{hamster2.name}</p>
                <img className="" src={`/assets/${hamster2.imgName}`} alt={hamster2.imgName} />
            </div>

            {winHamster && loseHamster ? <Result winner={winHamster} loser={loseHamster} /> : ""}
            
            <div>
                <button onClick={()=> {randomHamsterData()}}>Next Battle</button>
            </div>
        </div>
    )
}

export default GamesData