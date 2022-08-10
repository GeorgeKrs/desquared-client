import { food_categories } from "../../constants/food_categories";
import { useDispatch } from "react-redux";
import { selectedCategoryActions } from "../../store/SelectedCategory";

interface Props {
  selectedCategory: string;
}

const Navigation = ({ selectedCategory }: Props) => {
  const dispath = useDispatch();

  return (
    <div className="flex-shrink-1">
      <ul className="d-flex flex-column navigation-style list-group">
        <a
          className={
            selectedCategory === food_categories.APPETIZERS
              ? "navigation-item-selected"
              : "navigation-item"
          }
          onClick={() =>
            dispath(
              selectedCategoryActions.storeSelectedCategory(
                food_categories.APPETIZERS
              )
            )
          }
        >
          Appetizers
        </a>
        <li
          className={
            selectedCategory === food_categories.DRINKS
              ? "navigation-item-selected"
              : "navigation-item"
          }
          onClick={() =>
            dispath(
              selectedCategoryActions.storeSelectedCategory(
                food_categories.DRINKS
              )
            )
          }
        >
          Drinks
        </li>
        <li
          className={
            selectedCategory === food_categories.MAIN_DISHES
              ? "navigation-item-selected"
              : "navigation-item"
          }
          onClick={() =>
            dispath(
              selectedCategoryActions.storeSelectedCategory(
                food_categories.MAIN_DISHES
              )
            )
          }
        >
          Main dishes
        </li>
        {/* <li
          className={
            selectedCategory === food_categories.SHOW_ALL
              ? "navigation-item-selected"
              : "navigation-item"
          }
          onClick={() =>
            dispath(
              selectedCategoryActions.storeSelectedCategory(
                food_categories.SHOW_ALL
              )
            )
          }
        >
          Show All
        </li> */}
      </ul>
    </div>
  );
};

export default Navigation;
