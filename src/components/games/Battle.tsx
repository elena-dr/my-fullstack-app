import { useState, useEffect } from 'react'
import { fixUrl } from '../../utils'
import GamesData from './GamesData'

const Battle = () => {
    const [hamster1, setHamster1] = useState(null)
    const [hamster2, setHamster2] = useState(null)
    const [loaded, setLoaded] = useState(false)

    async function randomHamsterData() {
        setLoaded(false)
        const response1: Response = await fetch(fixUrl('/hamsters/random'), {method: 'GET'})
        const resultRandom1 = await response1.json()

        const response2: Response = await fetch(fixUrl('/hamsters/random'), {method: 'GET'})
        const resultRandom2 = await response2.json()
        
        setHamster1(resultRandom1)
        setHamster2(resultRandom2)
        setLoaded(true)

    }
    useEffect(() => {
        randomHamsterData()
    }, [])


    return (
        <div>
            {loaded ? (
                <div>
                    <GamesData
                        hamster1={hamster1}
                        hamster2={hamster2}
                        resetHamsters={randomHamsterData}
                    />
                </div>
            ) : (<p>Loading...</p>)
            }
        </div>
    )
}

export default Battle