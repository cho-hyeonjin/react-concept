import React, { useState } from "react";
import useProducts from "../../hooks/use-products";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked });

  const handleChange = () => setChecked((prev) => !prev);
  const [count, setCount] = useState(0);

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
        {products.map((product, idx) => (
          <li key={idx}>
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
