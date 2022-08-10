import Header from "./Header";
import ProductCard from "../../UI/ProductCard";

const Products = () => {
  return (
    <div className="flex-grow-1 bg-light ">
      <Header />
      <hr className="mb-0" style={{ color: "#00bfa5" }} />

      <div className="m-4 p-4 d-flex flex-wrap justify-content-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
