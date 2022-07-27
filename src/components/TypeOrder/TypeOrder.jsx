import React,  {useState } from "react";

export const TypeOrder = ({ send }) => {
  const [typeOrder, setTypeOrder] = useState("");
  const handleSelectChange = (event) => {
    setTypeOrder(event.target.value);
  }
  const goToEnd = () => {
    send("DONE", { orderType: typeOrder })
  }
  const goToBack = () => {
    send("BACK", { size: "" })
  }
  return(
    <div className="TypeOrder">
      <h2>Is that for here or to go?</h2>
      <select name="" id="" value={typeOrder} onChange={handleSelectChange}>
        <option value="" disabled >Options...</option>
        <option value="For here">For here</option>
        <option value="To go">To go</option>
      </select>

      <div className="buttons">
        <button className="Cancel__button" onClick={ goToBack }>Cancel</button>
        <button className="Next__button" disabled={ typeOrder === ''} onClick={ goToEnd }>End order</button>
      </div>
    </div>
  )
}