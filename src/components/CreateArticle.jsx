import ArticleForm from "./ArticleForm";

export default function CreateArticle({ onSubmit }) {
  console.log("CreateArticle render");
  return (
    <>
      <h2>Create Article</h2>
      <ArticleForm onSubmit={onSubmit} />
    </>
  );
}
