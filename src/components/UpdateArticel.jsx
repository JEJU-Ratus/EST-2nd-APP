import { useState } from "react";

export default function UpdateArticle({ title, desc, onSubmit }) {
  console.log("UpdateArticle render");
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(desc);
  const handleTitleChange = e => {
    setNewTitle(e.target.value);
  };
  const handleDescChange = e => {
    setNewDesc(e.target.value);
  };
  return (
    <>
      <h2>Update Article</h2>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          onSubmit(newTitle, newDesc);
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="desc" id="desc" value={newDesc} onChange={handleDescChange}></textarea>
        </div>
        <button>submit</button>
      </form>
    </>
  );
}
