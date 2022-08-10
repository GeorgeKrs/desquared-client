import Header from "./Header";
import ProductCard from "../../UI/ProductCard";
import { IProduct } from "../../interfaces/product";

interface Props {
  selectedCategory: string;
}

const Products = ({ selectedCategory }: Props) => {
  const dumpData: Array<IProduct> = [
    {
      id: 1,
      imageUrl:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574",
      name: "Plate Name",
      price: 15.99,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      category: "Appetizers",
    },
    {
      id: 2,
      imageUrl:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574",
      name: "Plate Name",
      price: 12.49,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      category: "Appetizers",
    },
    {
      id: 3,
      imageUrl:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574",
      name: "Plate Name",
      price: 7.0,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      category: "Appetizers",
    },
    {
      id: 4,
      imageUrl:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574",
      name: "Plate Name",
      price: 11.99,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      category: "Appetizers",
    },
    {
      id: 5,
      imageUrl:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574",
      name: "Plate Name",
      price: 16.49,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      category: "Appetizers",
    },
    {
      id: 6,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsECMksXtlI8pNIN1JWOQ5-63CvMKlRp42GBItf2zi_I2mwmWKwjcIbApy-7ltF4zmWA&usqp=CAU",
      name: "Plate Name",
      price: 3.5,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      category: "Drinks",
    },
  ];

  const showAll = false;

  return (
    <div className="flex-grow-1 bg-light ">
      <Header selectedCategory={selectedCategory} />
      <hr className="mb-0" style={{ color: "#00bfa5" }} />

      <div className="m-4 p-4 d-flex flex-wrap justify-content-center">
        {showAll &&
          dumpData.map((product: IProduct) => (
            <ProductCard product={product} />
          ))}

        {!showAll &&
          dumpData.map(
            (product: IProduct) =>
              product.category === selectedCategory && (
                <ProductCard product={product} />
              )
          )}
      </div>
    </div>
  );
};

export default Products;
