import { database } from 'firebase-admin';
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Hamsters } from '../../models/hamsters'
import { fixUrl } from '../../utils'
import './Gallery.css'


interface HamsterInfo {
    name: string;
    sprites: {
        front_default: string;
    }
}

const Gallery = () => {
    const [hamsters, setHamsters] = useState<null | Hamsters[]>(null)
    const [hamsterInfo, setHamsterInfo] = useState<null | HamsterInfo>(null)
    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<string>('')
    const [favFood, setFavFood] = useState<string>('')
    const [loves, setLoves] = useState<string>('')
    const [newHamster, setNewHamster] = useState()

    

// const newHamster = useSelector((state: RootState) => state.contest.value)

    const addHamster = async (e: any) => {
        e.preventDefault()
        let newHamster = { imgName: fixUrl(`/hamster-1.jpg`), name: name, age: age, favFood: favFood, loves: loves }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newHamster })
        }
        const response: Response = await fetch(fixUrl(`/hamsters/`), requestOptions)
        const result = await response.json()
        setNewHamster(result)
        
        
        console.log('added: ', result)
        // fetch POST 
    }

    const deleteHamster = async (id: string) => {
        console.log('delete hamster with id:', id)
        fetch(fixUrl(`/hamsters/${id}`), {
            method: 'DELETE',
          })
    }


    
    useEffect(() => {
        getHamsters()
    }, [])

    async function getHamsters() {
        const response = await fetch(fixUrl('/hamsters'))
        const hamsters = await response.json()
        console.log('Fetched', hamsters)
        setHamsters(hamsters)
        
        }
 
    return (
        <div>
            <h3>Galleri</h3>

            <main> 
                <>
                    
                    <form>
                        <ul>
                            <li>
                                <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>
                               </li>
                            <li>
                                <input placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)}></input>
                            </li>
                            <li>
                                <input placeholder='Favourite food' value={favFood} onChange={(e) => setFavFood(e.target.value)}></input>
                            </li>
                            <li>
                                <input placeholder='He likes...' value={loves} onChange={(e) => setLoves(e.target.value)}></input>
                            </li>
                            <li>
                                <button type="submit" onClick={addHamster}>Add new hamster</button>
                            </li>
                        </ul>                                                                
                        
                        
                    </form>
                </>

                <>
                    <div className="hamsters-gallery">
                        {hamsters?.map(hamster => 
                        <section className="section-h" key={hamster.id}>
                            <img src={fixUrl(`/img/${hamster.imgName}`)} alt={hamster.name}></img>
                            <p>{hamster.name}</p>
                            <button onClick={()=> deleteHamster(hamster.id)}>Delete</button>
                        </section>)}
                    </div>
                    
                </>

               
			</main>
        </div>
        )
}
    

    
// }

export default Gallery



