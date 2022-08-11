import { IProduct } from "../interfaces/product";

export const fetchCart = () => {
  let cart: any = localStorage.getItem("cart");
  cart = JSON.parse(cart);
  return cart;
};

export const addToCart = (product: IProduct) => {
  let cart: any = localStorage.getItem("cart");
  cart = JSON.parse(cart);
  cart.push({ product: product, quantity: 1 });
  console.log(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (product: IProduct) => {
  //
};

export const emptyCart = () => {
  localStorage.setItem("cart", JSON.stringify([]));
};
