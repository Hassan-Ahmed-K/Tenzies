import "./App.css";
import { useState, useEffect,useRef } from "react";
import { nanoid } from "nanoid";
import Dies from "./Components/dice";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(() => getRandDieNum());
  const [gameWon, setGameWon] = useState(false);
  const ref = useRef(null);

  function getRandDieNum() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    if(!gameWon){
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    } else{
      setDice(getRandDieNum());
    }
  }

  function toggleHold(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  useEffect(() => {
    if (dice.every((die) => die.isHeld) && dice.every((die) => die.value === dice[0].value)) {
      setGameWon(true);
      ref.current.focus();
    } else{
      setGameWon(false);
    }
  }, [dice]);

  return (
    <main>
      {gameWon && <Confetti />}
      <div className="tanzi_div">
        <div className="congratulations">
          {gameWon && (
            <p>Congratulations! You won! Press "New Game" to start again.</p>
          )}
        </div>

        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>

        <Dies dice={dice} toggleHold={toggleHold} />
        <button ref={ref} onClick={rollDice} className="roll_btn">
          {gameWon ? "New Game" : "Roll Dice"}
        </button>
      </div>
    </main>
  );
}

export default App;
