import React from "react";

export default function AppWrap() {
  return (
    <>
      <Navbar>
        <Avatar
          image="https://dimg.donga.com/a/600/0/95/5/wps/SPORTS/IMAGE/2022/12/05/116855261.1.jpg"
          name="제이크 설리"
          size={200}
        ></Avatar>
        <p>I SEE YOU</p>
      </Navbar>
    </>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: "#7DBEDB" }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <>
      <img
        src={image}
        alt={name}
        height={size}
        style={{ borderRadius: "1em" }}
      />
    </>
  );
}
