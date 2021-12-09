import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { getItemsCollection } from "../utills/firebase";

export default function ItemListContainer({ greeting }) {
  const [list, setList] = useState([]);
  const { categoryId } = useParams();

  async function getItemList() {
    const itemCollection = await getItemsCollection(categoryId);
    setList(itemCollection);
  }

  useEffect(() => {
    getItemList();
  }, [categoryId]);

  return (
    <div>
      <h1
        style={{
          marginBottom: "50px",
          marginTop: "20px",
          color: "green",
        }}
      >
        {greeting}
      </h1>

      {list.length === 0 && <p>Loading...</p>}
      {list.length > 0 && <ItemList list={list} />}
    </div>
  );
}
