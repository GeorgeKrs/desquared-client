import { useNavigate, useLocation } from "react-router-dom";

const CompanyInformation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectHandler = () => {
    if (location.pathname === "/admin") {
      navigate("/");
    } else {
      navigate("/admin");
    }
  };

  return (
    <div
      className="p-4 d-flex justify-content-between sm:justify-content-center"
      style={{ backgroundColor: "#00bfa5" }}
    >
      <div>
        <h3 className="text-white">Restaurant Name</h3>
      </div>

      <div>
        <button className="btn btn-outline-light" onClick={redirectHandler}>
          {location.pathname === "/admin" && "Admin"}
          {location.pathname !== "/admin" && "Shop"}
        </button>
      </div>
    </div>
  );
};

export default CompanyInformation;
