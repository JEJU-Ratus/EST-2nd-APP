import { useState } from "react";

export default function ArticleForm({ initTitle = "", initDesc = "", initLevel = "", onSubmit }) {
  const [content, setContent] = useState({
    title: initTitle,
    desc: initDesc,
    level: initLevel,
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setContent(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <form
      action=""
      onSubmit={e => {
        e.preventDefault();
        onSubmit(content.title, content.desc, content.level);
      }}
    >
      <div>
        <label htmlFor="title">title</label>
        <input type="text" id="title" name="title" value={content.title} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="desc">desc</label>
        <textarea name="desc" id="desc" value={content.desc} onChange={handleChange}></textarea>
      </div>
      <div>
        <label htmlFor="level">난이도</label>
        <input
          type="number"
          name="level"
          id="level"
          value={content.level}
          onChange={handleChange}
        ></input>
      </div>
      <button>submit</button>
    </form>
  );
}
