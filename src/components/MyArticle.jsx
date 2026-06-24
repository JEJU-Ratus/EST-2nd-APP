export default function Myarticle({ title, desc, onChangeMode }) {
  console.log("article render");

  return (
    <section>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
      </article>
      <button onClick={() => onChangeMode()}>수정</button>
      <button>삭제</button>
    </section>
  );
}
