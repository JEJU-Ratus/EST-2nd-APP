import { useState } from "react";

export default function UpdateArticle({ title, desc, onSubmit }) {
  console.log("UpdateArticle render");
  // const [newTitle, setNewTitle] = useState(title);
  // const [newDesc, setNewDesc] = useState(desc);
  // const handleTitleChange = e => {
  //   setNewTitle(e.target.value);
  // };
  // const handleDescChange = e => {
  //   setNewDesc(e.target.value);
  // };
  const [content, setContent] = useState({
    title: title,
    desc: desc,
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
    <>
      <h2>Update Article</h2>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          onSubmit(content.title, content.desc);
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={content.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="desc" id="desc" value={content.desc} onChange={handleChange}></textarea>
        </div>
        <button>submit</button>
      </form>
    </>
  );
}
