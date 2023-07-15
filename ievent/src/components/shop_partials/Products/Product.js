import React from 'react';
import Image from "next/image";
// import Currency from "react-currency-formatter";
import Link from "next/link";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useRouter } from "next/router";


function Product({ _id, title, price, description, category, image }) {
    const router = useRouter();
  return (
    <>
      <div className="relative  flex flex-col  bg-white z-0 md:p-8 p-6 rounded-md shadow-lg">
        <p className="absolute top-2 right-3 text-xs italic text-gray-400 capitalize">
          {category}
        </p>
        <Image
          src={image}
          height={200}
          width={250}
          alt=""
          objectFit="fill"
          className="cursor-pointer h-[250px]"
          onClick={() => router.push(`/shop/product-details/${_id}`)}
        />
        <h4 className="my-3 link font-medium capitalize">
          <Link href={`/shop/product-details/${_id}`}>
            {title}
            </Link>
        </h4>
        <p className="text-xs  mb-2 line-clamp-2 text-gray-500 link">
          <Link href={`/shop/product-details/${_id}`}>
            {description}
            </Link>
        </p>
        <div className="mb-5 mt-2 font-bold text-gray-700">
          {/* <Currency quantity={price || "10"} currency="TND" /> */}
          <p>PRICE </p>
        </div>
        <button
          className="mt-auto button border-2 hover:text-[color:var(--darker-secondary-color)] border-black rounded-md flex items-center justify-center"
        //   onClick={addItemToCart}
        >
          <AiOutlineShoppingCart className="w-4" />
          <span className="ml-2 ">Add to Cart</span>
        </button>
      </div>
    </>
  )
}

export default Product
