import React from "react";
import { useState, useCallback } from "react";
import "./AppMentor.css";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "조현진",
    title: "주니어 개발자",
    mentor: {
      name: "제임스",
      title: "시니어 개발자",
    },
  });

  return (
    <>
      <div>
        <h1>
          {person.name} 님은 {person.title} 입니다.
        </h1>
        <p className="title">
          {person.name} 님의 멘토는 {person.mentor.name}
          {`(${person.mentor.title})`}
          입니다.
        </p>
        <button
          onClick={() => {
            const name = prompt(`멘토의 이름은?`);
            setPerson((person) => ({
              ...person,
              mentor: { ...person.mentor, name },
            }));
          }}
        >
          멘토 이름 바꾸기
        </button>
        <button
          onClick={() => {
            const title = prompt(`멘토의 타이틀은?`);
            setPerson((person) => ({
              ...person,
              mentor: { ...person.mentor, title: title },
            }));
          }}
        >
          멘토 타이틀 바꾸기
        </button>
      </div>
    </>
  );
}
