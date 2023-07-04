import React from 'react'
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function Dashboard_Filter() {
  return (
    // add filter options to the DOM element
    <div>
      <h2 className='text-white text-lg font-medium mb-2'>Filter Options</h2>
      <form className='flex flex-col gap-y-3'>
        {/*input to search through keyword */}
        <div className='mb-2'>
            <label htmlFor='keyword' className='text-white font-medium block mb-1'>
                keyword
            </label>
            <input
                type="text"
                id="keyword"
                name="keyword"
                // value={}
                className='filterInput'
                placeholder='Search by keyword...'
            />
        </div>
        {/*Selection menu to choose a categroy */}
        <div className='mb-2'>
            <label
                htmlFor='category'
                className='font-medium block mb-1 text-white'
            >
                Category
            </label>
            <select
                id='category'
                name='category'
                // value={}
                onChange={()=>{}} //handleInputChange
                className='filterInput'
            >
                <option value="">Select a category...</option>
                <option value="category1">Techno</option>
                <option value="category2">Trance</option>
                <option value="category3">Personalized</option>
            </select>
        </div>
        {/*Input field to filter through a date range */}
        <div className='mb-2'>
            <label
                htmlFor='dateRange'
                className='font-medium block mb-1 text-white'
            >
                Date Range
            </label>
            <input 
                type='date'
                id='dateRange'
                name='dateRange'
                // value={}
                onChange={() => {}}
                className='filterInput'
            />
        </div>
        <div>
            <h3 className='text-white font-medium mb-1'>Price</h3>
            <Slider className='bg-white'
                range
                min={0}
                max={300}
                step={10}
                defaultValue={[10,100]}
                // value={}
                onChange={() => {}}
            />
            <p className='text-white'>DT - DT</p>
        </div>
      </form>
      <button
        onClick={() => {}}
        className='w-full mt-2 text-white py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-800'
      >
        Clear Filters
      </button>
    </div>
  )
}

export default Dashboard_Filter
