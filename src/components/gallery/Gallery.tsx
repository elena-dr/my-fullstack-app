
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

    // const [nameChanged, setNameChanged] = useState<boolean>(false)
    // const [ageChanged, setAgeChanged] = useState<boolean>(false)
    // const [favFoodChanged, setFavFodChanged] = useState<boolean>(false)
    // const [lovesChanged, setLovesChanged] = useState<boolean>(false)
    // const [imageChanged, setImageChanged] = useState<boolean>(false)

    const [errorMsg, setErrorMsg] = useState<string>('')
    

   
   
    // const handleNewNameChanged = (e: string | any) => {
    //     e.preventDefault()
    //     setName(e.target.value)
    //     setNameChanged(false)
    //     if (e.target.value.length >=2) {
    //         setNameChanged(true)
    //         setErrorMsg('')
    //         // console.log('Nämn fler än 2 bokstäver!')
    //     }
    //     else if (e.target.value.length <= 3 ) {
    //         setNameChanged(false)
    //         setErrorMsg('Du måste skriv namn som fler än 2 bokstav!')
    //         // console.log('Nämn måste innehålla fler än 2 bokstav!')
    //     }
    // }

    // const handleNewAgeChanged = (e: number | any) => {
    //     const ageIsCorrect: number | any = isCorrectAge(age)
    //     setAgeChanged(ageIsCorrect)
    //     if (e.target.valueAsNumber) {
    //         setAge(e.target.valueAsNumber)
    //     }
    //     if (ageIsCorrect) {
    //        console.log('Age is number')
    //    setErrorMsg('')
    //     }else {
    //     setErrorMsg('Ålder måste vara en siffra')
    // } 
    // }
    
    // const handleNewFavFoodChanged = (e: string | any) => {
    //     setFavFood(e.target.value)
    //     setFavFodChanged(false)
    //     if (e.target.value.length >= 3) {
    //         setFavFodChanged(true)
    //         setErrorMsg('')
    //     } else if (e.target.value.length <= 3) {
    //         setFavFodChanged(false)
    //         setErrorMsg('Favoritmaten måste innehålla än 2 bokstav')
    //     }
    // }   
    

    // const handleNewLovesChanged = (e: string | any) => {
    //     setLoves(e.target.value)
    //     setLovesChanged(false)
    //     if (e.target.value.length >= 3) {
    //         setLovesChanged(true)
    //         setErrorMsg('')
    //     } else if (e.target.value.length <= 3) {
    //         setLovesChanged(false)
    //         setErrorMsg('Favorit aktiviteter måste innehålla än 2 bokstav')
    //     }
    // }

    // const handleNewImageChanged = (e: string | any) => {
    //     setImage(e.target.value)
    //     setImageChanged(false)
    //     if (e.target.value.length >= 3) {
    //         setImageChanged(true)
    //         setErrorMsg('')
    //     } else if (e.target.value.length <= 3) {
    //         setImageChanged(false)
    //         setErrorMsg('Bildlänken måste innehålla än 2 bokstav')
    //     }
    // }

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


        // if(nameChanged && ageChanged && favFoodChanged && lovesChanged && imageChanged === true) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newHamster)
            }
        
        const response: Response = await fetch(fixUrl(`/hamsters/`), requestOptions)
        const result = await response.json()
                      
        console.log('added: ', result)
        getHamsters()
        // } else
        //     setErrorMsg('Något saknas! Fyller du i alla formulär? Varje sträng måste ha minst 2 bokstäver. Försök igen!')
        // // console.log('something missing')
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

