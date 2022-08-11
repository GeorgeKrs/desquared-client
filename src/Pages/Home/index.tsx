import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import Products from "./Products";

const Home = () => {
  const selectedCategory = useSelector((state: any) => state.selectedCategory);

  return (
    <div>
      <div className="d-flex">
        <Navigation selectedCategory={selectedCategory} />
        <Products selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default Home;
