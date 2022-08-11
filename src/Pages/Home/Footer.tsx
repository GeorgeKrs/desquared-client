import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="p-2 fixed-bottom bg-dark">
      <div className="d-flex justify-content-center text-white">
        <button className="m-1 btn btn-outline-light">
          <FontAwesomeIcon
            className="mx-1"
            size="1x"
            icon={faShoppingCart as IconProp}
          />
          See Cart
        </button>
      </div>
    </footer>
  );
};

export default Footer;
