import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [quantityTotal, setQuantityTotal] = useState(0);

  function addItem(item, quantity) {
    if (!isInCart(item.id)) {
      setItems([...items, { ...item, quantity }]);
      setQuantityTotal(quantityTotal + quantity);
    }
  }

  function removeItem(item) {
    const newItems = items.filter((i) => i.id !== item.id);
    setItems(newItems);
    setQuantityTotal(quantityTotal - item.quantity);
  }

  function clear() {
    setItems([]);
  }

  function isInCart(id) {
    return items.find((i) => i.id === id);
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        items,
        removeItem,
        clear,
        isInCart,
        quantityTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);

CartProvider.propTypes = { children: PropTypes.node };
CartProvider.defaultProps = { children: "" };

export default CartContext;
