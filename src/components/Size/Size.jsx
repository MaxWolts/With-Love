import React, { useState } from "react";

export const Size = ({ send }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const handleSelectChange = (event) => {
    setSelectedSize(event.target.value);
  }
  const goToOrderType = () => {
    send("CONTINUE", { size: selectedSize })
  }
  const goToBack = () => {
    send("BACK", { drinkType: "" })
  }
  return(
    <div className="Size">
      <h2>Size</h2>
      <select name="" id="" value={selectedSize} onChange={handleSelectChange}>
        <option value="" disabled >Options...</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      
      <div className="buttons">
        <button className="Cancel__button" onClick={ goToBack }>Cancel</button>
        <button className="Next__button" disabled={ selectedSize === ''} onClick={ goToOrderType }>Next</button>
      </div>
    </div>
  )
}