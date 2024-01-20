import { useState, createContext } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode); // 이전 모드를 이전모드의 반대 값으로 set
  return (
    // unbrella 만들기 - 자식 컴포넌트에서 darkMode인지 아닌지 확인, toggling까지 할 수 있도록 props로 전달
    <DarkModeContext.Provider value={{ darkMode: darkMode, toggleDarkMode }}>
      {/* <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>  이렇게 작성 가능하지만 명시적으로 확인하기 위해 위처럼 작성해둠 */}
      {children}
    </DarkModeContext.Provider>
  );
}
