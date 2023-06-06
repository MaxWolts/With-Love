import React from "react";

export const End = ( { send, context } ) => {
  const num = Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000);
  const goToInitial = () => {
    send("FINISH")
  }
  return(
    <div className="End">
      <h2>Thanks for your order!</h2>
      <p>Your <strong>{context.drinkType} {context.size}</strong> will be shortly.</p>
      <p> <strong>Your order number: {num}</strong> </p>
      <button className="Next__button" onClick={ goToInitial }> Finish </button>
    </div>
  )
}