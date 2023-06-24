import FeaturesZigZag from "./Landing_Page_Partials/FeaturesZigZag"
import Header from "./Landing_Page_Partials/Header"
import HeroHome from "./Landing_Page_Partials/HeroHome"
import images from '@/utils/landing_page_utils'


function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col min-h-screen overflow-x-hidden overflow-y-clip">
        <Header className="overflow-x-hidden" />

        <main className="grow">
            <HeroHome />
            <FeaturesZigZag images={images} />
        </main>
      </div>
    </div>
  )
}

export default LandingPage
