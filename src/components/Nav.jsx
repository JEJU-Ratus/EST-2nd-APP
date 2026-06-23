export default function Nav({ data }) {
  const lists = data.map(content => {
    return (
      <li key={content.id}>
        <a href="">{content.title}</a>
      </li>
    );
  });

  return (
    <nav>
      <ul>{lists}</ul>
    </nav>
  );
}
