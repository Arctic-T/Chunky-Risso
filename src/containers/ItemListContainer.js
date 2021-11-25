import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resultList } from "../utills/data";
import ItemList from "../components/ItemList";

export default function ItemListContainer({ greeting }) {
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
