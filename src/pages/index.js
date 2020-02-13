import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-grow">Hello world!</div>
    <Footer />
  </div>
)
