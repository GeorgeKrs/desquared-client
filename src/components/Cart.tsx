import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { IProduct } from "../interfaces/product";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart";
import { fetchCart, emptyCart } from "../util/cart";

const Cart = () => {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState<IProduct[] | null>(fetchCart());
  const cartLoader = useSelector((state: any) => state.cart.loader);

  const [fullname, setFullname] = useState<string>("");
  const [streetAddress, setStreetAddress] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [comments, setComments] = useState<string>("");

  let orderCost: number = 0;

  let noCustomerInfo =
    fullname.trim() !== "" &&
    streetAddress.trim() !== "" &&
    mobile.trim() !== "";

  const emptyCartHandler = () => {
    emptyCart();
    dispatch(cartActions.modifyLoader(true));
  };

  useEffect(() => {
    setCartItems(fetchCart());
  }, [cartLoader]);

  return (
    <>
      <div className="mt-4 mb-5 d-flex justify-content-center">
        <div className="p-4 bg-light rounded cart-style">
          <div className="">
            <h5 className="">Your order so far:</h5>
            <ul className="list-group">
              {cartItems !== null &&
                cartItems.length > 0 &&
                cartItems.map((item: any) => (
                  <div key={item.product.id}>
                    <div className="d-none">
                      {(orderCost += item.product.price)}
                    </div>

                    <li className="list-group-item">{item.product.name}</li>
                    <li className="list-group-item">
                      {item.product.price.toFixed(2)}
                      <FontAwesomeIcon
                        className="mx-1"
                        size="1x"
                        icon={faEuroSign as IconProp}
                      />
                    </li>
                    <li className="list-group-item">
                      {item.product.description}
                    </li>
                    <hr style={{ backgroundColor: "#00bfa5" }} />
                  </div>
                ))}

              {cartItems !== null && cartItems.length === 0 && (
                <div>
                  <p className="text-danger">
                    Your cart is empty. Please add more products!
                  </p>
                </div>
              )}
            </ul>
          </div>
          <div className="d-flex justify-content-end">
            Order Cost: {orderCost.toFixed(2)}
            <FontAwesomeIcon
              className="mx-1 my-auto"
              size="1x"
              icon={faEuroSign as IconProp}
            />
          </div>
          <hr />
          <h4 className="mt-5 text-center">Customer Information</h4>
          <form className="mt-4 mb-4">
            <label>*Fullname:</label>
            <input
              type="text"
              className="mb-3 form-control"
              onChange={(e) => setFullname(e.target.value)}
            />
            <label>*Street Address:</label>
            <input
              type="text"
              className="mb-3 form-control"
              onChange={(e) => setStreetAddress(e.target.value)}
            />
            <label>*Mobile:</label>
            <input
              type="text"
              className="mb-3 form-control"
              onChange={(e) => setMobile(e.target.value)}
            />
            <label>Comments:</label>
            <textarea
              rows={3}
              className="mb-1 form-control"
              onChange={(e) => setComments(e.target.value)}
            />
            {!noCustomerInfo && (
              <p className="text-danger">
                Please fill all * input areas to proceed with your order.
              </p>
            )}
          </form>
          <div className="d-flex justify-content-between">
            <button
              className="mx-1 btn btn-outline-danger"
              onClick={emptyCartHandler}
              disabled={cartItems === null || cartItems.length === 0}
            >
              Empty Cart
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => console.log("API FOR PAYMENT")}
              disabled={
                cartItems === null || cartItems.length === 0 || !noCustomerInfo
              }
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
