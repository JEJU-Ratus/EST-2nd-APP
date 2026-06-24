import { memo } from "react";

const Nav = memo(function Nav({ data, onChangeMode }) {
  console.log("Nav render");
  const lists = data.map(content => {
    return (
      <li key={content.id}>
        <a
          href={`/${content.id}`}
          data-id={content.id}
          onClick={e => {
            console.log(e.target.dataset.id);
            e.preventDefault();
            onChangeMode(e.target.dataset.id);
          }}
        >
          {content.title}
        </a>
      </li>
    );
  });

  return (
    <nav>
      <ul>{lists}</ul>
    </nav>
  );
});

export default Nav;
