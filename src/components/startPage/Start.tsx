import { useState} from 'react'
import { Hamsters } from '../../models/hamsters'
import { fixUrl } from '../../utils'
import Cutest from './Cutest'
import './Start.css'

const Start = () =>{


return (
    <div>
        <div className="start-page-container">
            <h1>Välkommen till Hamster Wars!</h1>
            
                <p className="start-page-text">Här kan du rösta på sötaste hamstrar, lägga till nya, radera gamla hamstrar. <br />Också innan strid kan du gå till Galleri och titta på dem alla.
                <br />Njut av din tid!</p>
        </div>
        <h1>Hamster som vann mest:</h1>
        <Cutest />
        
        
    </div> 
)
}
export default Start