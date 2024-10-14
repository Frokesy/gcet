import { NavLink } from "react-router-dom";

const HomeDropdown = () => {
  return (
    <div className="bg-[#fff] shadow-xl left-[9vw] py-4 pl-3 pr-6 fixed">
      <div className="">
        <div className="space-y-6 text-[16px]">
          <NavLink to="/">Home Page 1</NavLink>
          <p>Home Page 2</p>
          <p>Home Page 3</p>
          <p>Home Page 4</p>
          <p>Home Page 5</p>
          <p>Home Page 6</p>
        </div>
      </div>
    </div>
  );
};

export default HomeDropdown;
