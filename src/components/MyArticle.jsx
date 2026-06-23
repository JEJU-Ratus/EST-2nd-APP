export default function Myarticle({ title, desc }) {
  console.log("article render");

  return (
    <section>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
      </article>
    </section>
  );
}
