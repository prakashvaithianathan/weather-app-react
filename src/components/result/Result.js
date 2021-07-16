import React from 'react'
import Style from './Result.module.css'

const Result = ({value}) => {
     
    if(value){
        const icon = `http://openweathermap.org/img/wn/${value.data.weather[0].icon}@2x.png`;

        return (
            <div className={Style.container}>
                 <h4>Name:  <span> {value.data.name}</span></h4>
                <h4>Temperature: <span>{(value.data.main.temp - 273.15).toFixed(2)}°C</span> </h4> 
               
                <h4>Condition: <span>{value.data.weather[0].main}</span> </h4>
                 <h4>Description: <span>{value.data.weather[0].description}</span> </h4>
                 
                 <img src={icon} alt="icon" />
            </div>
        )

    }
    return (
       <>
       </>
    )
   
}

export default Result
