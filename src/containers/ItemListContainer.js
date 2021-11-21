import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resultList } from "../utills/data";
import ItemCount from "../components/ItemCount";
import ItemList from "../components/ItemList";

export default function ItemListContainer({ greeting }) {
  const [stock, setStock] = useState(5);
  const [list, setList] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const itemListPromise = new Promise((resolve) => {
      setTimeout(() => {
        const listFiltered = resultList.filter(
          (r) => r.category.id === parseInt(categoryId)
        );
        resolve(listFiltered.length > 0 ? listFiltered : resultList);
      }, 2000);
    });

    itemListPromise.then((result) => {
      setList(result);
    });
  }, [categoryId]);

  function onAdd(items) {
    if (stock > 0) {
      setStock(stock - items);
    }
  }

  return (
    <div>
      <h1
        className="border border-2 border-danger text-white-50 bg-dark mt-3"
        style={{ width: "50%", margin: "auto" }}
      >
        {greeting}
      </h1>

      {list.length === 0 && <p>Loading...</p>}
      {list.length > 0 && <ItemList list={list} />}
    </div>
  );
}
