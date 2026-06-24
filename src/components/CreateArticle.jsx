export default function CreateArticle({ onSubmit }) {
  console.log("CreateArticle render");
  return (
    <>
      <h2>Create Article</h2>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          onSubmit(e.target.title.value, e.target.desc.value);
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input type="text" id="title" name="title" />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="desc" id="desc"></textarea>
        </div>
        <div>
          <label htmlFor="level">난이도</label>
          <input type="number" name="level" id="level"></input>
        </div>
        <button>submit</button>
      </form>
    </>
  );
}
