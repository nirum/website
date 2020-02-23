import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ children }) => (
  <div className="flex flex-col min-h-screen bg-warm-grey-050">
    <Header />
    <div className="flex-grow">
      <div className="flex justify-around">
        <div className="lg:w-192 md:w-9/12 md:px-0 sm:w-full sm:px-12">
            {children}
        </div>
      </div>
    </div>
    <Footer />
  </div>
)
