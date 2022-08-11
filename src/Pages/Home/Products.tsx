import Header from "./Header";
import ProductCard from "../../UI/ProductCard";
import { IProduct } from "../../interfaces/product";
import { food_categories } from "../../constants/food_categories";
import { emptyCart } from "../../util/cart";

interface Props {
  selectedCategory: string;
}

const Products = ({ selectedCategory }: Props) => {
  const dumpData: Array<IProduct> = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
      name: "Beef & Pork",
      price: 27.99,
      description:
        "Some description text to provide information such as name and price about the item on the card.",
      category: "Main Dishes",
    },
    {
      id: 2,
      imageUrl:
        "https://restaurantden.com/wp-content/uploads/2017/09/free-stock-food-photography-websites.jpg",
      name: "Fish Plate",
      price: 17.99,
      description:
        "Some description text to provide information such as name and price about the item on the card.",
      category: "Main Dishes",
    },
    {
      id: 3,
      imageUrl:
        "https://static6.depositphotos.com/1066961/553/i/450/depositphotos_5534545-stock-photo-salmon-with-avocado-salsa.jpg",
      name: "Chicken & Salad",
      price: 12.99,
      description:
        "Some description text to provide information such as name and price about the item on the card.",
      category: "Main Dishes",
    },
    {
      id: 4,
      imageUrl:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574",
      name: "Tomato Pasta",
      price: 14.99,
      description:
        "Some description text to provide information such as name and price about the item on the card.",
      category: "Main Dishes",
    },

    {
      id: 5,
      imageUrl:
        "https://kalynskitchen.com/wp-content/uploads/2014/12/2-650-sweet-potato-appetizer-bites-9-kalynskitchen.jpg",
      name: "Sweet Potato Snacks",
      price: 6.0,
      description:
        "Some description text to provide information such as name and price about the item on the card.",
      category: "Appetizers",
    },
    {
      id: 6,
      imageUrl:
        "https://media.istockphoto.com/photos/beautifully-decorated-catering-banquet-with-different-food-snacks-and-picture-id1165401900?k=20&m=1165401900&s=612x612&w=0&h=Ub6xFjMbfyQRKCUT82pd_fN9Iz02Rk-FQzkIQIaRZ0I=",
      name: "Mixed Finger Food",
      price: 8.0,
      description:
        "Some description text to provide information such as name and price about the item on the card.",
      category: "Appetizers",
    },
    {
      id: 7,
      imageUrl:
        "https://www.acouplecooks.com/wp-content/uploads/2022/01/Smoked-Salmon-Appetizer-006.jpg",
      name: "Salmon Finger Food",
      price: 7.99,
      description:
        "Some description text to provide information such as name and price about the item on the card.",
      category: "Appetizers",
    },
    {
      id: 8,
      imageUrl:
        "https://www.fix-beer.gr/wp-content/uploads/2019/02/Fix-Hellas-Outside-Image.png",
      name: "Fix Beer",
      price: 3.5,
      description:
        "Some description text to provide information such as name and price about the item on the card.",
      category: "Drinks",
    },
    {
      id: 9,
      imageUrl:
        "https://amperiadis.gr/wp-content/uploads/2020/11/Bernard-Beers-2.3.jpg",
      name: "Bernard Beer",
      price: 6.0,
      description:
        "Some description text to provide information such as name and price about the item on the card.",
      category: "Drinks",
    },
    {
      id: 10,
      imageUrl:
        "https://www.edelweissbeer.com/media/0gthn2ir/edelweiss-bottle-homepage-blue-background-new-bottle.png",
      name: "Edelweiss",
      price: 5.5,
      description:
        "Some description text to provide information such as name and price about the item on the card.",
      category: "Drinks",
    },
  ];

  return (
    <div className="mb-5 flex-grow-1">
      <Header selectedCategory={selectedCategory} />

      <div className="m-4 p-4 d-flex flex-wrap justify-content-center">
        {Object.values(selectedCategory)[0] === food_categories.SHOW_ALL &&
          dumpData.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}

        {Object.values(selectedCategory)[0] !== food_categories.SHOW_ALL &&
          dumpData.map(
            (product: IProduct) =>
              product.category === Object.values(selectedCategory)[0] && (
                <ProductCard key={product.id} product={product} />
              )
          )}
      </div>
      <button className="btn btn-danger" onClick={emptyCart}>
        Empty Cart
      </button>

      <button
        className="btn btn-success"
        onClick={() => console.log(localStorage.getItem("cart"))}
      >
        SHOW CART ITEMS
      </button>
    </div>
  );
};

export default Products;
