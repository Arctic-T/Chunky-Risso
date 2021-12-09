import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { createOrder } from "../utills/firebase";

export default function CartContainer() {
  const { items, removeItem } = useCartContext();
  const [orderId, setOrderId] = useState(null);
  const total = items.reduce((acc, i) => {
    return acc + i.price * i.quantity;
  }, 0);

  async function pushOrder() {
    try {
      const order = {
        buyer: {
          name: "Stefania",
          phone: 123234443,
          email: "teff.risso@gmail.com",
        },
        items: items,
        total,
      };

      const orderId = await createOrder(order);
      setOrderId(orderId);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{ marginTop: "30px", textAlign: "inherit" }}>
      {items.length === 0 && (
        <Link to="/" style={{ textDecoration: "none" }}>
          Comprar
        </Link>
      )}

      {!orderId &&
        items.map((i) => {
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

      {!orderId && items.length > 0 && (
        <div>
          <p>Total: {total}</p>
          <button
            onClick={() => {
              pushOrder();
            }}
          >
            Hacer compra
          </button>
        </div>
      )}
    </div>
  );
}
