import React, { useState, useEffect } from "react";

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("✅데이터 받음");
        setProducts(data);
      });
    return () => {
      console.log("🧹클리어✨");
    };
  }, [checked]);

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
