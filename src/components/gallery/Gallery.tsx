
import { useState, useEffect } from 'react'
import { Hamsters } from '../../models/hamsters'
import { fixUrl, imageUrl } from '../../utils'
import './Gallery.css'



const Gallery = () => {
    const [hamsters, setHamsters] = useState<null | Hamsters[]>(null)
    
    const [selectedHamster, setSelectedHamster] = useState("")
    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<string>('')
    const [favFood, setFavFood] = useState<string>('')
    const [loves, setLoves] = useState<string>('')
    const [image, setImage] = useState('')
   
    
    const moreInfo = (hId: string) => {
        if (hId === selectedHamster) return ''
        return 'hide'
    }

    // const imageOnChange = (e: any) => {
    //     const [imageUrl] = e.target.img;
    //     setImage(URL.createObjectURL(imageUrl))
    // }

    const addHamster = async (e: any) => {
        e.preventDefault()
        let newHamster = { imgName: image, name: name, age: age, favFood: favFood, loves: loves }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newHamster)
        }
        const response: Response = await fetch(fixUrl(`/hamsters/`), requestOptions)
        const result = await response.json()
                       
        console.log('added: ', result)
        getHamsters()
        
    }


    const deleteHamster = async (id: string) => {
        console.log('delete hamster with id:', id)
        fetch(fixUrl(`/hamsters/${id}`), {
            method: 'DELETE',
        }).then(res => {
            getHamsters()
        })
         
    }

   
    useEffect(() => {
        getHamsters()
    }, [setHamsters])

    async function getHamsters() {
        const response = await fetch(fixUrl('/hamsters'))
        const hamsters = await response.json()
        console.log('Fetched', hamsters)
        setHamsters(hamsters)
    }
 
    return (
        <div>
            <main> 
                <>
                    
                    <form>
                        <p>Lägg till en ny hamster</p>
                        <ul>
                            <li>
                                <input placeholder='Namn' value={name} onChange={(e) => setName(e.target.value)}></input>
                               </li>
                            <li>
                                <input placeholder='Ålder' value={age} onChange={(e) => setAge(e.target.value)}></input>
                            </li>
                            <li>
                                <input placeholder='Favoritmat' value={favFood} onChange={(e) => setFavFood(e.target.value)}></input>
                            </li>
                            <li>
                                <input placeholder='Han/hon gillar...' value={loves} onChange={(e) => setLoves(e.target.value)}></input>
                            </li>
                            <li>
                                <input placeholder="Lägg till URL" value={image} onChange={(e) =>setImage(e.target.value)}></input>
                            </li>
                            
                                <button className="button" type="submit" onClick={addHamster}>Lägg till</button>
                            
                        </ul>                                                                
                        
                    </form>
                </>

                <>
                    <div className="hamsters-gallery">
                        {hamsters?.map(hamster => 
                        <section className="section-h" key={hamster.id}>
                            <img src={imageUrl(hamster.imgName)} alt={hamster.name}></img>
                                <p className="name">{hamster.name}</p>
                                <button className="button" onClick={() => setSelectedHamster(hamster.id) }>Mer info</button>
                                <div className={moreInfo(hamster.id)}>
                                    <p>{hamster.wins}</p>
                                    <p>{hamster.defeats}</p>
                                    <p>{hamster.favFood}</p>
                                    <p>{hamster.loves}</p>
                                </div>
                            <button className="button" onClick={()=> deleteHamster(hamster.id)}>Ta bort</button>
                        </section>)}
                    </div>
                    
                </>

               
			</main>
        </div>
        )
}
    

    
// }

export default Gallery



