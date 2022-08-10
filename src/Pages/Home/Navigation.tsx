import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex-shrink-1">
      <div className="d-flex flex-column navigation-style">
        <NavLink
          to="/appetizers"
          className={({ isActive }) =>
            isActive
              ? "mt-4 p-2 navigation-item-selected"
              : "mt-4 p-2 navigation-item"
          }
        >
          Appetizers
        </NavLink>
        <NavLink
          to="/drinks"
          className={({ isActive }) =>
            isActive ? "p-2 navigation-item-selected" : "p-2 navigation-item"
          }
        >
          Drinks
        </NavLink>
        <NavLink
          to="/main-dishes"
          className={({ isActive }) =>
            isActive ? "p-2 navigation-item-selected" : "p-2 navigation-item"
          }
        >
          Main dishes
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
