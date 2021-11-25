import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { resultList } from "../utills/data";

export default function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const itemPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(resultList.find((r) => r.id === parseInt(id)));
      }, 2000);
    });

    itemPromise.then((result) => {
      setItem(result);
    });
  }, []);

  return (
    <div className="d-flex justify-content-center">
      {!item && <p>Buscando Item...</p>}
      {item && <ItemDetail item={item} />}
    </div>
  );
}
