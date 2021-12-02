import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function CartContainer() {
  const { items, removeItem } = useCartContext();
  const total = items.reduce((acc, i) => {
    return acc + i.price * i.quantity;
  }, 0);

  return (
    <div style={{ marginTop: "30px", textAlign: "inherit" }}>
      {items.length === 0 && (
        <Link to="/" style={{ textDecoration: "none" }}>
          Comprar
        </Link>
      )}

      {items.map((i) => {
        return (
          <div>
            <p
              style={{
                textAlign: "justify",
                paddingRight: "10px",
                fontSize: "20px",
              }}
            >
              {i.title} {i.quantity}
            </p>
            <p
              style={{
                textAlign: "justify",
                paddingRight: "10px",
                fontSize: "20px",
              }}
            >
              {i.price * i.quantity}
            </p>
            <button
              onClick={() => {
                removeItem(i);
              }}
            >
              X
            </button>
          </div>
        );
      })}
      <div>{items.length > 0 && <p>Total: {total}</p>}</div>
    </div>
  );
}
