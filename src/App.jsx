import "./App.css";
import Myheader from "./components/Myheader";
import Nav from "./components/Nav";
import Myarticle from "./components/MyArticle";
import { useState } from "react";
// Myheader 컴포넌트

function App() {
  console.log("app render");
  // 모드
  const [mode, setMode] = useState("welcome");
  // 데이터들
  const [id, setId] = useState(1);
  const [subject, setSubject] = useState({
    title: "프론트엔드 개발자",
    desc: "기본언어인 html, css, javascript부터 학습합니다.",
  });
  const [content, setContent] = useState([
    { id: 1, title: "UI/UX 개발", desc: "사용자 경험을 고려한 직관적이고 반응성 높은 화면 구현" },
    {
      id: 2,
      title: "재사용이 가능한 UI 개발",
      desc: "컴포넌트 기반으로 동일한 UI를 효율적으로 재사용 가능",
    },
    { id: 3, title: "애니메이션 구현", desc: "상태 변화에 따른 자연스럽고 동적인 화면 효과 구현" },
  ]);
  const welcome = { title: "welcome", desc: "welcome to react" };
  // 모드에 따른 출력
  let _title = null;
  let _desc = null;
  if (mode === "welcome") {
    _title = welcome.title;
    _desc = welcome.desc;
  } else if (mode === "read") {
    // read 모드일때
    const selected = content.find(c => c.id === id);
    if (selected) {
      _title = selected.title;
      _desc = selected.desc;
    }
  } else if (mode === "create") {
    // create 모드일때
  } else if (mode === "update") {
    // update 모드일때
  }
  return (
    <>
      <Myheader
        title={subject.title}
        desc={subject.desc}
        onChangeMode={() => {
          setMode("welcome");
        }}
      />
      {/* <header>
        <h1
          className="logo"
          onClick={() => {
            setMode("welcome");
          }}
        >
          {subject.title}{" "}
        </h1>
        <p>{subject.desc}</p>
      </header> */}
      <Nav
        data={content}
        onChangeMode={_id => {
          setMode("read");
          setId(_id);
        }}
      />
      <Myarticle title={_title} desc={_desc} />
    </>
  );
}

export default App;
