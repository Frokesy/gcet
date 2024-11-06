import { FC } from "react";

interface CategoriesDropdownProps {
  active: string;
}

const CategoriesDropdown: FC<CategoriesDropdownProps> = ({ active }) => {
  return (
    <div>
      {active === "footwear" && (
        <div className="lg:bg-[#fff] lg:shadow-xl w-[100%] lg:py-10 lg:fixed">
          <div className="w-[90vw] mx-auto">
            <div className="lg:w-[60%] grid lg:grid-cols-4 grid-cols-2 gap-10">
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">
                  Featured
                </h2>
                <p>Fresh Footwears</p>
                <p>Best Sellers</p>
                <p>Popular collections</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">
                  Sneakers
                </h2>
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
                <h2 className="font-semibold text-[16px] uppercase">
                  Sports / Athletics
                </h2>
                <p>Running</p>
                <p>Basketball</p>
                <p>Tennis</p>
                <p>Soccer Cleats</p>
                <p>Hiking Boots</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {active === "wristwatch" && (
        <div className="bg-[#fff] lg:shadow-xl w-[100%] lg:py-10 lg:fixed">
          <div className="w-[90vw] mx-auto">
            <div className="lg:w-[70%] grid lg:grid-cols-4 grid-cols-2 gap-10">
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">
                  Featured
                </h2>
                <p>Luxury</p>
                <p>New Arrivals</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">Luxury</h2>
                <p>Patek Phillipe</p>
                <p>Richard Mille</p>
                <p>Adidas Yeezy</p>
                <p>Audemars Piguet</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">Sports</h2>
                <p>Mike</p>
                <p>Adidas</p>
                <p>G-shock</p>
                <p>Hublot</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">Dress</h2>
                <p>Casio</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {active === "clothes" && (
        <div className="bg-[#fff] lg:shadow-xl w-[100%] lg:py-10 lg:fixed">
          <div className="w-[90vw] mx-auto">
            <div className="lg:w-[80%] grid lg:grid-cols-5 grid-cols-2 gap-10">
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">
                  Featured
                </h2>
                <p>New Arrivals</p>
                <p>Top selling</p>
                <p>Popular collection</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">Casual</h2>
                <p>Jeans</p>
                <p>Blouses</p>
                <p>T-shirts</p>
                <p>Leggings</p>
                <p>Polo Shirts</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">Formal</h2>
                <p>Blazers</p>
                <p>Suits</p>
                <p>Sheath Dresses</p>
                <p>Tailored Pantsuits</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">Party</h2>
                <p>Statement Jackets</p>
                <p>Cocktail Dresses</p>
                <p>Jumpsuits</p>
                <p>Dress Shirts</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">Gym</h2>
                <p>Tank Tops</p>
                <p>Sports Bras</p>
                <p>Athletic Shirts</p>
                <p>Compression Wear</p>
                <p>Shorts or Joggers</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {active === "furniture" && (
        <div className="bg-[#fff] lg:shadow-xl w-[100%] lg:py-10 lg:fixed">
          <div className="w-[90vw] mx-auto">
            <div className="lg:w-[80%] grid lg:grid-cols-5 grid-cols-2 gap-10">
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">
                  Featured
                </h2>
                <p>New Arrivals</p>
                <p>Top selling</p>
                <p>Popular collection</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">
                  Living Room
                </h2>
                <p>Sofas</p>
                <p>TV Stands</p>
                <p>Coffee Tables</p>
                <p>Ottomans</p>
                <p>Arm Chairs</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">Bedroom</h2>
                <p>Beds/Bedframe</p>
                <p>Wardrobes</p>
                <p>Nightstands</p>
                <p>Armoires</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">Kitchen</h2>
                <p>Dining Tables</p>
                <p>Bar Stools</p>
                <p>Kitchen Islands</p>
                <p>Buffets/Sideboards</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">
                  Commercial
                </h2>
                <p>Office Desks</p>
                <p>Conference Tables</p>
                <p>Ergonomic Chairs</p>
                <p>Book Shelves</p>
                <p>Bar Stools</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {active === "tech" && (
        <div className="bg-[#fff] lg:shadow-xl w-[100%] lg:py-10 lg:fixed">
          <div className="w-[90vw] mx-auto">
            <div className="lg:w-[80%] lg:flex justify-between grid grid-cols-2 gap-10">
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">
                  Featured
                </h2>
                <p>New Arrivals</p>
                <p>Top selling</p>
                <p>Popular collection</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">Phones</h2>
                <p>iPhone</p>
                <p>Samsung</p>
                <p>Oppo</p>
                <p>Xiaomi</p>
                <p>Redmi</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">Tablet</h2>
                <p>iPad</p>
                <p>Samsung</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">
                  Monitors
                </h2>
                <p>Apple monitor</p>
                <p>Dell</p>
                <p>Hp</p>
                <p>Toshiba</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">Laptops</h2>
                <p>MacBook</p>
                <p>Dell</p>
                <p>Hp</p>
                <p>Legion</p>
                <p>MSI</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">
                  Headphones
                </h2>
                <p>Oraimo</p>
                <p>Sony</p>
                <p>JBL</p>
                <p>Onya</p>
                <p>iPod</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">
                  Speakers
                </h2>
                <p>Onya</p>
                <p>JBL</p>
                <p>Zealot</p>
                <p>Samsung</p>
                <p>Oraimo</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {active === "sports" && (
        <div className="bg-[#fff] lg:shadow-xl w-[100%] lg:py-10 lg:fixed">
          <div className="w-[90vw] mx-auto">
            <div className="w-[100%] lg:flex justify-between grid grid-cols-2 gap-10">
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">
                  Featured
                </h2>
                <p>Fresh Footwears</p>
                <p>Best Sellers</p>
                <p>Popular collection</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">
                  Football
                </h2>
                <p>Football boots</p>
                <p>Retro Jerseys</p>
                <p>Shin guards</p>
                <p>Hose</p>
                <p>Bibs</p>
                <p>Goalkeeper gloves</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">Tennis</h2>
                <p>Tennis racket</p>
                <p>Tennis ball</p>
                <p>Racket bag</p>
                <p>Wrist bands</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">Gym</h2>
                <p>Sports bra</p>
                <p>Headband</p>
                <p>Weights</p>
                <p>Yoga mats</p>
                <p>Gym Shoes</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">
                  Boxing
                </h2>
                <p>Gloves</p>
                <p>Punching Bag</p>
                <p>Boxing Shorts</p>
                <p>Mouth Guard</p>
                <p>Jump Rope</p>
              </div>
              <div className="space-y-4 text-[14px]">
                <h2 className="font-semibold text-[16px] uppercase">
                  Basketball
                </h2>
                <p>Compression Sleeves</p>
                <p>Basketball</p>
                <p>Shooting Sleeves</p>
                <p>Hoop</p>
                <p>Basketball sneakers</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesDropdown;
