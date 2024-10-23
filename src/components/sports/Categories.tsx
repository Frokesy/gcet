const Categories = () => {
  const items = [
    { id: 1, name: "Football", img: "/assets/sports/st-nine.png" },
    { id: 2, name: "Tennis", img: "/assets/sports/st-ten.png" },
    { id: 3, name: "Gym", img: "/assets/sports/st-eight.png" },
    { id: 4, name: "Basketball", img: "/assets/sports/st-four.png" },
    { id: 5, name: "Boxing", img: "/assets/sports/st-eight.png" },
  ];
  return (
    <div className="w-[90vw] mx-auto py-[10vh]">
      <h2 className="lg:text-[48px] text-[32px] font-semibold text-center text-[#194185]">
        Shop by Categories
      </h2>

      <div className="flex items-center space-x-6 justify-between overflow-x-auto">
        {items.map((item) => (
          <div className="space-y-3 flex flex-col items-center mt-10 flex-shrink-0" key={item.id}>
            <img
              src={item.img}
              alt="img"
              className="rounded-full w-[251px] h-[251px] object-cover"
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
