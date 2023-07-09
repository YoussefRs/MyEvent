
import Header from '@/components/Landing_Page_Partials/Header'
import ProductFeed from '@/components/shop_partials/Products/ProductFeed'
import Banner from '@/components/Delete/banner/Banner'
import ShopHeader from '@/components/Delete/ShopHeader'
import ShopHeaderMobile from '@/components/Delete/ShopHeaderMobile'
import ShopSmallHeader from '@/components/Delete/ShopSmallHeader'
import React from 'react'


function index() {
  return (
    <>  
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <ProductFeed />
    </>
  )
}

export default index
