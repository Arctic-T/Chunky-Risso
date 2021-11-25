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
      <button type="button" onClick={decreaseItem}>
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={increaseItem}>
        +
      </button>
      <button type="button" onClick={() => onAdd(count)}>
        Agregar al Carrito
      </button>
    </div>
  );
}

export default ItemCount;
