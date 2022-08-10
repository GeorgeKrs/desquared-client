import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { IProduct } from "../interfaces/product";

interface Props {
  product: IProduct;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div
      key={product.id + Math.random()}
      className="m-2 card"
      style={{ maxWidth: "300px" }}
    >
      <img
        style={{ minHeight: "270px" }}
        className="card-img-top"
        src={product.imageUrl}
        alt="Card image cap"
      />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <p className="my-0">
            <b>{product.name}</b>
          </p>
          <b>
            {product.price.toFixed(2)}
            <FontAwesomeIcon
              className="mx-1"
              size="1x"
              icon={faEuroSign as IconProp}
            />
          </b>
        </div>
        <p className="mt-2 text-secondary">{product.description}</p>
      </div>

      <button className="m-1 btn btn-outline-dark btn-custom">
        <FontAwesomeIcon className="mx-1" size="1x" icon={faPlus as IconProp} />
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
