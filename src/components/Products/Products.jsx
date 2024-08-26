import React from "react";

const ProductsData = [
    {
        id:1,
        img: Img1,
        title: "Women Ethnic",
        rating: 5.0,
        author: "white",
        aosDelay: "0",
    },
    {
        id:2,
        img: Img2,
        title: "Women estern",
        rating: 4.5,
        author: "Red",
        aosDelay: "200",
    },
    {
        id:3,
        img: Img3,
        title: "Goggles",
        rating: 4.7,
        author: "brown",
        aosDelay: "400",
    },
    {
        id:4,
        img: Img4,
        title: "Printed T-Shirt",
        rating: 4.4,
        author: "yellow",
        aosDelay: "600",
    },
    {
        id:5,
        img: Img5,
        title: "Fasion T-Shirt",
        rating: 4.5,
        author: "Pink",
        aosDelay: "800",
    },
]

export const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Top Selling Products</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            quidem dignissimos et velit adipisci
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card section */}
            {ProductsData.map(()=>(
                <div></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
