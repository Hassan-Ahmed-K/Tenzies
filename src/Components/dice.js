
export default function Dice({ dice, toggleHold }) {
  return (
    <div className="dies">
      {dice.map((die) => {
        return (
          <button
            style={{ backgroundColor: die.isHeld ? "#59E391" : "#ffffff" }}
            key={die.id}
            id={die.id}
            onClick={() => toggleHold(die.id)}
            className="die"
          >
            {die.value}
          </button>
        );
      })}
    </div>
  );
}