import { NavLink } from "react-router-dom";

const HomeDropdown = () => {
  return (
    <div className="bg-[#fff] lg:shadow-xl lg:left-[9vw] lg:py-4 lg:fixed">
      <div className="">
        <div className="space-y-2 lg:text-[15px] text-[14px] flex flex-col">
          <NavLink
            to="/"
            className="hover:bg-[#000] hover:text-[#fff] lg:pl-3 pr-6 py-2 rounded-md transition-all duration-300 ease-in-out"
          >
            Home Page 1
          </NavLink>
          <NavLink
            to="/tmp-2/home"
            className="hover:bg-[#ff4405] hover:text-[#fff] lg:pl-3 pr-6 py-2 rounded-md transition-all duration-300 ease-in-out"
          >
            Home Page 2
          </NavLink>
          <NavLink
            to="/tmp-3/home"
            className="hover:bg-[#0e9384] hover:text-[#fff] lg:pl-3 pr-6 py-2 rounded-md transition-all duration-300 ease-in-out"
          >
            Home Page 3
          </NavLink>
          <NavLink
            to="/tmp-4/home"
            className="hover:bg-[#553a32] hover:text-[#fff] lg:pl-3 pr-6 py-2 rounded-md transition-all duration-300 ease-in-out"
          >
            Home Page 4
          </NavLink>
          <NavLink
            to="/tmp-5/home"
            className="hover:bg-[#606baf] hover:text-[#fff] lg:pl-3 pr-6 py-2 rounded-md transition-all duration-300 ease-in-out"
          >
            Home Page 5
          </NavLink>
          <NavLink
            to="/tmp-6/home"
            className="hover:bg-[#039855] hover:text-[#fff] lg:pl-3 pr-6 py-2 rounded-md transition-all duration-300 ease-in-out"
          >
            Home Page 6
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomeDropdown;
