
import { useEffect, useState } from 'react'

import { fixUrl, imageUrl } from '../../utils';
import './GamesData.css'
import Result from './Results'



interface Hamster {
    id: string;
    name: string,
    age: number,
    favFood: string,
    loves: string,
    imgName: string,
    wins: number,
    defeats: number,
    games: number
}


const GamesData = (props: any) => {
    const {hamster1, hamster2, resetHamsters} = props

    const [winHamster, setWinHamster] = useState<Hamster | null>()
    const [loseHamster, setLoseHamster] = useState<Hamster | null>()
    
    async function updateHamster(id: any, hamsterToChange: Object) {
        
        const response = await fetch(fixUrl(`/hamsters/${id}`),
            {
                method: 'PUT',
                headers: { 'Content-type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(hamsterToChange)
            }
        ).then(response => response.text()).then(text => console.log(text))
    }      

  
      
    function battleVote(win: any, lose: any) {
        const winsUpdate = {
            ...win,
            wins: win.wins + 1,
            games: win.games +1
        }
        const loseUpdate = {
            ...lose,
            defeats: lose.defeats + 1,
            games: lose.games +1
        }
        Promise.all([
            updateHamster(win.id, winsUpdate),
            updateHamster(lose.id, loseUpdate)
        ]).then(async () => {
            
            const updatedWin = await fetch(fixUrl('/hamsters/'+win.id));
            const jsonWin = await updatedWin.json()
            setWinHamster(jsonWin)
            // console.log(jsonWin)
            const updatedLose = await fetch(fixUrl('/hamsters/'+lose.id));
            const jsonLose = await updatedLose.json()
            setLoseHamster(jsonLose)
                        
        })
    
        
    }

  
    
    return (
        <div> 
            <h2>Klicka på bild och rösta på sötaste hamstern!</h2>
            
            <div className="battle-vote">
                <div onClick={() => battleVote(hamster1, hamster2)}>
                    <p>{hamster1.name}</p>
                    <img className="image-battle" src={imageUrl(hamster1.imgName)} alt={hamster1.imgName} />   
            </div>
            <div onClick={() => battleVote(hamster2, hamster1)}>
                <p>{hamster2.name}</p>
                <img className="image-battle" src={imageUrl(hamster2.imgName)} alt={hamster2.imgName} />
                </div>
            </div>

            {winHamster && loseHamster ? <Result win={winHamster} lose={loseHamster} /> : ""}
            
            <div>
                {winHamster ? <button className="button" onClick={() => {resetHamsters()}}>Rösta igen</button> : null}
            </div>
        </div>
        
    )
}

export default GamesData