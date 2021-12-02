import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/CartContext";

function CartWidget() {
  const { quantityTotal } = useCartContext();

  if (quantityTotal === 0) {
    return null;
  }

  return (
    <Link to="/cart" style={{ textDecoration: "none" }}>
      <FontAwesomeIcon icon={faShoppingCart} className="ms-3" />
      {quantityTotal}
    </Link>
  );
}

export default CartWidget;
