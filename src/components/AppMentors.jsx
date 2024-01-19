import React, { useReducer } from "react";
import personReducer from "./reducer/personReducer";

// 상태를 전역으로 빼서 분리
const initialPerson = {
  name: "조현진",
  title: "FE주니어개발자",
  mentors: [
    {
      name: "스폰지밥",
      title: "BE시니어개발자",
    },
    {
      name: "제임스",
      title: "FE시니어개발자",
    },
  ],
};

export default function AppMentors() {
  // setState 대신 dispatch함수로 reducer의 state변경 로직을 실행시킨다.
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  // UI변경 로직 함수로 분리
  const handleUpdateMentorName = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶나요?`);
    dispatch({ type: "updated", prev, current });
  };

  const handleAdd = () => () => {
    const name = prompt(`추가하고 싶은 멘토의 이름을 입력해 주세요.`);
    const title = prompt(`추가하고 싶은 멘토의 직함을 입력해 주세요.`);
    dispatch({ type: "added", name, title });
  };

  const handleDelete = () => {
    const name = prompt(`삭제하고 싶은 멘토의 이름을 입력해 주세요.`);
    dispatch({ type: "delete", name });
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
      {/* 분리해둔 UI 로직 함수 사용 */}
      <button onClick={handleUpdateMentorName}>멘토 이름 변경</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </>
  );
}
