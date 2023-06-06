import React,{useState} from "react";

export const Choose = ({ send, drink, context }) => {
  const [drinkType, setDrinkType] = useState("");
  const handleSelectChange = (event) => {
    setDrinkType(event.target.value);
  }
  const goToSize = () => {
    send("NEXT", { drinkType: drinkType })
  }
  const goToBack = () => {
    send("BACK", { drink: "" })
  }
  return (
    <div className="Choose">
      <h2 className="Choose__title">Choose your {drink}</h2>
      {drink === "Coffee"? <select name="" id="" value={drinkType} onChange={handleSelectChange}>
        <option value="" disabled >Options...</option>
        <option value="Expresso">Expresso</option>
        <option value="Americano">Americano</option>
        <option value="Cappuccino">Cappuccino</option>
        <option value="Black Lemon">Black Lemon</option>
        <option value="Black Magic">Black Magic</option>
        <option value="Coffee Latte">Coffee Latte</option>
        <option value="Coffee Gingerbread">Coffee Gingerbread</option>
        <option value="Ginger Latte">Ginger Latte</option>
        <option value="Jahe Tubruk">Jahe Tubruk</option>
        <option value="Sugar & Spice">Sugar & Spice</option>
      </select> :
      <select name="" id="" value={drinkType} onChange={handleSelectChange}>
        <option value="" disabled >Options...</option>
        <option value="Black Tea">Black Tea</option>
        <option value="Green Tea">Green Tea</option>
        <option value="White Tea">White Tea</option>
        <option value="Masala Chai">Masala Chai</option>
        <option value="Russian Tea">Russian Tea</option>
        <option value="Shai Adeni">Shai Adeni</option>
        <option value="Teh Tarik">Teh Tarik</option>
      </select>
      }
      <div className="buttons">
        <button className="Cancel__button" onClick={ goToBack }>Cancel</button>
        <button className="Next__button" disabled={ drinkType === ''} onClick={ goToSize }>
          <p>Next</p>
        </button>
      </div>
      
    </div>
  )
}