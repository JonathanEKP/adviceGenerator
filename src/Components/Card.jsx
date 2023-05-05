import "./Card.css";
import { useEffect, useState } from "react";
import iconDice from "../images/icon-dice.svg";
import dividerPc from "../images/pattern-divider-desktop.svg";

function Card() {
  const [advice, setAdvice] = useState("");

  async function randomAdvice() {
    const resp = await fetch("https://api.adviceslip.com/advice");
    const data = await resp.json();
    setAdvice(data);
  }

  useEffect(() => {
    randomAdvice();
  }, []);

  return (
    <div className="card rounded-4">
      <div className="card-body text-center text-white ">
        <p className="card-title text-uppercase">
          advice #{advice === "" ? "" : advice.slip.id}
        </p>
        <p className="quote">
          {advice === "" ? "" : `"${advice.slip.advice}"`}
        </p>
        <img src={dividerPc} alt="Pattern divider section" />
      </div>
      <div className="btn-container">
        <button className="btn-reset">
          <img src={iconDice} alt="Icon to refresh the advice" onClick={()=> randomAdvice()}/>
        </button>
      </div>
    </div>
  );
}

export default Card;
