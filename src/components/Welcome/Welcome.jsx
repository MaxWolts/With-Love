import React from 'react'
import './style.css'

export const Welcome = ({ send }) => {
  const goToChoose = ( drink ) => {
    send("CONTINUE", { drink: drink });
  };
  return (
    <div>
        <p>Welcome to automatic ordering system of WITH LOVE.</p>
        {/* <p>Here you can make your order</p> */}
        <button className='Next__button' onClick={()=> {
          goToChoose("Coffee")
        }}><p>Start</p></button>
    </div>
  )
}