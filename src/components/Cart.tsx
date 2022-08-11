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

  let orderCost: number = 0;

  const emptyCartHandler = () => {
    emptyCart();
    dispatch(cartActions.modifyLoader(true));
  };

  useEffect(() => {
    setCartItems(fetchCart());
    console.log(cartItems);
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
                  <>
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
                  </>
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
              disabled={cartItems === null || cartItems.length === 0}
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
