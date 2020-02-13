import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import Splash from "../components/splash"

export default () => (
  <div className="flex flex-col min-h-screen" style={{"background": "linear-gradient(180deg, #cccccc, #3181cd)"}}>
    <Header />
    <Splash />
    <div className="flex-grow"></div>
    <Footer />
  </div>
)
