import Item from "./Item";

function ItemList({ list }) {
  return (
    <div className="d-flex justify-content-center mb-3">
      {list.map((l) => (
        <Item item={l} key={l.id} />
      ))}
    </div>
  );
}

export default ItemList;
