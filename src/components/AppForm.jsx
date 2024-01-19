import React, { useState } from "react";

export default function AppForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const handleSubmit = (e) => {
    e.preventDefault(); // submit 이벤트는 새로고침이 기본 설정값이기 때문에 새로고침을 원하지 않으면 e.preventDefault()를 해줘야 한다.
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value }); // 기존 form 데이터는 그대로 두고, 현재 input이 변경되고 있는 이름의 key에 현재 전달받은 value를 override 해준다.
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름: </label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="email">이메일: </label>
      <input
        type="text"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
