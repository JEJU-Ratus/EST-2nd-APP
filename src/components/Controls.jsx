export default function Controls({ onChangeMode }) {
  console.log("Contorls render");

  return (
    <div className="menu">
      <button onClick={() => onChangeMode()}>Create</button>
    </div>
  );
}
