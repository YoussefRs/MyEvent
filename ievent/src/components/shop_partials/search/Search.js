import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

function Search() {
  return (
    <div className="relative flex rounded-md  items-center">
        <div className="absolute inset-y-0 left-2.5 flex items-center">
            <AiOutlineSearch className="w-4 text-gray-600" />
        </div>
        <input
            className="p-2 pl-10 h-full flex-grow flex-shrink outline-none cursor-pointer sm:text-base text-sm rounded-lg bg-gray-200"
            type="text"
            // value={searchTerm}
            placeholder="Search a product"
            // onChange={searchProduct}
        />
    </div>
  )
}

export default Search
