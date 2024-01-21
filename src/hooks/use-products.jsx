import { useState, useEffect } from "react";
export default function useProducts({ salesOnly }) {
  // Custom hook으로 만들 함수에서 사용될 State 3종 =====
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);
  // =============================================
  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((e) => setError(`에러: ${e}`))
      .finally(() => setLoading(false));
    return () => {
      console.log("useEffect 호출 끝✨");
    };
  }, [salesOnly]);

  return [loading, error, products];
}
