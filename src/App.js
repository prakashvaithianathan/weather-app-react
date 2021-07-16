import React,{useState,useEffect} from 'react'
import Card from'./components/card/Card.js'
import Axios from 'axios'
import Result from './components/result/Result.js'
import Style from './App.module.css'

// import dotEnv from 'dotenv'
// dotEnv.config({path:'./config/config.env'})



const App = () => {

 

  const [value,setValue] = useState('');


  const text = async(data)=>{

    if(data==''){
      return 
    }
    try {
      const info = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=b1ec96a976a8441e9088e75c5b1f1d68`);
      if(info.status==200){

        setValue(info)
      }else{
        setValue('Enter the correct name')
      }
      
        

    } catch (error) {
      alert(error.message);
    }
  
  }

  return (
    <div className={Style.container}>
      <Card data = {text}></Card>
      <Result value={value}></Result>
     
    </div>
  )
}


export default App
