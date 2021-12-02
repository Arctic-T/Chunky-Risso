import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
  const [itemCount, setItemCount] = useState(0);
  const { addItem } = useCartContext();

  function onAdd(qty) {
    setItemCount(qty);
    addItem(item, qty);
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={item.pictureUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.price}</p>
        {itemCount === 0 ? (
          <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
        ) : (
          <Link to="/cart" style={{ textDecoration: "none" }}>
            Checkout
          </Link>
        )}
      </div>
    </div>
  );
}
