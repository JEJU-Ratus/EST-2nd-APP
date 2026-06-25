export default function ArticleForm({ onSubmit }) {
  return (
    <form
      action=""
      onSubmit={e => {
        e.preventDefault();
        onSubmit(e.target.title.value, e.target.desc.value, e.target.level.value);
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
  );
}
