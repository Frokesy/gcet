import { NavLink } from "react-router-dom";

const HomeDropdown = () => {
  return (
    <div className="bg-[#fff] shadow-xl left-[9vw] py-4 pl-3 pr-6 fixed">
      <div className="">
        <div className="space-y-6 text-[16px] flex flex-col">
          <NavLink to="/">Home Page 1</NavLink>
          <NavLink to="/tmp-2/home">Home Page 2</NavLink>
          <NavLink to="/tmp-3/home">Home Page 3</NavLink>
          <NavLink to="/tmp-4/home">Home Page 4</NavLink>
          <NavLink to="/tmp-5/home">Home Page 5</NavLink>
          <p>Home Page 6</p>
        </div>
      </div>
    </div>
  );
};

export default HomeDropdown;
