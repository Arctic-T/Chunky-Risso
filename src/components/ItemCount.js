import React, { useState, useEffect } from "react";

function ItemCount({ initial = 1, stock, onAdd }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(initial);
  }, []);

  function increaseItem() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function decreaseItem() {
    if (count > initial + 1) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-success me-1"
        onClick={decreaseItem}
      >
        -
      </button>

      <span className="me-1" style={{ color: "black", fontWeight: "bold" }}>
        {count}
      </span>

      <button
        type="button"
        className="btn btn-outline-success me-1"
        onClick={increaseItem}
      >
        +
      </button>

      <button
        type="button"
        className="btn btn-success me-2"
        onClick={() => onAdd(count)}
      >
        Agregar al Carrito
      </button>
    </div>
  );
}

export default ItemCount;
