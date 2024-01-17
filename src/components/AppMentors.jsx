import React, { useState } from "react";

export default function AppMentors() {
  const [person, setPerson] = useState({
    name: "조현진",
    title: "주니어개발자",
    mentors: [
      {
        name: "스폰지밥",
        title: "게발자",
      },
      {
        name: "제임스",
        title: "시니어개발자",
      },
    ],
  });
  return (
    <>
      <h1>
        {person.name} 님은 {person.title} 입니다.
      </h1>
      <p>{person.name} 님의 멘토:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prev) {
                return { ...mentor, name: current };
              }
              return mentor;
            }),
          }));
        }}
      >
        멘토 이름 변경
      </button>
      <button>멘토 타이틀 변경</button>
      <button
        onClick={() => {
          const addMentorName = prompt(
            `추가하고 싶은 멘토의 이름을 입력해 주세요.`
          );
          const addMentorTitle = prompt(
            `추가하고 싶은 멘토의 직함을 입력해 주세요.`
          );
          setPerson((person) => ({
            ...person,
            mentors: [
              ...person.mentors,
              { name: addMentorName, title: addMentorTitle },
            ],
          }));
        }}
      >
        멘토 추가하기
      </button>
      <button
        onClick={() => {
          const deleteMentorName = prompt(
            `삭제하고 싶은 멘토의 이름을 입력해 주세요.`
          );
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.filter(
              (mentor) => mentor.name !== deleteMentorName
            ),
          }));
        }}
      >
        멘토 삭제하기
      </button>
    </>
  );
}
