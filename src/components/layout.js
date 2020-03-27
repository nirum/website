import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

export default ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Niru Maheswaranathan</title>
      <link rel="canonical" href="https://nirumaheswaranathan.com/" />
      <meta name="description" content="Personal website of Niru Maheswaranathan" />
      <meta name="keywords" content="research, machine learning, neuroscience, developer" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Helmet>
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
