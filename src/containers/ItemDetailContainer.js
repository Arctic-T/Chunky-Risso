import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { getItemFromCollection } from "../utills/firebase";

export default function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  async function getItem() {
    const itemFromCollection = await getItemFromCollection(id);
    setItem(itemFromCollection);
  }

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div className="d-flex justify-content-center">
      {!item && <p>Buscando Artículos</p>}
      {item && <ItemDetail item={item} />}
    </div>
  );
}
