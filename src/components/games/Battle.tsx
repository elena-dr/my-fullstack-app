import { useState, useEffect } from 'react'
import { fixUrl } from '../../utils'
import GamesData from './GamesData'

const Battle = () => {
    const [hamster1, setHamster1] = useState(null)
    const [hamster2, setHamster2] = useState(null)

    async function randomHamsterData() {
        const response1: Response = await fetch(fixUrl('/hamsters/random'))
        const resultRandom1 = await response1.json()

        const response2: Response = await fetch(fixUrl('/hamsters/random'))
        const resultRandom2 = await response2.json()

        console.log(resultRandom1)
        console.log(resultRandom2)
        
        setHamster1(resultRandom1)
        setHamster2(resultRandom2)


    }
    useEffect(() => {
        randomHamsterData()
    }, [])
    
    let showBattle = false;
    if (hamster1 != null && hamster2 != null) {
        showBattle = true
    }


    return (
        <div>
            {showBattle ? (
                <div>
                    <GamesData
                        hamster1={hamster1}
                        hamster2={hamster2}
                        randomHamsterData={randomHamsterData}
                    
                    />
                </div>
            ) : (<p>Loading...</p>)
            }
        </div>
    )
}

export default Battle