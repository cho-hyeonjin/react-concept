import React, { useState, useEffect } from "react";

export default function Products() {
  // Custom hook으로 만들 함수에서 사용될 State 3종 =====
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);
  // =============================================

  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    // 아래 로직은 웹 애플리케이션에서 너무너무 자주 사용되는 패턴이다.
    // HTTP request가 실패했을 때에는 에러 핸들링으로 예외 처리를 해주고,,
    //               성공했을 때에는 그 데이터를 보여주는 흐름!
    // 너무 자주 사용되는 로직이므로 이것을 하나의 함수로 모듈화 해보는 게 좋다는 생각이 들었다. --> Custom hook!
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("✅데이터 받음");
        setProducts(data);
      })
      .catch((error) => setError("에러 발생!!"))
      .finally(() => setLoading(false));
    return () => {
      console.log("🧹클리어✨");
    };
  }, [checked]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <ul>
        <input
          type="checkbox"
          value={checked}
          onChange={handleChange}
          id="checkebox"
        />
        <label htmlFor="checkebox">Show Only HOT SALE🔥</label>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
