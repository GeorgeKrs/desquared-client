import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { fetchCart } from "../../util/cart";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";
import Cart from "../../components/Cart";

const Footer = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<number>(0);

  const dispatch = useDispatch();

  const cartLoader = useSelector((state: any) => state.cart.loader);

  useEffect(() => {
    if (cartLoader) {
      setCartItems(fetchCart()?.length);

      if (cartItems === null || cartItems === undefined) {
        setCartItems(0);
      }

      dispatch(cartActions.modifyLoader(false));
    }
  }, [cartLoader]);

  return (
    <footer className="p-2 fixed-bottom bg-dark">
      {showCart && <Cart />}
      <div className="d-flex justify-content-center text-white">
        <button
          className="m-1 btn btn-outline-light"
          onClick={() => setShowCart(!showCart)}
          disabled={cartLoader}
        >
          <FontAwesomeIcon
            className="mx-1"
            size="1x"
            icon={faShoppingCart as IconProp}
          />
          {cartLoader && "Please Wait..."}

          {showCart && !cartLoader && "Close Cart"}
          {!showCart && !cartLoader && "See Cart"}

          <span className="m-1 px-2 bg-light border border-light rounded text-dark">
            {cartItems === null || cartItems === undefined ? 0 : cartItems}
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
