import React from "react";

const CategoriesDropdown = () => {
  return (
    <div className="bg-[#fff] shadow-xl w-[100%] py-10 fixed">
      <div className="w-[90vw] mx-auto">
        <div className="w-[60%] grid grid-cols-4">
          <div className="space-y-4 text-[14px]">
            <h2 className="font-semibold text-[16px] uppercase">Featured</h2>
            <p>Fresh Footwears</p>
            <p>Best Sellers</p>
            <p>Popular collections</p>
          </div>
          <div className="space-y-4 text-[14px]">
            <h2 className="font-semibold text-[16px] uppercase">Sneakers</h2>
            <p>Nike Air Force</p>
            <p>New Balance</p>
            <p>Adidas Yeezy</p>
            <p>Nike Air Jordan 1</p>
            <p>Vans Old Skool</p>
          </div>
          <div className="space-y-4 text-[14px]">
            <h2 className="font-semibold text-[16px] uppercase">Shoes</h2>
            <p>Loafers</p>
            <p>Oxford</p>
            <p>Brogues</p>
            <p>Derby</p>
          </div>
          <div className="space-y-4 text-[14px]">
            <h2 className="font-semibold text-[16px] uppercase">Sports / Athletics</h2>
            <p>Running</p>
            <p>Basketball</p>
            <p>Tennis</p>
            <p>Soccer Cleats</p>
            <p>Hiking Boots</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesDropdown;
