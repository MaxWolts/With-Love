import React from "react";
import "./styles.css";

export const SelectDrink = ({ send }) => {

  const goToChoose = ( drink ) => {
    send("CONTINUE", { drink: drink });
  };
  const goToBack = () => {
    send("BACK")
  }
  return (
    <div className="Select-drink">
      <div className="Select-drink__drinks">
        <div className="CoffeeButton">
          <svg
            width="59"
            height="50"
            viewBox="0 0 59 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M56.3055 6.52762C65.5185 35.6716 27.0861 60.9539 1.61695 41.6582M56.3055 6.52762C37.9545 -7.23787 -0.564232 6.80872 1.61695 41.6582M56.3055 6.52762L1.61695 41.6582"
              stroke="#161616"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <button onClick={()=> {
            goToChoose("Coffee")
          }}>Coffee</button>
        </div>
        <div className="TeaButton">
          <svg
            width="86"
            height="46"
            viewBox="0 0 86 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5225 28.9731C14.3421 32.8175 4.90076 28.4683 1.10528 24.3037M22.5225 28.9731C21.9806 11.3388 27.4515 3.72231 39.342 2.1321M22.5225 28.9731C26.5893 28.3696 30.3576 27.7184 33.9391 26.9911M22.5225 28.9731C32.5963 47.2618 42.4004 48.7925 55.8382 38.2932M83.7605 8.67137C78.1741 7.27609 72.9839 6.03527 68.1841 5.00546M83.7605 8.67137C76.1627 12.3448 69.6236 15.36 63.5255 17.8748M83.7605 8.67137C72.7094 21.9985 63.6585 32.183 55.8382 38.2932M68.1841 5.00546C65.6281 9.40166 63.2321 11.7302 63.5255 17.8748M68.1841 5.00546C56.1438 2.42219 46.5601 1.16677 39.342 2.1321M63.5255 17.8748C67.0366 20.3516 70.4209 20.5331 74.9573 19.0765M63.5255 17.8748C53.3902 22.0546 44.4733 24.852 33.9391 26.9911M54.1722 3.30609C47.6224 9.78049 45.9105 14.1237 47.5882 23.592C50.3551 29.0159 53.7312 30.5283 63.9802 29.6889M39.342 2.1321C33.7932 10.0648 32.1146 15.2514 33.9391 26.9911M33.9391 26.9911C39.5242 36.7919 44.2483 39.6172 55.8382 38.2932"
              stroke="#161616"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <button onClick={()=> {
            goToChoose("Tea" )
          }}>Tea</button>
        </div>
      </div>
      <button className="Cancel__button" onClick={ goToBack }>
        Return
      </button>
    </div>
  );
};
