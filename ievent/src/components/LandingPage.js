
import Header from "./Landing_Page_Partials/Header"
import SlideShow from "./Landing_Page_Partials/SlideShow"
import MulSlideShow from "./Landing_Page_Partials/MulSlideShow"
import SlideShop from "./Landing_Page_Partials/SlideShop"


function LandingPage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div className="overflow-x-hidden ">
        <div className="flex flex-col min-h-screen overflow-x-hidden overflow-y-clip ">
          <main className="grow">
              <SlideShow />
              <MulSlideShow />
              <SlideShop />
          </main>
        </div>
      </div>
    </>
  )
}

export default LandingPage
