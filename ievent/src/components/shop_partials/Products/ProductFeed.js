import React from 'react'
import { useState } from "react";
import Product from './Product';
import { HiAdjustments } from "react-icons/hi";

function ProductFeed() {
    const categories = [
        {
            name : "Artist 1"
        },
        {
            name : "Artist 2"
        },
        {
            name : "Artist 3"
        },
    ];
    const products = [
        {
          _id: 1,
          title: "Product 1",
          price: 9.99,
          description: "Description for Product 1",
          category: "Artist 1",
          image: "/img/ShopPics/j1.jpg"
        },
        {
          _id: 2,
          title: "kalsoun samara",
          price: 19.99,
          description: "Description for Product 2",
          category: "Artist 2",
          image: "/img/ShopPics/j2.png"
        },
        {
          _id: 3,
          title: "Product 3",
          price: 14.99,
          description: "Description for Product 3",
          category: "Artist 3",
          image: "/img/ShopPics/j3.jpg"
        }
      ];
      
    const [categoryActive, setCategoryActive] = useState("all");
    const [filteredProducts, setFilteredProducts] = useState(products);

    const activeCategoryHandler = (category) => {
        if (category === "all" || categoryActive === category) {
          setCategoryActive("all");
          return;
        }
        setCategoryActive(category);
        filterProducts(category);
      };

      const filterProducts = (category) => {
        setFilteredProducts(
          products.filter((product) => product?.category === category)
        );
      };

  return (
    <div className="w-full px-6 bg-transparent " id="products-feed" >
      <div className='fixed top-20 pt-1 mt-1 z-10 bg-black h-12 w-full'>
        <div className="flex items-center top- w-full max-w-screen-xl sm:mb-20 mb-16 gap-4  mx-auto overflow-x-auto hideScrollBar capitalize text-sm font-medium">
          <div>
            <HiAdjustments className="w-8 h-8 text-white" />
          </div>
          <div
            className={` py-2 px-6 bg-white  text-center  text-black hover:bg-[color:var(--secondary-color)] rounded  transition-all cursor-pointer ease-in-out duration-200 shadow ${categoryActive === "all" ? "bg-[color:var(--secondary-color)] text-black" : ""
              }`}
            onClick={() => activeCategoryHandler("all")}
          >
            All
          </div>
          {categories?.map((category, i) => (
            <div
              key={`category-${i}`}
              className={`py-2 px-2  bg-white text-center overflow-x-hidden whitespace-nowrap rounded hover:bg-[color:var(--secondary-color)] transition-all cursor-pointer ease-in-out duration-200 shadow ${categoryActive === category?.name
                  ? "bg-[color:var(--secondary-color)] text-black"
                  : ""
                }`}
              onClick={() => activeCategoryHandler(category?.name)}
            >
              {category?.name}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-flow-row-dense mt-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 mx-auto max-w-screen-xl gap-x-6 gap-y-8 ">
        {(categoryActive === "all" ? products : filteredProducts)?.map(
          ({ _id, title, price, description, category, image }) => (
            <Product
              key={`product-${_id}`}
              _id={_id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          )
        )}
      </div>
    </div>
  )
}

export default ProductFeed
