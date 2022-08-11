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
    <div className="p-4 d-flex justify-content-between sm:justify-content-center bg-dark">
      <div>
        <h3 className="text-white">Restaurant Name</h3>
      </div>

      <div>
        <button className="btn btn-outline-light" onClick={redirectHandler}>
          {location.pathname === "/admin" && "Shop"}
          {location.pathname !== "/admin" && "Admin"}
        </button>
      </div>
    </div>
  );
};

export default CompanyInformation;
// 8mgoAoZ0vhQdt7bX
// 8mgoAoZ0vhQdt7bX
// 8mgoAoZ0vhQdt7bX
// 8mgoAoZ0vhQdt7bX
// 8mgoAoZ0vhQdt7bX
// 8mgoAoZ0vhQdt7bX

// testUser = WYmVOrb92AuKRcXq
// testUser = WYmVOrb92AuKRcXq
