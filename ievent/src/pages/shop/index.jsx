
import Banner from '@/components/shop_partials/banner/Banner'
import ShopHeader from '@/components/shop_partials/header/ShopHeader'
import ShopHeaderMobile from '@/components/shop_partials/header/ShopHeaderMobile'
import SideBarMenu from '@/components/shop_partials/header/SideBarMenu'
import React from 'react'

function index() {
  return (
    <>  
        <ShopHeader />
        <ShopHeaderMobile />
        <Banner />
    </>
  )
}

export default index
