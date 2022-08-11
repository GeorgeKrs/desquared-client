import { IProduct } from "../interfaces/product";

interface Props {
  setShowCart: any;
}

const Cart = ({ setShowCart }: Props) => {
  const cartData: Array<IProduct> = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
      name: "Plate Name",
      price: 15.99,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      category: "Appetizers",
    },
    {
      id: 2,
      imageUrl:
        "https://2aj47i3u0emv3rfnwz2zoyfm-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/foodiesfeed.jpg",
      name: "Plate Name",
      price: 12.49,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      category: "Appetizers",
    },
    {
      id: 7,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsECMksXtlI8pNIN1JWOQ5-63CvMKlRp42GBItf2zi_I2mwmWKwjcIbApy-7ltF4zmWA&usqp=CAU",
      name: "Plate Name",
      price: 3.5,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      category: "Drinks",
    },
  ];

  return (
    <>
      <div className="mt-4 mb-5 d-flex justify-content-center">
        <div className="p-4 bg-light rounded cart-style">
          <div className="">
            <h5 className="">Your order so far:</h5>
            <ul className="list-group">
              {cartData.map((product: IProduct) => (
                <>
                  <li className="list-group-item">{product.name}</li>
                  <li className="list-group-item">{product.price}</li>
                  <li className="list-group-item">{product.description}</li>
                  <hr />
                </>
              ))}
            </ul>
          </div>

          <div className="d-flex justify-content-end">
            <button
              className="btn btn-outline-dark"
              onClick={() => setShowCart(false)}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
