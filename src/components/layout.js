import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div id="body" className="flex-grow body-bg">
      <div className="flex justify-around">
        <div className="responsive-width">
            {children}
        </div>
      </div>
    </div>
    <Footer />
  </div>
)
