import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faEuroSign } from "@fortawesome/free-solid-svg-icons";

interface Props {
  name?: string;
  description?: string;
  id?: number;
  imageUrl?: string;
  price?: number;
}

const ProductCard = (props: Props) => {
  return (
    <div className="m-2 card" style={{ maxWidth: "300px" }}>
      <img
        className="card-img-top"
        src={
          "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574"
        }
        alt="Card image cap"
      />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <p className="my-0">
            <b>Plate Name</b>
          </p>
          <b>
            15.99
            <FontAwesomeIcon
              className="mx-1"
              size="1x"
              icon={faEuroSign as IconProp}
            />
          </b>
        </div>
        <p className="mt-2 text-secondary">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>

      <button className="m-1 btn btn-outline-dark btn-custom">
        <FontAwesomeIcon className="mx-1" size="1x" icon={faPlus as IconProp} />
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
