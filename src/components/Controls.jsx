export default function Controls({ onChangeMode }) {
  return (
    <div className="menu">
      <button onClick={() => onChangeMode()}>Create</button>
    </div>
  );
}
