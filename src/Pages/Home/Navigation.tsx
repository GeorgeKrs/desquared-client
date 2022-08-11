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
        {Object.values(food_categories).map((value) => {
          return (
            <a
              key={value}
              className={
                Object.values(selectedCategory)[0] === value
                  ? "p-2 navigation-item-selected"
                  : "p-2 navigation-item"
              }
              onClick={() =>
                dispath(selectedCategoryActions.storeSelectedCategory(value))
              }
            >
              {value}
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
