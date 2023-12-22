import desktopLine from '../assets/pattern-divider-desktop.svg'
import mobileLine from '../assets/pattern-divider-mobile.svg'
import dice from '../assets/icon-dice.svg'
import axios from 'axios'
import { useState,useEffect } from 'react'
export const Card = () => {
    const [quote,setQuote]=useState("")
    const getAdvice =async()=>{
        const response= await axios.get("https://api.adviceslip.com/advice")
        const advice=response.data.slip;
        setQuote(advice)
    }
    useEffect(()=>{
        getAdvice()
    },[])
  return (
    <div className="card">
        <p>Advice #{quote.id}</p>
        <h2>{`"${quote.advice} "`}</h2>
        <img src={desktopLine} alt="divider" className='dektopDivider' />
        <img src={mobileLine} alt="divider" className='mobileDivider' />
        <div className="dice" onClick={getAdvice}>
            <img src={dice} alt="dice" />
        </div>
    </div>
  )
}
