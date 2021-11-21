import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={item.pictureUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.price}</p>
        <Link className="btn btn-primary" to={`/item/${item.id}`}>
          Ver Detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;
