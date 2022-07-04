import React, { useState, useEffect } from 'react'
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
    const [errorMsg, setErrorMsg] = useState<string>('')
        
    const moreInfo = (hId: string) => {
        if (hId === selectedHamster) return ''
        return 'hide'
    }
    
    const clearValue = () => {
        setName('')
        setAge('')
        setFavFood('')
        setLoves('')
        setImage('')
    }
  
    const addHamster = async (e: any) => {
        e.preventDefault()
        
        if (!name || name.length <=2) {
            setErrorMsg('Du måste skriv namn som fler än 2 bokstav!')
            return
        }
        if (!age) {
            setErrorMsg('Du måste skriv ålder!')
            return
        }
        if (!favFood) {
            setErrorMsg('Hamster måste ha en favoritmat!')
            return
        }
        if (!loves) {
            setErrorMsg('Skriv vad hamster gillar!')
            return
        }
        if (image.length < 2) {
            setErrorMsg('Du glömde lägga till bildlänk')
            return
        }

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
        
        clearValue()

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
    }, [])

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
                                <input placeholder='Namn' value={name} onChange={(e)=> setName(e.target.value)}></input>
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
                                <input placeholder="Lägg till URL" value={image} onChange={(e) => setImage(e.target.value)}></input>
                            </li>
                            
                            <button className="button"
                                type="submit"
                                onClick={ addHamster }>Lägg till</button>
                            
                        </ul>                                                                
                        <p className="error-msg">{ errorMsg }</p>
                    </form>
                </>

                <>
                    <div className="hamsters-gallery">
                        {hamsters?.map(hamster => 
                        <section className="section-h" key={hamster.id}>
                            <img src={imageUrl(hamster.imgName)} alt={hamster.name}></img>
                                <p className="name">{hamster.name}</p>
                                
                                <button  className="button" onClick={() => setSelectedHamster(hamster.id)} >Mer info</button>
                                
                                <div className={moreInfo(hamster.id)}>
                                    
                                    <p>Vinster: {hamster.wins}</p>
                                    <p>Förluster: {hamster.defeats}</p>
                                    <p>Favoritmat: {hamster.favFood}</p>
                                    <p>Älskar att: {hamster.loves}</p>
                                </div>
                                <button className="button" onClick={() => deleteHamster(hamster.id)}>Ta bort</button>
                        </section>)}
                    </div>
                    
                </>

               
			</main>
        </div>
        )
}
    

    
// }

export default Gallery



function isCorrectAge(age: number): boolean {
    if (age < 0) {
        console.log('Age must be a number')
        return false
    }

    if (isNaN(age)) return false
    let ageStr = String(age)

    if (ageStr.includes(',') || ageStr.includes('.') || ageStr.includes(';') || ageStr.includes('_')) return false
    return true
    // throw new Error('Function not implemented.')
}

