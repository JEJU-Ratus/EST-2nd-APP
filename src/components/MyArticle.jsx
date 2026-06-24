export default function Myarticle({ title, desc, onChangeMode, onDelete, level }) {
  console.log("article render");

  return (
    <section>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
        {level && <p>난이도 : {level}</p>}
        {onChangeMode && <button onClick={onChangeMode}>수정</button>}
        {onDelete && <button onClick={onDelete}>삭제</button>}
      </article>
    </section>
  );
}
