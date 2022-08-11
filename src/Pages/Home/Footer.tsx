import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Cart from "../../components/Cart";

const Footer = () => {
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <footer className="p-2 fixed-bottom bg-dark">
      {showCart && <Cart setShowCart={setShowCart} />}
      <div className="d-flex justify-content-center text-white">
        <button
          className="m-1 btn btn-outline-light"
          onClick={() => setShowCart(!showCart)}
        >
          <FontAwesomeIcon
            className="mx-1"
            size="1x"
            icon={faShoppingCart as IconProp}
          />
          {showCart && "Close Cart"}
          {!showCart && "See Cart"}

          <span className="m-1 px-2 bg-light border border-light rounded text-dark">
            1
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
