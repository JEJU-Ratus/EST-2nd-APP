import { useState } from "react";
import ArticleForm from "./ArticleForm";

export default function UpdateArticle({ title, desc, onSubmit, level }) {
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
    level: level,
  });

  return (
    <>
      <h2>Update Article</h2>
      <ArticleForm initTitle={title} initDesc={desc} initLevel={level} onSubmit={onSubmit} />
    </>
  );
}
