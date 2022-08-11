import { IProduct } from "../interfaces/product";

export const fetchCart = () => {
  let cart: any = localStorage.getItem("cart");
  cart = JSON.parse(cart);
  return cart;
};

export const addToCart = (product: IProduct) => {
  let cart: any = localStorage.getItem("cart");
  cart = JSON.parse(cart);

  if (cart === null || cart.length === 0) {
    cart = [];
  }

  cart.push({ product: product, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (product: IProduct) => {
  //
};

export const emptyCart = () => {
  localStorage.setItem("cart", JSON.stringify([]));
};
