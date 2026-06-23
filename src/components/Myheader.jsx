export default function Myheader({ title, desc }) {
  return (
    <header>
      <h1 className="logo">{title}</h1>
      <p>{desc}</p>
    </header>
  );
}
