import React,{useState} from 'react'
import Style from './Card.module.css'

const Card = ({data}) => {
    let [text,setText]= useState('')

   

    const check =(event)=>{
        setText(event.target.value)
    }

    const foo = ()=>{
        setText('')
    }

    return (
        <div className={Style.container}>
            <h1>Weather App</h1>
            <input type="text" placeholder="Enter your city" onChange={check} onClick={foo} value={text} />
            <button onClick={()=>data(text)} >Check</button>
        </div>
    )
}

export default Card
