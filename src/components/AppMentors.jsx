import React, { useState } from "react";

// 상태를 전역으로 빼서 분리
const initialPerson = {
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
};

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);
  // UI변경 로직 함수로 분리
  const handleUpdateMentorName = () => {
    const prevMentorName = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const currMentorName = prompt(`이름을 무엇으로 바꾸고 싶나요?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prevMentorName) {
          return { ...mentor, name: currMentorName };
        }
        return mentor;
      }),
    }));
  };
  const handleUpdateMentorTitle = () => {
    const mentorName = prompt(`직함을 바꾸고 싶은 멘토의 이름은 무엇인가요?`);
    const currMentorTitle = prompt(`직함을 무엇으로 바꾸고 싶나요?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === mentorName) {
          return { ...mentor, title: currMentorTitle };
        }
        return mentor;
      }),
    }));
  };
  const handleAdd = () => () => {
    const addMentorName = prompt(`추가하고 싶은 멘토의 이름을 입력해 주세요.`);
    const addMentorTitle = prompt(`추가하고 싶은 멘토의 직함을 입력해 주세요.`);
    setPerson((person) => ({
      ...person,
      mentors: [
        ...person.mentors,
        { name: addMentorName, title: addMentorTitle },
      ],
    }));
  };

  const handleDelete = () => {
    const deleteMentorName = prompt(
      `삭제하고 싶은 멘토의 이름을 입력해 주세요.`
    );
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter(
        (mentor) => mentor.name !== deleteMentorName
      ),
    }));
  };

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
      <button onClick={handleUpdateMentorName}>멘토 이름 변경</button>
      <button onClick={handleUpdateMentorTitle}>멘토 타이틀 변경</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </>
  );
}
