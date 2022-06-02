import {useState} from 'react'

const ToggleButton = () => {
    const [toggle, setToggle] = useState<boolean>(false)

    const triggerToggle = () => {
     setToggle(!toggle)
    }
    
    return (
        <div onChange={triggerToggle}></div>
    )

}

export default ToggleButton