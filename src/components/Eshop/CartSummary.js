import React, { useContext } from "react";
import { CartContext } from "../../pages/Shop/Shop";

export default function CartSummary() {
  const { countCartArticles } = useContext(CartContext);
  return (
    <>
      <span>Caddie ({countCartArticles()})</span>
    </>
  );
}
