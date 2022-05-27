import { useEffect, useState } from 'react'
import { Hamsters } from '../../models/hamsters'
import { fixUrl, imageUrl } from '../../utils'
import './Cutest.css'


const Cutest = () => {
    const [cutest, setCutest] = useState<Hamsters | null>(null)
    const [loaded, setLoaded] = useState('Loading...')
    
    useEffect(() => {
        async function getHamsters() {
            const response = await fetch(fixUrl('/hamsters'))
            const hamsters = await response.json()     
            
            if (hamsters !== null) {
                let hamsterArr = [...hamsters].sort(
                    (x,y) => x.wins - x.defeats - (y.wins - y.defeats)
                )
                let cutestHamster = hamsterArr[hamsterArr.length - 1] 
                let result = hamsterArr.filter((h) => {
                    return h.wins - h.defeats === cutestHamster.wins - cutestHamster.defeats
                })
                if (result.length > 1) {
                    let cutestRandom = result[Math.floor(Math.random() * result.length)]
                    console.log(result, cutestRandom)
                    setCutest(cutestRandom)
                } else {
                    setCutest(cutestHamster)
                }            
            }
            
            setLoaded('Loaded')
            console.log('cutest', cutest)
        }
        getHamsters()
        
    }, [setLoaded, setCutest])

    return (
        <div className="cutest-container">
            {cutest && loaded ? (<div >
                <img className="image-cutest" src={imageUrl(cutest.imgName)} alt={cutest.imgName} />
                <p className="name-cutest">{cutest.name }</p>
            </div>) : 'Inga sötaste hittade...'}
    </div>
)

}

export default Cutest