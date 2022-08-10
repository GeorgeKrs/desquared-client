import Navigation from "./Navigation";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <div className="d-flex">
        <Navigation />
        <Products />
      </div>
    </div>
  );
};

export default Home;
