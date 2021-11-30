import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(item, quantity) {
    if (!isInCart(item.id)) {
      setItems([...items, { ...item, quantity }]);
    }
  }

  function removeItem(id) {
    const newItems = items.filter((i) => i.id !== id);
    setItems(newItems);
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
